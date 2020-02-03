import React ,{ useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import {withRouter} from 'react-router-dom';
import {changeField, initializeForm, login} from '../../modules/auth';
import AuthForm from "./AuthForm";
import {check} from '../../modules/user';

const LoginForm = ({history}) => {
    const dispatch = useDispatch();
    const {form, auth,authError,user} = useSelector(({auth,user})=> ({
            form:auth.login,
            auth:auth.auth,
            authError: auth.authError,
            user: user.user
    }));

    const onChange = e => {
        const {value,name} = e.target;
        dispatch(
            changeField({
                form:'login',
                key: name ,
                value
            })
        ); 
    };

    const onSubmit = e => {
        e.preventDefault();
        //구현 예정
        const {username,password} =form;
        dispatch(login({ username,password}));
    }

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if(authError) {
            console.log('에러 발생');
            console.log(authError);
            return;
        }
        if(auth){
            console.log('로그인 성공');
            console.log(auth);
            dispatch(check());
            history.push('/dashboard');
        }
    }, [auth,authError,dispatch,history]);

    useEffect(() => {
        if(user) {
            console.log('check API 성공');
            console.log(user);
        }
    },[user]);

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default withRouter(LoginForm);
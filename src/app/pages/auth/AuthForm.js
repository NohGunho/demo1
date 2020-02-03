import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../../common/Button';

// 회원가입 , 로그인 폼.

const AuthFormBlock =  styled.div`
    h3 {
        margin : 0;
        color : ${palette.gray[8]};
        margin-bottom : 1rem;
    }
`;

const StyledInput = styled.input`
    font-size : 1rem;
    border : none;
    border-bottom : 1px solid ${palette.gray[5]};
    padding-bottom : 0.5rem;
    outline : none;
    width : 100%;
    &:focus{
        color : $oc-teal-7;
        border-bottom : 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top : 1rem;
    }

    ${props => 
        props.margin && 
        css`
            margin-top:1rem;     
    `}
`;

const Footer = styled.div`
    margin-top : 2rem;
    text-align : right;
    a {
        color : ${palette.gray[6]};
        text-decoration : underline;
        &:hover {
            color : ${palette.gray[9]};
        }
    }
`;

const ButtonWithMarginTop = styled(Button)`
    margin-top : 1rem;
`

const textMap = {
    login : '로그인',
    register : '사용신청',
}

const AuthForm = ({type, form , onChange, onSubmit}) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput 
                    autoComplete="username" 
                    name="username" 
                    placeholder="아이디"
                    onChange={onChange}
                    value={form.username}
                    />
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                    onChange={onChange}
                    value={form.password}
                />
                {/* 로그인시 보여지는 otp 입력화면 및 로그인 버튼 */}
                {type === 'login' && (
                    <div>
                    <StyledInput margin autoComplete="otp" name="otp" placeholder="google OTP번호" />
                    <ButtonWithMarginTop cyan fullWidth>로그인</ButtonWithMarginTop>
                    </div>
                )}
                {type === 'register' && (
                    <div>
                        <StyledInput margin autoComplete="username" name="username" placeholder="이름" />
                        <StyledInput margin autoComplete="phone" name="phone" placeholder="전화번호" />
                        <StyledInput margin autoComplete="email" name="email" placeholder="이메일주소" />
                        회원가입 페이지
                        <ButtonWithMarginTop cyan fullWidth>사용신청</ButtonWithMarginTop>
                    </div>
                )}
            </form> 
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">사용신청</Link>
                ):(<Link to="/login">로그인페이지</Link>)}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;
import Router from 'koa-router';
import * as authCtrl from './auth.ctrl';

const auth = new Router();

auth.post('/register',authCtrl.register);
auth.get('/check',authCtrl.check);
auth.post('/login',authCtrl.login);
auth.post('/logout',authCtrl.logout);

export default auth;
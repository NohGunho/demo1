import Router from 'koa-router';
import posts from './posts';
import auth from './auth';
import hit from './hit';
import news from './news';

const api = new Router();

api.use('/posts',posts.routes());
api.use('/auth',auth.routes());
api.use('/hit',hit.routes());
api.use('/news',news.routes());

export default api;
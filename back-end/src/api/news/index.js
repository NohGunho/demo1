import Router from 'koa-router';
import * as newsCtrl from './news.ctrl';

const news = new Router();

news.post('/',newsCtrl.write);
news.get('/',newsCtrl.newsList);

export default news;

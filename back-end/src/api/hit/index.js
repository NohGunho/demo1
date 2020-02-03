import Router from 'koa-router';
import * as hitCtrl from './hit.ctrl';

const hit = new Router();

hit.get('/hit',hitCtrl.hitList);
hit.get('/scrap',hitCtrl.scrapList);
hit.post('/',hitCtrl.write);

export default hit;

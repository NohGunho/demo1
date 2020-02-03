import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedln from '../../lib/checkLoggedln';

const posts = new Router();

posts.get('/',postsCtrl.list);
posts.post('/',checkLoggedln,postsCtrl.write);

const post = new Router(); // api/posts/:id

post.get('/',postsCtrl.read);
post.delete('/',checkLoggedln,postsCtrl.checkOwnPost,postsCtrl.remove);
post.patch('/',checkLoggedln,postsCtrl.checkOwnPost,postsCtrl.update);

posts.use('/:id',postsCtrl.getPostById,post.routes());

export default posts;

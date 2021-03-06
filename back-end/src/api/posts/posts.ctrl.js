import Post from '../../models/post'
import mongoose from 'mongoose';
import Joi from 'joi';

const {ObjectId} = mongoose.Types;

export const getPostById = async (ctx,next) => {
    const {id} = ctx.params;
    if(!ObjectId.isValid(id)){
        ctx.status=400;
        return;
    }
    try{
        const post = await Post.findById(id);
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.state.post = post;
        return next();
    }catch(e){
        ctx.throw(500,e);
    }
};


// Post 작성 
export const write = async ctx => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags:Joi.array()
        .items(Joi.string())
        .required(),
    });

    const result = Joi.validate(ctx.request.body , schema);
    if(result.error){
        ctx.status=400;
        ctx.body=result.error;
        return;
    }

    const { title,body ,tags} = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags,
        user:ctx.state.user,
    });
    try{
        await post.save();
        ctx.body=post;
    } catch(e){
        ctx.throw(500,e);
    }
};

//Get 포스트 조회 username, tag 포함하여 필터링 조회
export const list = async ctx => {
    const page = parseInt(ctx.query.page || '1',10);
    if(page<1){
        ctx.status=400;
        return;
    }

    const {tag , username } = ctx.query;

    const query = {
        ...(username ? { 'user.username' : username}: {}),
        ...(tag ? { tags: tag}:{}),
    };

    try{
        const posts =  await Post.find(query)
        .sort({_id:-1})
        .limit(10)
        .skip((page-1)*10)
        .lean()
        .exec();
        const postCount = await Post.countDocuments(query).exec();
        ctx.set('Last-Page', Math.ceil(postCount/10));

        ctx.body = posts
        .map(post => ({
            ...post,
            body:
            post.body.length< 200 ? post.body : `${post.body.slice(0,200)}...`,
        }));
    }catch(e){
        ctx.throw(500,e);
    }
}

// Get 특정 포스트 조회 /:id
export const read = ctx => {
   ctx.body = ctx.state.post;
}

//Delete 포스트 제거
export const remove = async ctx => {
    const {id} = ctx.params;

    try{
        await Post.findByIdAndRemove(id).exec();
        ctx.status =204;
    }catch(e){
        ctx.throw(500,e);
    }
};

//Put 포스트 수정 (전체 덮어씌움)
export const update = async ctx => {

    const schema = Joi.object().keys({
        title: Joi.string(),
        body: Joi.string(),
        tags:Joi.array()
        .items(Joi.string()),
    });

    const result = Joi.validate(ctx.request.body,schema);

    if(result.error){
        ctx.status =400;
        ctx.body = result.error;
        return;
    }


    const {id} =  ctx.params;
    try{
        const post = await Post.findByIdAndUpdate(id,ctx.request.body,{
            new:true,
        }).exec();

        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body=post;
    }catch(e){
        ctx.throw(500,e);
    }
};

//Patch 포스트 수정 (특정 필드 변경)
export const replace = ctx => {
    const {id} = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);

    if (index === -1){
        ctx.status = 404;
        ctx.body = {
            message : '포스트가 존재하지 않습니다.'
        }
        return;
    }
    posts[index] = {
        ...posts[index],
        ...ctx.request.body
    }
    ctx.body = posts[index];
};

export const checkOwnPost = (ctx,next) => {
    const {user,post} = ctx.state;
    if(post.user._id.toString() !== user._id){
        ctx.status=403;
        return;
    }
    return next();
}

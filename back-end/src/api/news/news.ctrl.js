import News from '../../models/news'
import mongoose from 'mongoose';
import Joi from 'joi';

const {ObjectId} = mongoose.Types;


// Post 작성 (기사 히트수 ,스크랩수 더미데이터 입력용) 
export const write = async ctx => {
    const schema = Joi.object().keys({
        newsid :Joi.string().required(),
        newstitle :Joi.string().required(),
        newsimage :Joi.string().required(),
        reporterid :Joi.string().required(),
        category :Joi.string().required(),
        newshitCnt : Joi.number().required(),
        newsscrapCnt : Joi.number().required(),
    });

    const result = Joi.validate(ctx.request.body , schema);
    if(result.error){
        ctx.status=400;
        ctx.body=result.error;
        return;
    }

    const { newsid,newstitle,newsimage,reporterid,category,newshitCnt,newsscrapCnt} = ctx.request.body;
    const news = new News({
        newsid,
        newstitle,
        newsimage,
        reporterid,
        category,
        newshitCnt,
        newsscrapCnt,
    });
    try{
        await news.save();
        ctx.body=news;
    } catch(e){
        ctx.throw(500,e);
    }
};

//Get 입력한 데이터 조회용.
export const newsList = async ctx => {
    const page = parseInt(ctx.query.page || '1',10);
    if(page<1){
        ctx.status=400;
        return;
    }

    try{
        const news = await News.find()
        .sort({newshitCnt : -1})
        .limit(5)
        .lean()
        .exec();
    
        ctx.body = news;
    }catch(e){
        ctx.throw(500,e);
    }
}

export const scrapList = async ctx => {
    const page = parseInt(ctx.query.page || '1',10);
    if(page<1){
        ctx.status=400;
        return;
    }

    try{
        const hit = await Hit.find()
        .sort({newsscrapCnt : -1})
        .limit(5)
        .lean()
        .exec();
    
        ctx.body = hit;
    }catch(e){
        ctx.throw(500,e);
    }
}


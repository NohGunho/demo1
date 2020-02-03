require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import jwtMiddleware from './lib/jwtMiddleware'

import api from './api';
//테스트 데이터 만들기 위한 호출
import createFakeData from './createFakeData';


const {PORT,MONGO_URI} = process.env;

mongoose
.connect(MONGO_URI, { useNewUrlParser:true, useFindAndModify:false})
    .then(()=> {
        console.log('Connected to MongoDB');
    })
    .catch(e => {
        console.log(e);
    });

const app = new Koa();
const router = new Router();

router.use('/api',api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);

app.use(router.routes()).use(router.allowedMethods());

const port = PORT||4000;
app.listen(port, () => {
    console.log('Listen to port %d',port);
})

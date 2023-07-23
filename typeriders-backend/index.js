const express = require('express');
const port = 1000;
const userRouter = require('./router/auth');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const url = 'mongodb://127.0.0.1:27017/TypeMaster';

mongoose.connect(url).then(()=>console.log("connect to db")).catch((err)=>{
    console.log("There is an error in connection",err);
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cookieParser());

app.use('/user', userRouter);

app.listen(port,()=>{
    console.log("app is listening on Port 1000");
})
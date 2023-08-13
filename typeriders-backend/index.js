const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 2000;
const authRouter = require('./router/auth');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const url = 'mongodb://127.0.0.1:27017/TypeMaster';
const User = require('./models/auth');
const userRouter = require('./router/user');
const {restrictAuth} = require('./middlewares/auth');
const generateWords = require('./service/generateWords');
const session = require('express-session');
const cors = require('cors');


// generateWords();

mongoose.connect(url).then(()=>console.log("connect to db")).catch((err)=>{
    console.log("There is an error in connection",err);
});

app.set('view engine', 'ejs');

app.use(cors({credentials:true, origin: 'http://localhost:3000'}));

app.use(bodyParser.urlencoded({ extended: false }));        

app.use(bodyParser.json());

app.use(cookieParser());

app.use('/', authRouter);

app.use('/user', restrictAuth, userRouter);

app.listen(port, ()=>{
    console.log(`app is listening on Port ${port}`);
})
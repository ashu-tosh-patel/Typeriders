const uniqid = require('uniqid'); 
const { v4: uuidv4 } = require('uuid');
const {setValue, getValue} = require('../service/authi');
const User = require('../model/auth');

// Signup Handler

async function requestSignupHandler(req, res){
    const unid = uniqid();
    const {username, email, password} = req.body;
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        uniqid: unid
    }
    const result = await User.create(user);
    return res.redirect('/user');
}

// Login Handler

async function requestLoginHandler(req, res){
    const {email, password} = req.body;
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    const result = await User.findOne(user);
    if(result===null) return res.redirect('/user');
    const sessionId = uuidv4();
    setValue(sessionId, result);
    res.cookie('uid', sessionId);
    return res.redirect(`/user/${result.uniqid}`);
}

// Guest Handler

async function requestGuest(req, res){
    const unid = uniqid();
    const user = {
        username: "Guest",
        email: "dummy@dumm.com",
        password: "9023423",
        uniqid: unid
    }
    const result = await User.create(user);
    const sessionId = uuidv4();
    setValue(sessionId, result);
    res.cookie('uid', sessionId);
    return res.redirect(`/user/${unid}`);
}

module.exports ={  requestLoginHandler, requestSignupHandler, requestGuest};
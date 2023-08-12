const uniqid = require('uniqid'); 
const { v4: uuidv4 } = require('uuid');
const {setValue, getValue} = require('../service/authentication');
const User = require('../models/auth');
const AppError = require('../utils/appError');
const {validateEmail} = require('../utils/utility');

// Signup Handler

async function requestSignupHandler(req, res){
    try{
        const unid = uniqid();
        const {username, email, password} = req.body;
        let user =  new User(); 
        user.username = req.body.username,
        user.email = req.body.email,
        user.userId = unid,
        await user.setPassword(req.body.password);
        await user.save();
        return res.status(200).send({"status": "successSignup"});
    }
    catch(err){
        return res.send(new AppError("User not Found", 404));
    }
}

// Login Handler

async function requestLoginHandler(req, res){
    //validate email 
    try{
        const {email, password} = req.body;
        const checkEmail = validateEmail(req.body.email);
        if(!checkEmail) return res.status(403).send({"status": "error", "message": "Email Id is not valid"}); // make function Invaid email-id
        const user = {
            email: req.body.email
        }
        const result = await User.findOne(user);
        if(result===null) return res.status(403).send({"status" : "error", "message": "Email Id not found"});
        let validate = await result.validPassword(req.body.password);
        if(validate===false) return res.status(403).send({"status": "error" ,"message":"Incorrect Password!!!"}); // response distinctly
        const setJwt = setValue(result.userId);
        await res.cookie('token', setJwt);
        return res.status(200).send({"status": "success", "message": "login successful", "userId":`${result.userId}`, "userName": `${result.username}`}); //send response only
   }
   catch(err){
       return res.send(new AppError("User not Found", 404));
   }
}

// Guest Handler

async function requestGuest(req, res){
    try{
        const unid = uniqid();
        const sessionId = uuidv4();
        // setValue(sessionId, unid);
        // await res.cookie('uid', sessionId);
        const setJwt = setValue(unid);
        await res.cookie('token', setJwt);
        return res.status(200).send({"status": "success", "message": "login successful", "userId":`${unid}`, "userName": "Guest"}); //send response only
   }
   catch(err){
      return res.send(new AppError("No guest user is found", 404));
   }
}

module.exports ={  requestLoginHandler, requestSignupHandler, requestGuest};
const userSchema = require('../models/userschema');
const AppError = require('../utils/appError');

async function getProfileHandler( req, res){
    try{
        const user = await userSchema.findById(req.params.userId);
        if(user===null) return res.status(404).send({"status": "err", "message": "User profile not found"});
        res.status(200).send({"status": "OK", "message": "userProfile found", "result": `${user}`});
    }catch(err){
        return res.send(new AppError("userProfile not Found", 404));
    }
}
module.exports = getProfileHandler;
const {setValue, getValue} = require('../service/authentication');
const AppError = require('../utils/appError');

async function restrictAuth(req, res, next) {
    try{
        const userUid = await req.cookies.token;
        if(userUid===null) return res.status(403).send({"status": "error", "message": "Login is required"});
        const verify = getValue(userUid);
        if(verify) next();
        else return res.status(403).send({"status": "error", "message": "Login is required"});
    }
    catch(err){
        return res.send(new AppError("Error can't find user", 404));
    }
}

module.exports = { restrictAuth };
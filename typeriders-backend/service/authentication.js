const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtToken = process.env.jwtToken;
const cookie = require('cookie');
function setValue(user){
    const cookieOptions = {
        userId: user,
    };
    // const cookieValue = cookie.serialize('jwt', jwtToken, cookieOptions);
    // res.setHeader('content-type', 'application/json');
    // res.setHeader('Set-Cookie', cookieValue);
    return jwt.sign(cookieOptions, jwtToken,{
		algorithm: "HS256",
	});
}

function getValue(token){
    if(token==null) return null;
    try{
        return jwt.verify(token, jwtToken);
    }
    catch(err){
        return null;
    }
}

module.exports = {setValue, getValue};
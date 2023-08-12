const userSchema = require('../models/userschema');

async function updateRes(req, res) {
    try {
        const user = await userSchema.findOneAndUpdate({userId: req.params.userId});
        if(user===null)  return res.status(404).send({"status": "error", "message": "User Profile not found"});
    } catch (error) {
        res.status(500).json(error);
    }
}
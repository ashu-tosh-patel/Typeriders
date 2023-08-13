const uniqid = require('uniqid'); 
const User = require('../models/auth');
const RaceSchema = require('../models/raceModel');
const AppError = require('../utils/appError');
async function requestRaceHandler(req, res){
    try{
        const userId = req.params.userId;
        const {mode, duration, difficulty} = req.body;
        const raceId = uniqid();
        let date = Date.now();
        const raceR = {
            raceId,
            date: date,
            mode,
            duration,
            difficulty
        }
        const resl = await RaceSchema.create(raceR);
        return res.status(200).send({"status": "success", "message": "Race begin", "raceId":`${raceId}`}); //send response only
    }
    catch(err){
        return res.send(new AppError("There is an error in Race", 400));
    }
}

module.exports = requestRaceHandler;
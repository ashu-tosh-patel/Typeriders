const race = require('../models/raceModel');
const AppError = require('../utils/appError');
const getWords = require('../service/getWords');
const word = require('../models/wordStack');

async function startRace(req, res){
    try{
        let result = await race.findOne({raceId: req.params.raceId});
        if(result===null) return res.send(new AppError("There is an error in Race", 400));
        const wordArray = await getWords(result.difficulty);
        return res.status(200).send({"status": "success", "message": "singlePlayer race", "raceId":`${req.params.raceId}`, "duration": `${result.duration}`, "difficulty": `${result.difficulty}`,"words": `${wordArray}`}); //send response only
    }
    catch(err){
        return res.send(new AppError("No Race Found", 400));
    }
}

module.exports = startRace;
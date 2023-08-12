const express = require('express');
const requestRaceHandler = require('../controller/userMode');
const startRace = require('../controller/singlePlayer');
const getProfileHandler = require('../controller/getProfile');
const userRouter = express();

userRouter.post('/:userId', requestRaceHandler);
// race.get('/:userId', getUserProfile);
userRouter.get('/:userId/profile', getProfileHandler);
userRouter.get('/:userId/:raceId', startRace);

module.exports = userRouter;
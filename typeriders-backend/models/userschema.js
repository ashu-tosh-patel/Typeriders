const mongoose = require('mongoose');
var crypto = require('crypto');

const resultSchema = new mongoose.Schema({
    raceId:{
        type: String,
        require: true,
    },
    date:{
        type: String,
        require: true,
    },
    mode:{
        type: String,
        require: true,
    },
    duration:{
        type: String,
        require: true,
    },
    difficulty:{
        type: String,
        require: true,
    },
    wpm:{
        type: Number,
        require: true,
    },
    accuracy:{
        type: Number,
        require: true,
    },
    points:{
        type: Number,
        require: true,
    },
    position:{
        type: Number,
        require: true,
    }
});

const userSchema = new mongoose.Schema({
    userId:{
        type: String,
        require: true,
    },
    userName:{
        type: String,
        require: true,
    },
    averageAccuracy:{
        type: Number,
        require: true,
        default: 0.00
    },
    averageWpm:{
        type: Number,
        require: true,
        default: 0.0
    },
    bestRace:{
        type: Number,
        require: true,
        default: 0.0
    },
    pointXp:{
        type: Number,
        require: true,
        default: 0.0
    },
    rank:{
        type: Number,
        require: true,
    },
    pastRecord:[
        Number
    ]
});

const UserSchema = mongoose.model('userData', userSchema);

module.exports = UserSchema;
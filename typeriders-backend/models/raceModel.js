const mongoose = require('mongoose');


// stores result for each userId

const result = new mongoose.Schema({
    userId:{
        type: String
    },
    wpm:{
        type: Number
    },
    accuracy:{
        type: Number
    },
    points:{
        type: Number
    },
    positions:{
        type: Number
    }
})

// stores each race result with unique raceId and also all the users result which participate in the race (at most 4)

const raceschema = new mongoose.Schema({
    raceId:{
        type: String,
        require: true,
    },
    date:{
        type: Number,
        require: true,
    },
    mode:{
        type: Number,
        require: true,
        default: 0,
        enum : [0, 1],
    },
    duration:{
        type: Number,
        require: true,
        default: 1,
        enum : [1, 2, 5],
    },
    difficulty:{
        type: Number,
        require: true,
        default: 100,
        enum : [100, 200, 300],
    },
    raceResult:[result]
});

const RaceSchema = mongoose.model('raceData', raceschema);

module.exports = RaceSchema;
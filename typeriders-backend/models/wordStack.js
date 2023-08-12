const {mongoose, Schema} = require("mongoose");

const words = new Schema({
    difficulty:{
        type: String
    },
    words: [String]
})

const word = mongoose.model('words', words);

module.exports  = word;
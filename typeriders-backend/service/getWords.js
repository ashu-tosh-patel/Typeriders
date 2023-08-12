const word = require('../models/wordStack');

async function getWords(difficulty){
    const result = await word.findOne({difficulty:difficulty});
    return result.words;
}

module.exports = getWords;
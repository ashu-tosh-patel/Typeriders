const word = require("../models/wordStack");
const fs = require("fs");

function generateWords(){
    fs.readFile('word0.txt', function(err, data) {
        if(err) throw err;
        const array = data.toString().split('\r\n');
        const words = {
            difficulty: 100,
            words: array
        }
        const result = word.create(words);
     });
    
    fs.readFile('words100.txt', function(err, data) {
        if(err) throw err;
        const array = data.toString().split('\r\n');
        const words = {
            difficulty: 200,
            words: array
        }
        const result = word.create(words);
     });
    
    fs.readFile('word200.txt', function(err, data) {
        if(err) throw err;
        const array = data.toString().split('\r\n');
        const words = {
            difficulty: 300,
            words: array
        }
        const result = word.create(words);
     });
}

module.exports = generateWords;
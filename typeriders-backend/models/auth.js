const mongoose = require('mongoose');
var crypto = require('crypto'); 
const {validateEmail} = require('../utils/utility');

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required: true,
        trim: true,
        min: [3, "minimum username should be at least 3 characters"],
        max: [10, "maximum username should be at most 10 characters"],
        isalphabetic: true, // only alphabetic characters are allowed unique in not necessary
    },
    email: {
        type : String,
        validate: [validateEmail, "Please enter a valid email"],
        required: [true, "Please enter your email"],
        unique: true,
    },
    userId:{
        type : String,
        required: true
    },
    raceResult:[String],
    hash: String,
    salt: String
});

userSchema.methods.setPassword = function(password) { 
     
    // Creating a unique salt for a particular user 

    this.salt = crypto.randomBytes(16).toString('hex'); 

    // Hashing user's salt and password with 1000 iterations, 

    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);

};
   
// Method to check the entered password is correct or not 
userSchema.methods.validPassword = function(password) { 
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`); 
    return this.hash === hash; 
}; 

const User = mongoose.model('authData',userSchema); 
module.exports = User;
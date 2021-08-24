const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true},
    password: { type: String, required: true},
})

userSchema.statics.generateToken = function(data) {
    return jwt.sign(data, 'AlongStory', {expiresIn: '1 days'})
}

module.exports = mongoose.model('user', userSchema)

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    wins: {
        type: Number
    },
    draws: {
        type: Number
    },
    losses: {
        type: Number
    }
});

var User = mongoose.model('users', UserSchema);

module.exports = {
    User
}
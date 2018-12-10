var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    wins: {
        type: Number,
        default: 0
    },
    draws: {
        type: Number,
        default: 0
    },
    losses: {
        type: Number,
        default: 0
    }
});

var User = mongoose.model('users', UserSchema);

module.exports = {
    User
}
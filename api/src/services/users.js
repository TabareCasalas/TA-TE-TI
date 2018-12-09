var router = require('express').Router();
var User = require('../models/user').User;
var ObjectID = require('mongodb').ObjectID;

// [REQUIRED] Add new user, it function is triggered when game begin.
router.post('/user', function(req, res) {
    var nuevo = new User(req.body);
    console.log(nuevo.nickname);
    nuevo.save().then(function(newUser) {
        res.send(newUser);
    }).catch(function(error) {
        res.status(400).send(error);
    });
});

// [REQUIRED] Update user by id, it function is triggered when game ends.
router.put('/users/:id', function(req, res) { 
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(function(userUpdated) {
        res.send(userUpdated);
      });
  });

// [OPTIONAL] Get all users, not required.
router.get('/users', function(req, res) {
    User.find({}).then(function(users) {
        res.send(users);
    });
});

// [OPTIONAL] Get user by id, not required.
router.get('/users/:id', function(req, res) {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send();
    }

    User.findById(req.params.id)
        .then(function(user) {
            if (user == null) {
                // user not found
                res.status(404).send();
                return false;
            } else {
                res.send(user)
            }
        }).catch(function(error) {
            res.status(500).send(error)
        })
});

module.exports = router;
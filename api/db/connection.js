var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect(
    'mongodb://localhost:27017/ta_te_ti', 
    { useNewUrlParser: true }
  ).then(function(result) {
    console.log('Houston, we are online now.');
  }).catch(function(error) {
    console.log('We have a problem. Error with database connection.', error);
  });

module.exports = {
  mongoose
};
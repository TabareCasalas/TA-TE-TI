// Imported modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const morgan = require('morgan');
var cors = require('cors');

const serviceUsers = require('./services/users');

// Express settings
var app = express();
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.use(morgan('combined'));

app.set('port', process.env.PORT || 3000);
app.use(serviceUsers);

app.listen(3000, function() {
    console.log('The server is running');
});


// DB settings
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



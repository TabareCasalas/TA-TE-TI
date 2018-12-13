var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('./db/connection').mongoose;
const morgan = require('morgan');
var cors = require('cors');

const serviceUsers = require('./services/users');


var app = express();
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use(serviceUsers);

app.listen(4500, function() {
    console.log('The server is running');
});
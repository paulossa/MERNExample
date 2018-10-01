const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const conf = require('./config/keys');
console.log(conf);


let port = process.env.port || 3000;
app.listen(port, () => `Server running on port: ${port}`)



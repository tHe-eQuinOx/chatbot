const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const server = require('../config/server');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());




'use strict';

require('dotenv').config();

var express = require('express');  // eslint-disable-line
var app = express();  // eslint-disable-line

if (process.env.NODE_ENV !== 'production') {
  console.log('-----DEVELOPMENT SETTINGS-----');
  require('babel-register');
  require('./src/main');
} else {
  console.log('-----PRODUCTION SETTINGS-----');
  require('./build/main'); //eslint-disable-line
}

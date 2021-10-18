"use strict";

var fs = require('fs');

var csv = require('csvtojson');

var _require = require('stream'),
    pipeline = _require.pipeline;

var filePath = './src/nodejs-hw1-ex1.csv';
pipeline(fs.createReadStream(filePath), csv(), fs.createWriteStream('./src/task2.txt'), function (error) {
  if (error) {
    console.error('An error ocurred: \n\n %o', error);
  } else {
    console.log('Finished!');
  }
});
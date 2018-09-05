const fs = require('fs');
const log = require('../logger');

// var files = fs.readdirSync('./');
// files.forEach(log);

fs.readdir('./', function(err, files){
    if(err) log(err);
    else files.forEach(log);
});
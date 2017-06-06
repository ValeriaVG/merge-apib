"use strict";
var apibmerge = require('./lib/apibmerge');

var run = function(dir, output) {
  return apibmerge.merge(apibmerge.scan(dir), output);
}
// CLI use
if (process.argv.length > 2) {
  if (process.argv.length < 3) {
    console.log("Usage: node . <directory> [<output>]");
    return process.exit(-1);
  }

  var dir = require('path').resolve(process.env.PWD + '/' + process.argv[2]);
  var output = process.env.PWD + '/apiary.apib';
  if (typeof process.argv[3] !== "undefined")
    output = require('path').resolve(process.env.PWD + '/' + process.argv[3]);

  run(dir, output);
  console.log("Merged .apib and .md from " + dir + " to " + output);

  return process.exit();
}

module.exports = run;

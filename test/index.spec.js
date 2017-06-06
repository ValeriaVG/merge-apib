var chai = require('chai');
var should = chai.should();
var fs = require('fs');

describe('Can be :', function() {

  it('Included from script', function() {

    var apibmerge = require('./../index.js');
    apibmerge.should.be.a("function");

  });

  it('Ran from cmd', function(done) {

    require('child_process').exec('node . /test/dir/flat/', function(error, stdout, stderr) {
      (error==true).should.be.false;
      fs.existsSync('apiary.apib').should.be.true;
      done();
    })

  });

});

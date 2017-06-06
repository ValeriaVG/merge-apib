var chai = require('chai');
var should = chai.should();
var fs = require('fs');

describe('Can be :', function() {

  it('Included from script', function() {

    var apibmerge = require('./../lib/apibmerge.js');
    apibmerge.should.have.property('merge');

  });

  it('Ran from cmd', function(done) {

    if(fs.existsSync('apiary.apib')) fs.unlinkSync('apiary.apib');
    require('child_process').exec('./bin/apibmerge /test/dir/flat/', function(error, stdout, stderr) {
      /Merged/.test(stdout).should.be.true;
      (error == true).should.be.false;
      fs.existsSync('apiary.apib').should.be.true;
      done();
    })

  });

});

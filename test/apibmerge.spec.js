var chai = require('chai');
var should = chai.should();
var fs = require('fs');
var apibmerge = require('./../lib/apibmerge.js');

// Helper definition - should be in a shared file
chai.use(function(_chai, utils) {
  _chai.Assertion.addMethod('unless', function(msg) {
    utils.flag(this, 'message', msg);
  });
});

describe('Can list files:', function() {

  it('In a Flat folder with files only', function() {

    var list = apibmerge.scan(__dirname + '/dir/flat');
    list.length.should.equal(3);

    list.forEach(function(file) {
      fs.existsSync(file).should.be.unless('File "' + file + '" doesnt exist').true;
      fs.statSync(file).isFile().should.be.unless('File "' + file + '" is not a file').true;
      /\.(apib|md)$/.test(file).should.be.unless('File "' + file + '" is not .apib or .md').true;
    });

  });

  it('In a Nested folder with files and folders', function() {

    var list = apibmerge.scan(__dirname + '/dir/nested');
    list.length.should.equal(3);

    list.forEach(function(file) {
      fs.existsSync(file).should.be.unless('File "' + file + '" doesnt exist').true;
      fs.statSync(file).isFile().should.be.unless('File "' + file + '" is not a file').true;
      /\.(apib|md)$/.test(file).should.be.unless('File "' + file + '" is not .apib or .md').true;
    });

  });

});

describe('Can merge files:', function() {

  it('In one', function() {

    var list = apibmerge.scan(__dirname + '/dir/flat');
    var len = 0;

    list.forEach(function(file) {
      len += fs.statSync(file).size;
    });
    var out = __dirname + '/dir/out.apib';

    fs.unlinkSync(out);

    apibmerge.merge(list, out);

    fs.existsSync(out).should.be.unless('File "' + out + '" doesnt exist').true;
    fs.statSync(out).size.should.be.unless('File "' + out + '" should have ' + len + ' bytes').equal(len);

  });

});

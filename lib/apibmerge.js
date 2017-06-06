var fs = require('fs');
var path = require('path');

var scan = function(dir) {
  dir = (dir + '/').replace(/\{2,}/, '/');
  var list = [];
  var tmp = fs.readdirSync(dir);

  tmp.forEach(function(file) {
    var stat = fs.statSync(dir + file);

    if (stat.isFile() && /\.(md|apib)$/.test(file)) {
      return list.push(dir + file);
    }

    if (stat.isDirectory()) {
      list = list.concat(scan(dir + file));
    }

  });

  return list;
}

var merge = function(list, dest) {
  var txt = '';
  list.forEach(function(file) {
    txt += fs.readFileSync(file);
  });

  return fs.writeFileSync(dest, txt);
}

module.exports = {
  scan,
  merge
};

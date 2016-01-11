var assert = require('assert');
var exists = require('fs').existsSync;
var join = require('path').join;
var rimraf = require('rimraf');
var download = require('../');

var dir = join(__dirname, 'fixture');
it('downloads a repo at a tag into a folder', function () {
  this.timeout(30000);
  rimraf.sync(dir);
  return download('then', 'promise', 'b1d7b7e75d042d0f7b19c23a41c1a979b30b356c', dir)
    .then(function () {
      assert(exists(join(dir, 'package.json')));
      assert(exists(join(dir, 'index.js')));
      assert(exists(join(dir, 'Readme.md')));
      assert(exists(join(dir, '.travis.yml')));
      rimraf.sync(dir);
    });
});
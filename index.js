var request = require('request');
var zlib = require('zlib');
var tar = require('tar');
var promise = require('nodeify').Promise;

module.exports = download;
function download(user, repo, tag, dir, callback) {
  return promise(function (res) {
    var url = 'https://github.com/' + user + '/' + repo + '/archive/' + tag + '.tar.gz'
    var a = request(url);
    var b = zlib.createGunzip();
    var c = tar.Extract({
      path: dir,
      strip: 1
    });
    a.pipe(b).pipe(c);

    a.on('response', response);
    a.on('error', err);
    b.on('error', err);
    c.on('error', err);
    c.on('end', done);

    function response(response) {
      if (response.statusCode !== 200) {
        res.reject(new Error('Server responeded with status code: ' + response.statusCode));
      }
    }
    function err(err) {
      console.warn('error');
      res.reject(err);
    }
    function done() {
      res.fulfill(dir);
    }
  }).nodeify(callback);;
}
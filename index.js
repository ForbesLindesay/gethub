var request = require('hyperquest');
var zlib = require('zlib');
var tar = require('tar');
var Promise = require('promise');

module.exports = download;
function download(user, repo, tag, dir, callback) {
  return new Promise(function (resolve, reject) {
    var url = 'https://github.com/' + user + '/' + repo + '/archive/' + tag + '.tar.gz'
    getURL(url, function (ex, a) {
      if (ex) return reject(ex);
      var b = zlib.createGunzip();
      var c = tar.Extract({
        path: dir,
        strip: 1
      });
      a.pipe(b).pipe(c);

      b.on('error', err);
      c.on('error', err);
      c.on('end', done);

      function err(err) {
        console.warn('error');
        reject(err);
      }
      function done() {
        resolve(dir);
      }
    });
  }).nodeify(callback);;
}
function getURL(url, cb) {
  var stream = request(url);
  stream.on('response', function response(response) {
    if (response.statusCode === 302 || response.statusCode === 301) {
      getURL(response.headers.location, cb);
    } else if (response.statusCode !== 200) {
      cb(new Error('Server responeded with status code ' + response.statusCode + ' for ' + url));
    } else {
      cb(null, stream);
    }
  });
  stream.on('error', function (e) {
    cb(e);
  });
}

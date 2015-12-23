<img src="http://i.imgur.com/TYRRhxj.png" align="right" />
[![Build Status](https://img.shields.io/travis/ForbesLindesay/gethub/master.svg)](https://travis-ci.org/ForbesLindesay/gethub)
[![Dependency Status](https://img.shields.io/david/ForbesLindesay/gethub.svg)](https://david-dm.org/ForbesLindesay/gethub)
# GetHub

Download a github repository to a folder using the .tar.gz bundle

## Installation

    $ npm install gethub

## Usage

### Command Line

  The following command downloads `gethub` at the `master` tag into the `gethub` folder

    $ gethub ForbesLindesay/gethub

### API

```javascript
var join = require('path').join;
var download = require('gethub');

download('ForbesLindesay', 'gethub', 'master', join(__dirname, 'gethub'), function (err) {
  if (err) throw err;
  console.log('downloaded ForbesLindesay/gethub@master into: ' + join(__dirname, 'gethub'));
});
```

### Promise API

If you omit the callback, a promise is returned.

```javascript
var join = require('path').join;
var download = require('gethub');

download('ForbesLindesay', 'gethub', 'master', join(__dirname, 'gethub'))
  .then(function (err) {
    console.log('downloaded into: ' + join(__dirname, 'gethub'));
  }, function (err) {
    console.warn(err.stack);
  });
```

## License

  MIT

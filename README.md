[![Build Status](https://travis-ci.org/ForbesLindesay/gethub.png?branch=master)](https://travis-ci.org/ForbesLindesay/gethub)
[![Dependency Status](https://gemnasium.com/ForbesLindesay/gethub.png)](https://gemnasium.com/ForbesLindesay/gethub)
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

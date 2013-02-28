# download-github

Download a github repository to a folder using the .tar.gz bundle

## Installation

    $ npm install download-github

## Usage

### Command Line

  The following command downloads `download-github` at the master tag into the `download-github` folder

    $ gethub ForbesLindesay/download-github

### API

```javascript
var join = require('path').join;
var download = require('download-github');

download('ForbesLindesay', 'download-github', 'master', join(__dirname, 'download-github'), function (err) {
  if (err) throw err;
  console.log('downloaded ForbesLindesay/download-github@master into: ' + join(__dirname, 'download-github'));
});
```

### Promise API

If you omit the callback, a promise is returned.

```javascript
var join = require('path').join;
var download = require('download-github');

download('ForbesLindesay', 'download-github', 'master', join(__dirname, 'download-github'))
  .then(function (err) {
    console.log('downloaded into: ' + join(__dirname, 'download-github'));
  }, function (err) {
    console.warn(err.stack);
  });
```

## License

  MIT
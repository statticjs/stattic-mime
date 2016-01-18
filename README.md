# stattic-mime

[![npm](https://img.shields.io/npm/v/stattic-mime.svg?style=flat-square)](https://www.npmjs.com/package/stattic-mime)
[![npm](https://img.shields.io/npm/dt/stattic-mime.svg?style=flat-square)](https://www.npmjs.com/package/stattic-mime)

Get the mime type for a suffix. Made for stattic.

Example of use:

```javascript
//Import the mime method
var getMime = require('stattic-mime');

//Get the mime for a jpg file
var mime = getMime('jpg'); //Returns 'image/jpeg'

//Get the mime for an undefined extension
var mime = getMime('asdfg'); //Returns 'text/plain'
```

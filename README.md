# angular-uid 
[![Build Status](https://travis-ci.org/easy-node/angular-uid.svg?branch=v0.1.0)](https://travis-ci.org/easy-node/angular-uid)
[![NPM version](https://badge.fury.io/js/angular-uid.svg)](http://badge.fury.io/js/angular-uid)

Creating unique IDs in angular way

## Getting Started
Install the module with npm : `npm install --save angular-uid`

Install the module with bower : ` bower install angular-uid `

## Usage
```javascript
var guid = require('angular-uid');
guid(); // return 001
guid(); // return 002
guid(); // return 003
guid(); // return 004
guid(); // return 005
...
guid(); // return 00A
...
```

## Release History
0.1.0 First Release

0.1.1 Support browser.js

## License
Copyright (c) 2014 [Huei Tan](https://github.com/huei90). Licensed under the MIT license.

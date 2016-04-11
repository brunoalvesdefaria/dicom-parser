# dicom-parser


[![Join the chat at https://gitter.im/OHIF](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/OHIF?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url]
[![Coverage Status](https://coveralls.io/repos/github/OHIF/dicom-parser/badge.svg?branch=develop)](https://coveralls.io/github/OHIF/dicom-parser?branch=develop)

A lightweight JavaScript library for parsing DICOM P10 byte streams.  This project is based on the
[dicomParser](https://github.com/chafey/dicomParser) library.

**[Documentation](https://github.com/chafey/dicomParser/docs/index.md)**


## Port to ECMAScript 6 (version 2.0.0)

dicom-parser 2.0.0 does not bring any new features, but the code is now written in
ECMAScript 6 modules.  Temporary build (ECMAScript 5) files are placed under
`build/umd/` (for running tests during development).

If you want to use a particular revision of the code, make sure to run
`grunt transpile update-index`, so `dicom-parser.js` are synced
with `src/*`. We might place that in a commit hook in the future.

## Upgrading to 2.0.0

All objects thrown now comply to the standard Error object interface.  This impacts the following APIs:

 * parseDA

## [Changelog](https://github.com/OHIF/dicom-parser/blob/develop/CHANGELOG.md)

## [Contributing](https://github.com/OHIF/dicom-parser/blob/develop/CONTRIBUTING.md)

We're looking for co-maintainers! If you want to become a master of time please
write to [chafey](https://github.com/chafey).

## License

dicom-parser.js is freely distributable under the terms of the [MIT license](https://github.com/OHIF/dicom-parser/blob/develop/LICENSE).

## TODO

* Get Code coverage to 100%
* Figure out how to run coveralls locally
* Add automated tests for the different modularization strategies/consuming environments (e.g. meteor, 
  Angular 1, Angular 2, ES6, etc)
* Add  automated tests for various browsers.  There is some config in there for saucelabs but 
  I didn't try to get it working
* Get nuget working. There is some config in there for this but I didn't try to get it working
* Figure out why source comments are not being removed form the minified file.  
  Setting preserveComments to false instead of 'some' fixes this bug removes the version header.  
  Note that I get the same weird results when building moment.js so it may be a bug in uglify?
* Figure out strategy for live examples.  rawgithib is not 100% reliable so it would be nice 
  to figure out another solution
* Figure out strategy for documentation.  Just use markdown or go HTML documentation like moment.js does?


[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/dicom-parser
[npm-version-image]: http://img.shields.io/npm/v/dicom-parser.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/dicom-parser.svg?style=flat

[travis-url]: http://travis-ci.org/OHIF/dicom-parser
[travis-image]: http://img.shields.io/travis/OHIF/dicom-parser/develop.svg?style=flat

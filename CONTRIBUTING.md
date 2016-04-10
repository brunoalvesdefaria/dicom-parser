Submitting Issues
=================

If you are submitting a bug, please create a [jsfiddle](http://jsfiddle.net/) demonstrating the issue.

Read before submitting Pull Requests
====================================

 * **Pull requests to the `master` branch will be closed.** Please submit all pull requests to the `develop` branch.
 * **Do not include the minified files in your pull request.** These are
   `dicom-parser.js`, `min/*.js`. Don't worry, we'll build them when we cut a release.

Code organization
=================

Starting from version 2.0.0 the code is placed under `src/`.
`dicom-parser.js`, `min/*.js` are generated only on release.

**DO NOT** submit changes to the generated files. Instead only change
`src/**/*.js` and run the tests.

* `src/lib/**/*.js` dicom-parser core files
* `src/test/dicom-parser/*.js` dicom-parser core tests

We're using ES6 module system, but nothing else ES6, because of performance
considerations (added code by the transpiler, less than optimal translation to
ES5). So please do not use that fancy new ES6 feature in your patch, it won't
be accepted.

Setting up development environment
==================================

To contribute, fork the library and install grunt and dependencies. You need
[git](http://git-scm.com/) and
[node](http://nodejs.org/); you might use
[nvm](https://github.com/creationix/nvm) or
[nenv](https://github.com/ryuone/nenv) to install node.

```bash
git clone https://github.com/OHIF/dicom-parser.git
cd moment
npm install -g grunt-cli
npm install
git checkout develop  # all patches against develop branch, please!
grunt                 # this runs tests and jshint
```

Grunt tasks
===========

We use Grunt for managing the build. Here are some useful Grunt tasks:

  * `grunt` The default task lints the code and runs the tests. You should make sure you do this before submitting a PR.
  * `grunt test` run the tests.
  * `grunt release` Build everything, including minified files (do not include
    those in Pull Requests)
  * `grunt size` Print size statistics.

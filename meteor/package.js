// package metadata file for Meteor.js
'use strict';

var packageName = 'chafey:dicom-parser';  // https://atmospherejs.com/chafey/dicom-parser

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: 'JavaScript parser for DICOM Part 10 data - official Meteor packaging',
  version: packageJson.version,
  git: 'https://github.com/OHIF/dicom-parser.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0', 'METEOR@1.2']);
  api.export('moment');
  api.addFiles([
    'dicom-parser.js',
    'meteor/export.js'
  ]);
});

Package.onTest(function (api) {
  api.use(packageName);
  api.use('tinytest');

  api.addFiles('meteor/test.js');
});

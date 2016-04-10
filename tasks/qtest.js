module.exports = function (grunt) {
  grunt.task.registerTask('qtest', 'run tests locally', function () {
    var done = this.async();

    var testrunner = require('qunit');

    testrunner.options.log.assertions = false;
    testrunner.options.log.tests = false;
    testrunner.options.log.summary = false;
    testrunner.options.log.testing = false;
    testrunner.options.maxBlockDuration = 120000;

    var tests;

    if (grunt.option('only') != null) {
      tests = grunt.file.expand.apply(null, grunt.option('only').split(',').map(function (file) {
        if (file === 'dicom-parser') {
          return 'build/umd/test/dicom-parser/*.js';
        } else {
          return 'build/umd/test/' + file + '.js';
        }
      }));
    } else {
      tests = grunt.file.expand('build/umd/test/dicom-parser/*.js');
    }

    testrunner.run({
      code: 'build/umd/dicom-parser.js',
      tests: tests
    }, function (err, report) {
      if (err) {
        console.log('woot', err, report);
        done(err);
        return;
      }
      err = null;
      if (report.failed !== 0) {
        err = new Error(report.failed + ' tests failed');
      }
      done(err);
    });
  });
};

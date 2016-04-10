module.exports = function (grunt) {
  var esperanto = require('esperanto');
  var path = require('path');
  var Promise = require('es6-promise').Promise;
  var TMP_DIR = 'build/tmp';

  function moveComments(code) {
    var comments = [], rest = [];
    code.split('\n').forEach(function (line) {
      if (line.trim().slice(0, 3) === '//!') {
        comments.push(line.trim());
      } else {
        rest.push(line);
      }
    });

    return comments.concat([''], rest).join('\n');
  }

  var headerCache = {};
  function getHeaderByFile(headerFile) {
    if (!(headerFile in headerCache)) {
      headerCache[headerFile] = grunt.file.read(headerFile);
    }
    return headerCache[headerFile];
  }

  function transpile(opts) {
    // base, entry, skip, headerFile, skipLines, target
    var umdName = opts.headerFile ? 'not_used' : opts.umdName,
      headerFile = opts.headerFile ? opts.headerFile : 'templates/default.js',
      header = getHeaderByFile(headerFile),
      skipLines = opts.skipLines ? opts.skipLines : 5;

    return esperanto.bundle({
      base: opts.base,
      entry: opts.entry,
      skip: opts.skip || []
    }).then(function (bundle) {
      var umd = bundle.toUmd({name: umdName}),
        fixed = header + umd.code.split('\n').slice(skipLines).join('\n');
      if (opts.moveComments) {
        fixed = moveComments(fixed);
      }
      grunt.file.write(opts.target, fixed);
    });
  }

  function transpileMany(opts) {
    var batchSize = 50,
      promise = Promise.resolve(null),
      files = grunt.file.expand({cwd: opts.base}, opts.pattern),
      i,
      transpileOne = function (i) {
        promise = promise.then(function () {
          return Promise.all(files.slice(i, i + batchSize).map(function (file) {
            return transpile({
              base: opts.base,
              entry: file,
              headerFile: opts.headerFile,
              skip: opts.skip,
              skipLines: opts.skipLines,
              moveComments: opts.moveComments,
              target: path.join(opts.targetDir, file)
            });
          }));
        });
      };

    for (i = 0; i < files.length; i += batchSize) {
      transpileOne(i);
    }

    return promise;
  }

  function prepareTemp(base) {
    var files = grunt.file.expand({cwd: base}, '**/*.js'),
      tmpDir = TMP_DIR;
    if (grunt.file.exists(tmpDir)) {
      return;
    }
    files.forEach(function (file) {
      grunt.file.copy(path.join(base, file), path.join(tmpDir, file));
    });
  }

  function transpileCode(opts) {
    var entry = opts.entry || path.basename(opts.target);
    prepareTemp(opts.base);
    grunt.file.write(path.join(TMP_DIR, entry), opts.code);
    return transpile({
      base: TMP_DIR,
      entry: entry,
      umdName: opts.umdName || 'not_used',
      headerFile: opts.headerFile,
      skipLines: opts.skipLines,
      moveComments: opts.moveComments,
      target: opts.target,
      skip: opts.skip
    });
  }


  grunt.task.registerTask('transpile-raw', 'convert es6 to umd', function () {
    var done = this.async();

    transpile({
      base: 'src',
      entry: 'dicom-parser.js',
      umdName: 'dicomParser',
      target: 'build/umd/dicom-parser.js',
      moveComments: true
    }).then(function () {
      grunt.log.ok('build/umd/dicom-parser.js');
    }).then(function () {
      return transpileMany({
        base: 'src',
        pattern: 'test/dicom-parser/*.js',
        headerFile: 'templates/test-header.js',
        skipLines: 5,
        moveComments: true,
        targetDir: 'build/umd',
        skip: ['dicom-parser']
      });
    }).then(function () {
      grunt.log.ok('build/umd/test/dicom-parser/*.js');
    }).then(done, function (e) {
      grunt.log.error('error transpiling', e);
      done(e);
    });
  });

  grunt.config('clean.build', [
    'build'
  ]);

  grunt.config('concat.tests', {
    src: 'build/umd/test/**/*.js',
    dest: 'build/umd/min/tests.js'
  });

  grunt.task.registerTask('transpile',
    'builds all es5 files',
    function () {
      var tasks = [
        'clean:build',
        'transpile-raw',
        'concat:tests'
      ];

      grunt.task.run(tasks);
    });
};

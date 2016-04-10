module.exports = function (grunt) {
  grunt.registerTask('bump_version', function (version) {
    if (!version || version.split('.').length !== 3) {
      grunt.fail.fatal('malformed version. Use\n\n    grunt bump_version:1.2.3');
    }

    grunt.config('string-replace.dicom-parser-js', {
      files: {'src/dicom-parser.js': 'src/dicom-parser.js'},
      options: {
        replacements: [
          {
            pattern:     /\/\/! version : .*/,
            replacement: '//! version : ' + version
          }, {
            pattern:     /dicomParser\.version = '.*'/,
            replacement: "dicomParser.version = '" + version + "'"
          }
        ]
      }
    });

    grunt.config('string-replace.package-json', {
      files: {'package.json': 'package.json'},
      options: {
        replacements: [
          {
            pattern:     /"version": .*/,
            replacement: '"version": "' + version + '",'
          }
        ]
      }
    });

    grunt.config('string-replace.component-json', {
      files: {'component.json': 'component.json'},
      options: {
        replacements: [
          {
            pattern:     /"version": .*/,
            replacement: '"version": "' + version + '",'
          }
        ]
      }
    });

    grunt.config('string-replace.dicom-parser-js-nuspec', {
      files: {'DicomParser.js.nuspec': 'DicomParser.js.nuspec'},
      options: {
        replacements: [
          {
            pattern:     /<version>.*<\/version>/,
            replacement: '<version>' + version + '</version>'
          }
        ]
      }
    });

    grunt.task.run([
      'string-replace:dicom-parser-js',
      'string-replace:package-json',
      'string-replace:component-json',
      'string-replace:dicom-parser-js-nuspec'
    ]);
  });
};

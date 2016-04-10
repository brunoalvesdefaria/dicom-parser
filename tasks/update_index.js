module.exports = function (grunt) {
  grunt.config('copy.index-files', {
    expand: true,
    cwd: 'build/umd/',
    src: [
      'dicom-parser.js',
      'min/tests.js'
    ],
    dest: '.'
  });

  grunt.registerTask('update-index', ['copy:index-files']);
};

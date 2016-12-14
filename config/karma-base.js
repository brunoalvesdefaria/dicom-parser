module.exports = {
  basePath: '../',
  frameworks: ['browserify', 'mocha'],
  reporters: ['progress', 'coverage'],
  plugins: [
    'karma-browserify',
    'karma-coverage',
    'karma-coveralls',
    'karma-mocha',
    'karma-phantomjs-launcher',
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-sauce-launcher'
  ],
  files: [
    'src/dicom-parser.js',
    'test/**/*.js'
  ],
  preprocessors: {
    'src/**/*.js': ['browserify'],
    'test/**/*.js': ['browserify']
  },
  browserify: {
    debug: true,
    transform: [
      'babelify',
      ['browserify-istanbul', { instrumenter: require('babel-istanbul') }]
    ]
  },
  coverageReporter: {
    dir: './coverage',
    reporters: [
      {type: 'html', subdir: 'html'},
      {type: 'lcov', subdir: '.'},
      {type: 'text', subdir: '.', file: 'text.txt'},
      {type: 'text-summary', subdir: '.', file: 'text-summary.txt'}
    ]
  },
  sauceLabs: {
    startConnect: true,
    testName: 'DICOM Parser'
  },
  // level of logging
  // possible values: 'OFF' || 'ERROR' || 'WARN' || 'INFO' || 'DEBUG'
  logLevel: 'INFO'
};

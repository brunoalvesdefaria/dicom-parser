module.exports = function (config) {
  'use strict';
  var packageJson = require('../package.json');
  var extendConfiguration = require('./karma-extend.js');
  config.set(extendConfiguration({
    singleRun: true,
    reporters: ['dots'],
    browsers: [
      'slChromeWinXp',
      'slIe10Win7',
      'slIe9Win7',
      'slIe8Win7',
      'slIe11Win10',
      'slME25Win10',
      'slFfLinux',
      'slSafariOsx'
    ],
    sauceLabs: {
      startConnect: true,
      testName: packageJson.name
    },
    customLaunchers: {
      slChromeWinXp: {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'Windows XP'
      },
      slIe10Win7: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '10'
      },
      slIe9Win7: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '9'
      },
      slIe8Win7: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '8'
      },
      slIe11Win10: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '11'
      },
      slME25Win10: {
        base: 'SauceLabs',
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: '20.10240'
      },
      slFfLinux: {
        base: 'SauceLabs',
        browserName: 'firefox',
        platform: 'Linux'
      },
      slSafariOsx: {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'OS X 10.8'
      },
      slSafariOsx11: {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'OS X 10.11'
      }
    }
  }));
};

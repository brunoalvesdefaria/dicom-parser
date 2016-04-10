//! dicom-parser.js
//! version: 2.0.0
//! authors: Chris Hafey, dicomParser contributors
//! license: MIT
//! https://github.com/OHIF/dicom-parser

;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      global.dicomParser = factory()
}(this, function () { 'use strict';

  var hookCallback;

  function utils_hooks__hooks () {
    return hookCallback.apply(null, arguments);
  }

  // This is done to register the method called with dicomParser()
  // without creating circular dependencies.
  function setHookCallback (callback) {
    hookCallback = callback;
  }

  // DicomParser prototype object
  function DicomParser(config) {
  }

  function local__createLocal () {
    var config = {};
    var res = new DicomParser(config);
    return res;
  }

  function parseDicom(byteArray, options) {
    throw new Error('not yet implemented');
  }

  // algorithm based on http://stackoverflow.com/questions/1433030/validate-number-of-days-in-a-given-month
  function daysInMonth(m, y) { // m is 0 indexed: 0-11
    switch (m) {
      case 2 :
        return (y % 4 === 0 && y % 100) || y % 400 === 0 ? 29 : 28;
      case 9 : case 4 : case 6 : case 11 :
        return 30;
      default :
        return 31;
    }
  }

  function isValidDate(d, m, y) {
    // make year is a number
    if (isNaN(y)) {
      return false;
    }
    return m > 0 && m <= 12 && d > 0 && d <= daysInMonth(m, y);
  }

  /**
   * Parses a DA formatted string into a Javascript object
   * @param {string} date a string in the DA VR format
   * @param {boolean} [validate] - true if an exception should be thrown if the date is invalid
   * @returns {*} Javascript object with properties year, month and day or undefined if not present or not 8 bytes long
   */
  function parseDA(date, validate)
  {
    if (date && date.length === 8)
    {
      var yyyy = parseInt(date.substring(0, 4), 10);
      var mm = parseInt(date.substring(4, 6), 10);
      var dd = parseInt(date.substring(6, 8), 10);

      if (validate) {
        if (isValidDate(dd, mm, yyyy) !== true) {
          throw new Error("invalid DA '" + date + "'");
        }
      }
      return {
        year: yyyy,
        month: mm,
        day: dd
      };
    }
    if (validate) {
      throw new Error("invalid DA '" + date + "'");
    }
    return undefined;
  }

  var proto = DicomParser.prototype;

  proto.parseDicom               = parseDicom;
  proto.parseDA                  = parseDA;

  var dicomParserPrototype = proto;




  utils_hooks__hooks.version = '2.0.0';

  setHookCallback(local__createLocal);



  utils_hooks__hooks.fn                    = dicomParserPrototype;
  utils_hooks__hooks.prototype             = dicomParserPrototype;
  utils_hooks__hooks.parseDA = parseDA;

  var _dicom_parser = utils_hooks__hooks;

  return _dicom_parser;

}));
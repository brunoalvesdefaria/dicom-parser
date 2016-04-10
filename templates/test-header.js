;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
  && typeof require === 'function' ? factory(require('../../dicom-parser')) :
    typeof define === 'function' && define.amd ? define(['../../dicom-parser'], factory) :
      factory(global.dicomParser)
}(this, function (dicomParser) { 'use strict';

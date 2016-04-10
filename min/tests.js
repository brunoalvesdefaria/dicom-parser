
;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
  && typeof require === 'function' ? factory(require('../../dicom-parser')) :
    typeof define === 'function' && define.amd ? define(['../../dicom-parser'], factory) :
      factory(global.dicomParser)
}(this, function (dicomParser) { 'use strict';

  /*global QUnit:false*/

  var test = QUnit.test;

  var expect = QUnit.expect;

  function module (name, lifecycle) {
    QUnit.module(name, {
      setup : function () {
      },
      teardown : function () {
      }
    });
  }

  module('parseDA');

  test('parseDA', function (assert) {
    var expected = {
      year:2014,
      month:3,
      day:29
    };
    assert.deepEqual(dicomParser.parseDA('20140329'), expected, 'parseDA invalid');
  });

}));
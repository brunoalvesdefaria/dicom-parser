/*global QUnit:false*/

import dicomParser from '../dicom-parser';

export var test = QUnit.test;

export var expect = QUnit.expect;

export function module (name, lifecycle) {
  QUnit.module(name, {
    setup : function () {
    },
    teardown : function () {
    }
  });
}


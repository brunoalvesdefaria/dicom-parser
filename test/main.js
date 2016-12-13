import { describe, it } from 'mocha';
import { assert, expect } from 'chai';

import dicomParser from '../src/dicom-parser.js';

describe('DICOM Parser', () => {

  it('parseDA shall convert fine', () => {
    const result = dicomParser.parseDA('20140329');
    const expected = {
      year: 2014,
      month: 3,
      day: 29
    };

    assert.deepEqual(result, expected, 'Invalid parseDA result');
  });

  it('parseDA shall convert fine with validation for February month', () => {
    const result = dicomParser.parseDA('20160229', true);
    const expected = {
      year: 2016,
      month: 2,
      day: 29
    };

    assert.deepEqual(result, expected, 'Invalid parseDA result');
  });

  it('parseDA shall convert fine with validation for 31 days month', () => {
    const result = dicomParser.parseDA('20010131', true);
    const expected = {
      year: 2001,
      month: 1,
      day: 31
    };

    assert.deepEqual(result, expected, 'Invalid parseDA result');
  });

  it('parseDA shall convert fine with validation for 30 days month', () => {
    const result = dicomParser.parseDA('18550430', true);
    const expected = {
      year: 1855,
      month: 4,
      day: 30
    };

    assert.deepEqual(result, expected, 'Invalid parseDA result');
  });

  it('parseDA shall throw error when date is invalid', () => {
    const fn = () => dicomParser.parseDA('99999999', true);

    expect(fn).to.throw(Error);
  });

  it('parseDA shall throw error when year is not a number', () => {
    const fn = () => dicomParser.parseDA('abcd0315', true);

    expect(fn).to.throw(Error);
  });

  it('parseDA shall throw error when date has incorrect length', () => {
    const fn = () => dicomParser.parseDA('140329', true);

    expect(fn).to.throw(Error);
  });

  it('parseDA shall return undefined when not validating', () => {
    const result = dicomParser.parseDA();

    assert.isUndefined(result);
  });

  it('parseDicom shall return null', () => {
    const result = dicomParser.parseDicom();

    assert.isNull(result);
  });

  it('version shall be a string', () => {
    assert.isString(dicomParser.version);
  });

});

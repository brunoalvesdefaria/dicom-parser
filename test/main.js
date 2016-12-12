import { describe, it } from 'mocha';
import { assert } from 'chai';

import dicomParser from '../src/dicom-parser.js';

describe('DICOM Parser', () => {

  it('Parse DA', () => {
    const result = dicomParser.parseDA('20140329');
    const expected = {
      year: 2014,
      month: 3,
      day: 29
    };

    assert.deepEqual(result, expected, 'Invalid parseDA result');
  });

});

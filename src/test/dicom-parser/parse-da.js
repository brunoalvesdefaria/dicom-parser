import { module, test } from '../qunit';
import dicomParser from '../../dicom-parser';

module('parseDA');

test('parseDA', function (assert) {
  var expected = {
    year:2014,
    month:3,
    day:29
  };
  console.log(dicomParser);
  assert.deepEqual(dicomParser.parseDA('20140329'), expected, 'parseDA invalid');
});


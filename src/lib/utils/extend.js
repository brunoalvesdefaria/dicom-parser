import hasOwnProp from './has-own-prop';

/**
 * Extend a object a with another object b properties.
 * @param {object} a Object that will be extended
 * @param {object} b Object that will extend another with its properties
 * @returns {object} Object a extended with properties of object b
 */
export default function extend (a, b) {
  for (const i in b) {
    if (hasOwnProp(b, i)) {
      a[i] = b[i];
    }
  }

  if (hasOwnProp(b, 'toString')) {
    a.toString = b.toString;
  }

  if (hasOwnProp(b, 'valueOf')) {
    a.valueOf = b.valueOf;
  }

  return a;
}

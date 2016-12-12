/**
 * Check if the parameter is undefined.
 * @param {*} input Parameter that will be checked
 * @param {object} property Property that will be checked
 * @returns {boolean} Returns true if the parameter is undefined
 */
export default function isUndefined (input) {
  return typeof input === 'undefined';
}

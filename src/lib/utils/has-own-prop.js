/**
 * Check if a property is present on an object.
 * @param {object} object Object that will be checked
 * @param {object} property Property that will be checked
 * @returns {boolean} Returns true if the property is present on the object
 */
export default function hasOwnProp (object, property) {
  return Reflect.apply(object.hasOwnProperty, this, property);
}

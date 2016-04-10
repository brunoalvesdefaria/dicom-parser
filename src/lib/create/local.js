
import { DicomParser } from '../dicom-parser/constructor';


export function createLocal () {
  var config = {};
  var res = new DicomParser(config);
  return res;
}

import { DicomParser } from '../dicom-parser/constructor';

export const createLocal = function () {
  const config = {};
  const res = new DicomParser(config);

  return res;
};

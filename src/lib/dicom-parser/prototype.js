import { DicomParser } from './constructor';

var proto = DicomParser.prototype;

import { parseDicom } from './parse-dicom';
import { parseDA } from './parse-da';

proto.parseDicom               = parseDicom;
proto.parseDA                  = parseDA;

export default proto;

import { DicomParser } from './constructor';

const proto = DicomParser.prototype;

import { parseDicom } from './parse-dicom';
import { parseDA } from './parse-da';

proto.parseDicom = parseDicom;
proto.parseDA = parseDA;

export default proto;

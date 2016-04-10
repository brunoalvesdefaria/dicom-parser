//! dicom-parser.js
//! version: 2.0.2
//! authors: Chris Hafey, dicomParser contributors
//! license: MIT
//! https://github.com/OHIF/dicom-parser

import { hooks as dicomParser, setHookCallback } from './lib/utils/hooks';

dicomParser.version = '2.0.2';

import {
  createLocal     as local,
  dicomParserPrototype as fn,
  parseDA as parseDA,
  } from './lib/dicom-parser/dicom-parser';



setHookCallback(local);



dicomParser.fn                    = fn;
dicomParser.prototype             = fn;
dicomParser.parseDA = parseDA;

export default dicomParser;

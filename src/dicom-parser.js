import version from './version';
import * as parsers from './lib/parsers';

/**
 * @class
 */
class dicomParser {

  /**
   * Current version of the library
   */
  static get version () {
    return version;
  }

}

// Parsers
dicomParser.parseDA = parsers.parseDA;
dicomParser.parseDicom = parsers.parseDicom;

export default dicomParser;

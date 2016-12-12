import extend from './extend';
import { hooks } from './hooks';

const warn = function (msg) {
  const noSupress = hooks.suppressDeprecationWarnings === false;
  const consoleWarn = window.console && window.console.warn;

  if (noSupress && consoleWarn) {
    consoleWarn('Deprecation warning:', msg);
  }
};

export const deprecate = function (msg, fn) {
  let firstTime = true;

  return extend(function (...params) {
    if (hooks.deprecationHandler !== null) {
      hooks.deprecationHandler(null, msg);
    }

    if (firstTime) {
      const paramsConcat = params.join(', ');
      const errorStack = (new Error()).stack;

      warn(`${msg}\nArguments: ${paramsConcat}\n${errorStack}`);
      firstTime = false;
    }

    return Reflect.apply(fn, this, params);
  }, fn);
};

const deprecations = {};

export const deprecateSimple = function (name, msg) {
  if (hooks.deprecationHandler !== null) {
    hooks.deprecationHandler(name, msg);
  }

  if (!deprecations[name]) {
    warn(msg);
    deprecations[name] = true;
  }
};

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

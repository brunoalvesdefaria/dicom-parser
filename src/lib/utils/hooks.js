let hookCallback = () => {};

// This is done to register the method called with dicomParser()
// Without creating circular dependencies.
export const setHookCallback = function (callback) {
  hookCallback = callback;
};

export const hooks = (...params) => Reflect.apply(hookCallback, null, params);

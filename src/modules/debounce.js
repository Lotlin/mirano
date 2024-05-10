export const debounce = (fn, msec = 100) => {
  let idTimeout;

  return (...args) => {
    clearInterval(idTimeout);
    idTimeout = setTimeout(() => {
      fn(...args);
    }, msec);
  };
};

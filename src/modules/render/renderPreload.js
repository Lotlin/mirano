/* export const renderPreload = async (elem, cb, ...params) => {
  const preload = document.createElement('div');

  preload.classList = 'preload';

  elem.style.position = 'relative';
  elem.append(preload);
  preload.style.display = 'flex';

  try {
    const result = await cb(...params);

    return result;
  } finally {
    preload.style.display = 'none';
    preload.remove();
  }
};
*/
export const renderPreload = (elem) => {
  const preload = document.createElement('div');
  preload.classList = 'preload';

  elem.style.position = 'relative';
  elem.append(preload);
  preload.style.display = 'flex';

  return preload;
};

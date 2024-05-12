export const renderPreload = (elem) => {
  const preload = document.createElement('div');
  preload.classList = 'preload';

  elem.style.position = 'relative';
  elem.append(preload);
  preload.style.display = 'flex';

  return preload;
};

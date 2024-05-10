// eslint-disable-next-line require-jsdoc
export default function jsx(tag, attributes = {}, ...children) {
  if (typeof tag === 'function') {
    return tag(attributes, ...children);
  }

  const elem = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'class') {
      elem.className = value;
    } else if (key.startsWith('on') && key.toLocaleLowerCase() in window) {
      elem.addEventListener(key.toLocaleLowerCase().substring(2), value);
    } else if (key === 'style' && typeof value === 'object') {
      Object.assign(elem.style, value);
    } else {
      elem.setAttribute(key, value);
    }
  });

  children.forEach((child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      elem.append(document.createTextNode(child.toString()));
    } else {
      elem.append(child);
    }
  });

  return elem;
}

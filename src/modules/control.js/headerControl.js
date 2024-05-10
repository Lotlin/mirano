import {
  headerIsScrolled, fixHeaderOnTop, returnHeaderNormalPosition,
} from '../service.js';

import {debounce} from '../debounce.js';

const headerAppearanceControl = () => {
  if (headerIsScrolled()) {
    fixHeaderOnTop();
  } else {
    returnHeaderNormalPosition();
  }
};

export const headerControl = () => {
  window.addEventListener('scroll', debounce(headerAppearanceControl));
};

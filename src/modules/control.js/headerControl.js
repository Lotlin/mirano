import {
  headerIsScrolled, fixHeaderOnTop, returnHeaderNormalPosition,
} from '../service';

import {debounce} from '../debounce';

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

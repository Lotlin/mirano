import {
  headerIsScrolled, fixHeaderOnTop, returnHeaderNormalPosition, debounce,
} from '@/modules/util';

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

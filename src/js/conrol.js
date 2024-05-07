import {
  headerIsScrolled, fixHeaderOnTop, returnHeaderNormalPosition,
} from './service.js';

const headerAppearanceControl = () => {
  if (headerIsScrolled()) {
    fixHeaderOnTop();
  } else {
    returnHeaderNormalPosition();
  }
};

export const headerControl = () => {
  window.addEventListener('scroll', () => {
    headerAppearanceControl();
  });
};

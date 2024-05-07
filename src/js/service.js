import {body, header} from './getElements.js';

const getCurrentHeadHight = () => header.offsetHeight;

export const fixHeaderOnTop = () => {
  header.classList.add('header--fixed');
  header.classList.remove('header--normal');
  body.style.paddingTop = `${getCurrentHeadHight}px`;
};

export const returnHeaderNormalPosition = () => {
  header.classList.remove('header--fixed');
  body.style.paddingTop = '0';
};

export const getScrolledDistance = () => window.scrollY;

export const headerIsScrolled = () =>
  getScrolledDistance() > getCurrentHeadHight();



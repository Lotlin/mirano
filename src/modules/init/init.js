import '@/scss/index.scss';
import {initHeader} from './initHeader';
import {initCart} from './initCart';
import {initMainSection} from './main/initMainSection.js';

export const init = () => {
  initHeader();
  initCart();
  initMainSection();
};

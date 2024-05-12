import '@/scss/index.scss';
import {initHeader} from '@/modules/init/initHeader';
import {initCart} from '@/modules/init/initCart';
import {initMainSection} from '@/modules/init/main/initMainSection';

export const init = () => {
  initHeader();
  initCart();
  initMainSection();
};

import '@/scss/index.scss';
import {initHeader} from '@/modules/init/initHeader';
import {initCart} from '@/modules/init/initCart';
import {initMainSection} from '@/modules/init/main/initMainSection';
import {initOrder} from '@/modules/init/initOrder';

// todo обнуление цены в корзине при удалении товаров

export const init = () => {
  initHeader();
  initCart();
  initMainSection();
  initOrder();
};

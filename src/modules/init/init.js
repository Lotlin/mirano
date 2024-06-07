import '@/scss/index.scss';
import {initHeader} from '@/modules/init/initHeader';
import {initCart} from '@/modules/init/initCart';
import {initMainSection} from '@/modules/init/main/initMainSection';
import {initOrder} from '@/modules/init/initOrder';

// toDo фильтр цыетов по типу товара
// toDO при вводе в фильтр пропадает окно (после ввода в первый input)
// toDO карточка товара время доставки + при оформлении заказа
// toDO проверить onKeyDown для openSelect

export const init = () => {
  initHeader();
  initCart();
  initMainSection();
  initOrder();
};

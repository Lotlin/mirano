import '@/scss/index.scss';
import {renderProducts} from '../render/renderProducts';
import {initChoices} from './initChoices';
import {filterProducts} from '../service/filterProducts';
import {initHeader} from './initHeader';
import {initCart} from './initCart';

export const init = () => {
  initHeader();
  initCart();
  initChoices();

  filterProducts();
  renderProducts();
};

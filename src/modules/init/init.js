import '@/scss/index.scss';
import {renderProducts} from '../render/renderProducts.js';
import {initChioces} from './initChoices';
import {filterProducts} from '../service';
import {initHeader} from './initHeader.js';
import {initCart} from './initCart.js';

export const init = () => {
  initHeader();
  initCart();
  initChioces();

  filterProducts();
  renderProducts();
};

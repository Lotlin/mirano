import {headerControl} from '../control/headerControl.js';
import {searchProducts} from '../service/searchProducts.js';

export const initHeader = () => {
  headerControl();
  searchProducts();
};

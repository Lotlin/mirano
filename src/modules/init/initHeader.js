import {headerControl} from '@/modules/control/headerControl';
import {searchProducts} from '@/modules/service/searchProducts';

export const initHeader = () => {
  headerControl();
  searchProducts();
};

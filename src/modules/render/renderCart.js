import {cartStore} from '@/modules/components/Store.js';
import {updateCartList} from '@/modules/service/updateCartList.js';

export const renderCart = () => {
  cartStore.subscribe(updateCartList);

  updateCartList();
};


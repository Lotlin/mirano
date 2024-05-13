import {cartControl} from '@/modules/control/cartControl';
import {cartStore} from '@/modules/components/Store';
import {renderCart} from '@/modules/render/renderCart';
import {cartOpenBtn} from '@/modules/getElements';
import {showItemQuantity} from '@/modules/util.js';

export const initCart = async () => {
  await cartStore.init();

  showItemQuantity(cartOpenBtn, cartStore);

  renderCart();

  cartStore.subscribe(() => {
    showItemQuantity(cartOpenBtn, cartStore);
  });

  cartControl();
};

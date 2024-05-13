import {cartControl} from '@/modules/control/cartControl';
import {cartStore} from '@/modules/components/Store';
import {renderCart} from '@/modules/render/renderCart';
import {cartOpenBtn} from '@/modules/getElements';

export const initCart = async () => {
  await cartStore.init();

  cartOpenBtn.textContent = cartStore.getCart().length;

  renderCart();

  cartStore.subscribe(() => {
    cartOpenBtn.textContent = cartStore.getCart().length;
  });

  cartControl();
};

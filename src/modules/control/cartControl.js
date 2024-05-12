import {toggleCart, hideCart} from '@/modules/util';
import {cart, cartOpenBtn, cartCloseBtn} from '@/modules/getElements';

const closeCartControl = () => {
  cartCloseBtn.addEventListener('click', () => {
    hideCart(cart);
  });
};

const openCartControl = () => {
  cartOpenBtn.addEventListener('click', () => {
    toggleCart(cart);
  });
};

export const cartControl = () => {
  openCartControl();
  closeCartControl();
};

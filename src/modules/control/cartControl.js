import {toggleCart, hideCart} from '../util';
import {cart, cartOpenBtn, cartCloseBtn} from '../getElements';

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

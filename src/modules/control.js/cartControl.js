import {toggleCart, hideCart} from '../service.js';
import {cart, cartOpenBtn, cartCloseBtn} from '../getElements.js';

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

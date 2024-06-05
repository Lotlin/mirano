import {cartOrderBtn} from '@/modules/getElements';
import {cartStore} from '@/modules/components/Store.js';
import {cartElem} from '../getElements.js';

export const getCartTotalPrice = (cart) => cart.reduce((acc, product) =>
  acc + product.price * product.quantity, 0);

export const cartOrderBtnDisabledControl = () => {
  const cart = cartStore.getCart();
  cartOrderBtn.disabled = !cart.length;
};

export const closeCart = () => {
  cartElem.classList.remove('cart--active');
};

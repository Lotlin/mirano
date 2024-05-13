import {cartStore} from '@/modules/components/Store';
import {cartList, cartTotalPrice} from '@/modules/getElements';
import {renderMessage} from '@/modules/render/renderMessages';
import {CartElem} from '@/modules/components/CartElem';

export const updateCartList = () => {
  const cart = cartStore.getCart();

  cartList.textContent = '';

  // toDo стили для сообщения
  if (!cart.length) {
    const messageItem =
      renderMessage('cart__no-product', 'Корзина пуста');
    cartList.append(messageItem);

    return;
  }

  const ProductCards = cart.map(CartElem);
  cartList.append(...ProductCards);

  const totalPiceValue = cart.reduce((acc, product) =>
    acc + product.price * product.quantity, 0);
  cartTotalPrice.innerHTML = `${totalPiceValue}&nbsp;₽`;
};

import {cartStore} from '@/modules/components/Store';
// import {updateCartList} from '@/modules/service/updateCartList.js';
import {cartList, cartTotalPrice} from '@/modules/getElements';
import {renderMessage} from '@/modules/render/renderMessages';
import {CartElem} from '@/modules/components/CartElem';

const renderUpdatedCartList = () => {
  const cart = cartStore.getCart();

  cartList.textContent = '';

  // toDo стили для сообщения
  if (!cart.length) {
    renderMessage('cart__no-product', 'Корзина пуста', cartList);
    return;
  }

  const ProductCards = cart.map(CartElem);
  cartList.append(...ProductCards);

  const totalPiceValue = cart.reduce((acc, product) =>
    acc + product.price * product.quantity, 0);
  cartTotalPrice.innerHTML = `${totalPiceValue}&nbsp;₽`;
};


export const renderCart = () => {
  cartStore.subscribe(renderUpdatedCartList);

  renderUpdatedCartList();
};


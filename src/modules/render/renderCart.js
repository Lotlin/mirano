import {cartStore} from '@/modules/components/Store';
import {cartList, cartTotalPrice} from '@/modules/getElements';
import {renderMessage} from '@/modules/render/renderMessages';
import {CartElem} from '@/modules/components/CartElem';
import {getCartTotalPrice} from '@/modules/service/cartService';

const renderUpdatedCartList = () => {
  const cart = cartStore.getCart();

  cartList.textContent = '';

  if (!cart.length) {
    renderMessage('cart__no-product', 'Корзина пуста', cartList);
    cartTotalPrice.innerHTML = `0 ₽`;

    return;
  }

  const ProductCards = cart.map(CartElem);
  cartList.append(...ProductCards);

  const totalPriceValue = getCartTotalPrice(cart);
  cartTotalPrice.innerHTML = `${totalPriceValue}&nbsp;₽`;
};


export const renderCart = () => {
  cartStore.subscribe(renderUpdatedCartList);

  renderUpdatedCartList();
};


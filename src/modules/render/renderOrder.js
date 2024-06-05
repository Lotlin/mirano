import {cartStore} from '@/modules/components/Store';
import {getCartTotalPrice} from '@/modules/service/cartService';
import {Order} from '@/modules/components/Order';

export const renderOrder = () => {
  const cart = cartStore.getCart();
  const orderTotalPriceValue = getCartTotalPrice(cart);

  const order = Order(orderTotalPriceValue);
  document.body.append(order);
};

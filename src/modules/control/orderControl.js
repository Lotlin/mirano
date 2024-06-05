import {
  isClickedOrderCloseBtn, rotateArrowDeliveryTimeSelectService,
  getOrderFormData,
} from '@/modules/service/orderService.js';
import {getOrderFormElem} from '../getElements.js';
import {sendOrder} from '../components/API.js';
import {cartStore} from '@/modules/components/Store';
import {closeCart} from '@/modules/service/cartService.js';
import {
  OrderSuccessMessage,
} from '@/modules/components/OrderSuccessMessage.jsx';

export const orderCloseControl = (order) => {
  order.addEventListener('click', ({target}) => {
    if (target === order || isClickedOrderCloseBtn(target)) {
      order.remove();
    }
  });
};

export const orderFormSubmitConrol = (order) => {
  const formELem = getOrderFormElem(order);

  formELem.addEventListener('submit', async e => {
    e.preventDefault();

    const orderData = getOrderFormData(formELem);

    const result = await sendOrder(orderData);

    const orderSuccessMessage = OrderSuccessMessage(result.orderId);

    order.textContent = '';
    order.append(orderSuccessMessage);
    cartStore.clearCart();
    closeCart();
  });
};

export const orderControl = (order) => {
  orderCloseControl(order);
  rotateArrowDeliveryTimeSelectService();
  orderFormSubmitConrol(order);
};

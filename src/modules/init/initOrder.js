import {orderControl} from '../control/orderControl.js';
import {cartOrderBtn, getOrderSection} from '../getElements.js';
import {renderOrder} from '../render/renderOrder.js';


export const initOrder = () => {
  cartOrderBtn.addEventListener('click', () => {
    renderOrder();

    const order = getOrderSection();

    orderControl(order);
  });
};

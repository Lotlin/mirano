import {getOrderDeliveryTimeSelect} from '@/modules/getElements.js';

export const rotateArrowDeliveryTimeSelectService = () => {
  const selectElement = getOrderDeliveryTimeSelect();

  selectElement.addEventListener('focus', () => {
    selectElement.classList.add('order-form__delivery-time--active');
  });

  selectElement.addEventListener('blur', () => {
    selectElement.classList.remove('order-form__delivery-time--active');
  });

  selectElement.addEventListener('change', () => {
    selectElement.classList.remove('order-form__delivery-time--active');
  });
};

export const isClickedOrderCloseBtn = (target) =>
  target.classList.contains('order__close-btn');

export const getOrderFormData = (formELem) => {
  const formData = new FormData(formELem);

  const orderData = {
    buyer: {
      name: formData.get('buyer-name'),
      phone: formData.get('buyer-phone'),
    },
    recipient: {
      name: formData.get('recipient-name'),
      phone: formData.get('recipient-phone'),
    },
    address: `${formData.get('street')} ${formData.get('building')} ${formData.get('apartment')}`,
    paymentOnline: `${formData.get('payment-online') === 'true'}`,
    deliveryDate: formData.get('delivery-date'),
    deliveryTime: formData.get('deliveryTime'),
  };

  return orderData;
};


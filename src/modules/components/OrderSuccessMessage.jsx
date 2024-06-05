export const OrderSuccessMessage = (orderId) => (
  <div class="order__container order-message">
    <h2 class="order__title order-message__title">Заказ оформлен</h2>
    <p class="order__id order-message__id">Номер заказа: {orderId}</p>
  </div>
);

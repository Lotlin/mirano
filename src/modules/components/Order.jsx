import {getDeliveryDate} from '@/modules/util.js';

export const Order = (orderTotalPriceValue) => {
  
  const deliveryDate = getDeliveryDate(1);
  
  return (
  <section class="order">
      <div class="order__container">
        <h2 class="order__title">Оформить заказ</h2>
        <form class="order__form order-form" action="#" id="order-form">
          <fieldset class="order-form__fieldset">
            <legend class="order-form__legend">Данные заказчика</legend>

            <label class="order-form__label" for="buyer-name"></label>
            <input class="order-form__input order-form__input--name" type="text" id="buyer-name" placeholder="Имя" name="buyer-name" required  />

            <label class="order-form__label" for="buyer-phone"></label>
            <input class="order-form__input order-form__input--phone" type="tel" id="buyer-phone" placeholder="Телефон" name="buyer-phone" 
              pattern="\+?[0-9\s\-\(\)]+" required 
            />
          </fieldset>

          <fieldset class="order-form__fieldset">
            <legend class="order-form__legend">Данные получателя</legend>

            <label class="order-form__label" for="recipient-name"></label>
            <input class="order-form__input order-form__input--name" type="text" id="recipient-name" placeholder="Имя" name="recipient-name" required />

            <label class="order-form__label" for="recipient-phone"></label>
            <input class="order-form__input order-form__input--phone" type="tel" id="recipient-phone" placeholder="Телефон" name="recipient-phone"
              pattern="\+?[0-9\s\-\(\)]+" required
            />
          </fieldset>

          <fieldset class="order-form__fieldset order-form__fieldset--address">
            <legend class="order-form__legend">Адрес</legend>

            <label class="order-form__label" for="street"></label>
            <input class="order-form__input order-form__input--street" type="text" id="street" placeholder="Улица" name="street" required />

            <label class="order-form__label" for="building"></label>
            <input class="order-form__input order-form__input--building" type="text" id="building" placeholder="Дом" name="building" required />

            <label class="order-form__label" for="apartment"></label>
            <input class="order-form__input order-form__input--apartment" type="text" id="apartment" placeholder="Квартира" name="apartment" required />
          </fieldset>

          <fieldset class="order-form__fieldset order-form__fieldset--delivery-payment">
            <label class="order-form__label order-form__label--radio" for="onlinePayment">
              <input class="order-form__radio" type="radio" id="onlinePayment" name="payment-online" value="true" checked />
              Оплата онлайн
            </label>

            <label class="order-form__delivery" for="deliveryTime">Доставка <span class="order-form__delivery-date">{deliveryDate}</span></label>
            <input type="hidden" name="delivery-date" value={deliveryDate} />

            <select 
              class="order-form__delivery-time"
              name="deliveryTime"
              id="deliveryTime"
            >
              <option class="order-form__delivery-option" value="9-12">с 9:00 до 12:00</option>
              <option value="12-16">с 12:00 до 16:00</option>
              <option value="16-18">с 16:00 до 18:00</option>
              <option value="18-22">с 18:00 до 22:00</option>
            </select>
          </fieldset>
        </form>

        <div class="order-form__footer">
          <p class="order-form__total-price">{orderTotalPriceValue}&nbsp;₽</p>
          <button class="order-form__submit" type="submit" form="order-form">Заказать</button>
        </div>
      </div>

      <button class="order__close-btn" type="button">&times;</button>
    </section>
)
};

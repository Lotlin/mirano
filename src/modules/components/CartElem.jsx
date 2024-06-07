import {API_URL} from '@/modules/components/API';
import {cartStore} from '@/modules/components/Store';
import { debounce } from '../util.js';

export const CartElem = (product) => (
  <li class="cart__item">
    <img
      class="cart__img"
      src={`${API_URL}${product.photoUrl}`}
      alt={product.name}
    />

    <h3
      class="cart__item-title">
      {product.name}
    </h3>

    <div class="cart__counter">
      <button
        class="cart__counter-btn cart__counter-btn--minus"
        type="button"
        onClick={() => {
          cartStore.postCart({
            id: product.id,
            quantity: product.quantity - 1
          })
        }}
      >
        -
      </button>
      <input
        class="cart__counter-input"
        type="number"
        min="0"
        max="99"
        value={product.quantity}
        onInput = {debounce(({target}) => {
          cartStore.postCart({
            id: product.id,
            quantity: !isNaN(parseInt(target.value)) ? parseInt(target.value) : product.quantity,
          });
        }, 500)}
      />
      <button
        class="cart__counter-btn cart__counter-btn--plus"
        type="button"
        onClick={() => {
          cartStore.postCart({
            id: product.id,
            quantity: product.quantity + 1
          })
        }}
      >
        +
      </button>
    </div>

    <p
      class="cart__price cart__price--item">
      {product.price * product.quantity}&nbsp;₽
    </p>
  </li>
);
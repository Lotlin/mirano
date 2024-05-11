import {API_URL} from './api';

export const ProductCard = (product) => (
  <li class="goods__item card">
    <img
      class="card__img"
      src={`${API_URL}${product.photoUrl}`}
      alt={product.name}
    />
    <h3 class="card__title">
      {product.name}
    </h3>
    <div class="card__info">
      <div class="card__delivery delivery">
        сегодня в&nbsp;14:00
      </div>
      <button class="card__button" type="button">
        <span class="card__price">
          {product.price}&nbsp;₽
        </span>
        <span class="card__to-cart">
          в&nbsp;корзину
        </span>
      </button>
    </div>
  </li>
)
import {API_URL} from '@/modules/components/API';
import {cartStore} from '@/modules/components/Store';

// toDo время доставки

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
      <button class="card__button" type="button"
        onMouseEnter = {(e) => {
          e.target.textContent = 'В корзину';
        }}
        onMouseLeave = {(e) => {
          e.target.innerHTML = `${product.price}&nbsp;₽`;
        }}
        onClick={() => {cartStore.addProductCart(product.id)
        }}
        >
        {product.price}&nbsp;₽
      </button>
    </div>
  </li>
)

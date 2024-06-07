import {headerForm, goodsSection} from '@/modules/getElements';
import {renderGoodsTitle} from '@/modules/render/renderProducts';
import {callbackWithPreload} from '@/modules/service/callbackWithPreload';
import {productStore} from '@/modules/components/Store.js';

export const searchProducts = () => {
  headerForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(headerForm);

    const searchQuery = formData.get('search').trim();

    if (searchQuery) {
      renderGoodsTitle('Результат поиска');
      callbackWithPreload(goodsSection, productStore.fetchProducts(),
          {search: searchQuery},
      );
    }
  });
};

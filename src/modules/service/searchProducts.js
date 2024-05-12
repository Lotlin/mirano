import {fetchProducts} from '@/modules/components/API';
import {headerForm, goodsSection} from '@/modules/getElements';
import {renderGoodsTitle} from '@/modules/render/renderProducts';
import {callbackWithPreload} from '@/modules/service/callbackWithPreload';

export const searchProducts = () => {
  headerForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(headerForm);

    const searchQuery = formData.get('search').trim();

    if (searchQuery) {
      renderGoodsTitle('Результат поиска');
      callbackWithPreload(goodsSection, fetchProducts, {search: searchQuery});
    }
  });
};

import {fetchProducts} from '@/modules/components/API';
import {headerForm} from '@/modules/getElements';
import {renderGoodsTitle} from '@/modules/render/renderProducts';

export const searchProducts = () => {
  headerForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(headerForm);

    const searchQuery = formData.get('search').trim();

    if (searchQuery) {
      renderGoodsTitle('Результат поиска');
      fetchProducts({search: searchQuery});
    }
  });
};

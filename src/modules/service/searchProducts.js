import {fetchProducts} from '../api.js';
import {headerForm} from '../getElements.js';
import {renderGoosTitle} from '../render/renderProducts.js';

export const searchProducts = () => {
  headerForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(headerForm);

    const searchQuery = formData.get('search').trim();

    if (searchQuery) {
      renderGoosTitle('Результат поиска');
      fetchProducts({search: searchQuery});
    }
  });
};

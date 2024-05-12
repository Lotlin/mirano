import {fetchProducts} from '../api';
import {filterForm} from '../getElements';
import {renderGoosTitle} from '../render/renderProducts.js';
import {cleanInputValue} from '../util.js';

// toDo filter bouquetType
// toDO fix goodType disappearance
const applyFiltres = (form) => {
  const formData = new FormData(form);

  const type = formData.get('type');
  const minPrice = formData.get('minPrice');
  const maxPrice = formData.get('maxPrice');

  const filterParams = {};

  if (type) {
    filterParams.type = type;
  }

  if (minPrice) {
    filterParams.minPrice = minPrice;
  }

  if (maxPrice) {
    filterParams.maxPrice = maxPrice;
  }

  fetchProducts(filterParams);
};

export const filterProducts = () => {
  applyFiltres(filterForm);

  filterForm.addEventListener('change', ({target}) => {
    if (target.name === 'type') {
      renderGoosTitle(target.labels[0].textContent);
      cleanInputValue(filterForm.minPrice);
      cleanInputValue(filterForm.maxPrice);
      applyFiltres(filterForm);
      return;
    }

    applyFiltres(filterForm);
  });
};

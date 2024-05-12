import {fetchProducts} from '@/modules/components/API';
import {filterForm, goodsSection} from '@/modules/getElements';
import {renderGoodsTitle} from '@/modules/render/renderProducts';
import {cleanInputValue} from '@/modules/util';
import {callbackWithPreload} from '@/modules/service/callbackWithPreload';

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

  callbackWithPreload(goodsSection, fetchProducts, filterParams);
};

export const filterProducts = () => {
  applyFiltres(filterForm);

  filterForm.addEventListener('change', ({target}) => {
    if (target.name === 'type') {
      renderGoodsTitle(target.labels[0].textContent);
      cleanInputValue(filterForm.minPrice);
      cleanInputValue(filterForm.maxPrice);
      applyFiltres(filterForm);
      return;
    }

    applyFiltres(filterForm);
  });
};

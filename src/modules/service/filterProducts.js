import {filterForm, goodsSection} from '@/modules/getElements';
import {renderGoodsTitle} from '@/modules/render/renderProducts';
import {cleanInputValue} from '@/modules/util';
import {callbackWithPreload} from '@/modules/service/callbackWithPreload';
import {productStore} from '../components/Store.js';
import {isClickedOnBouquetTypeBtn} from '../util.js';

const applyFiltres = (form, category) => {
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

  if (category) {
    filterParams.category = category;
  }

  callbackWithPreload(
      goodsSection, productStore.fetchProducts(), filterParams,
  );
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

  filterForm.addEventListener('click', ({target}) => {
    if (isClickedOnBouquetTypeBtn(target)) {
      applyFiltres(filterForm, target.textContent);
    }
  });
};

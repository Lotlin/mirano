import {fetchProducts} from './api';
import {filterForm} from './getElements';

const filterType = choosenType => {
  fetchProducts({type: choosenType});
};

export const filterProducts = () => {
  filterType(filterForm.type.value);

  filterForm.addEventListener('change', e => {
    const target = e.target;

    if (target.name === 'type') {
      filterType(filterForm.type.value);
    }
  });
};

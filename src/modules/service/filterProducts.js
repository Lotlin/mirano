import {fetchProducts} from '../api';
import {filterForm} from '../getElements';

// toDo filter bouquetType

const filterType = choosenType => {
  fetchProducts({type: choosenType});
};

const filterMinPrice = (choosenType, chosenMinPrice) => {
  fetchProducts({type: choosenType, minPrice: chosenMinPrice});
};

const filterMaxPrice = (choosenType, chosenMaxPrice) => {
  fetchProducts({type: choosenType, maxPrice: chosenMaxPrice});
};

const filterMinPriceMaxPrice =
  (choosenType, chosenMinPrice, chosenMaxPrice) => {
    fetchProducts({
      type: choosenType,
      minPrice: chosenMinPrice,
      maxPrice: chosenMaxPrice,
    });
  };

export const filterProducts = () => {
  filterType(filterForm.type.value);

  filterForm.addEventListener('change', e => {
    const target = e.target;

    if (target.name === 'type') {
      filterType(filterForm.type.value);
    }

    if (target.name === 'minPrice') {
      if (!filterForm.maxPrice.value) {
        filterMinPrice(filterForm.type.value, filterForm.minPrice.value);
      } else {
        filterMinPriceMaxPrice(
            filterForm.type.value,
            filterForm.minPrice.value,
            filterForm.maxPrice.value,
        );
      }
    }

    if (target.name === 'maxPrice') {
      if (!filterForm.minPrice.value) {
        filterMaxPrice(filterForm.type.value, filterForm.maxPrice.value);
      } else {
        filterMinPriceMaxPrice(
            filterForm.type.value,
            filterForm.minPrice.value,
            filterForm.maxPrice.value,
        );
      }
    }
  });
};

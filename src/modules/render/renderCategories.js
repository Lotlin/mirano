import {Category} from '../Category.jsx';
import {store} from '../Store.js';
import {filterCategoryList} from '../getElements.js';

export const renderCategories = async () => {
  const updateCategoriList = () => {
    const categories = store.getCategories();

    filterCategoryList.innerHTML = '';

    categories.forEach(category => {
      const filterCategory = Category(category);

      filterCategoryList.append(filterCategory);
    });
  };

  store.subscribe(updateCategoriList);

  updateCategoriList();
};

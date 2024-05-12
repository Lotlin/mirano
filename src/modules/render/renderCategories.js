import {Category} from '@/modules/components/Category';
import {store} from '@/modules/components/Store';
import {filterCategoryList} from '@/modules/getElements';

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

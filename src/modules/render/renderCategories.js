import {Category} from '@/modules/components/Category';
import {productStore} from '@/modules/components/Store';
import {filterCategoryList} from '@/modules/getElements';

export const renderCategories = async () => {
  const updateCategoriList = () => {
    const categories = productStore.getCategories();

    filterCategoryList.innerHTML = '';

    categories.forEach(category => {
      const filterCategory = Category(category);

      filterCategoryList.append(filterCategory);
    });
  };

  productStore.subscribe(updateCategoriList);

  updateCategoriList();
};

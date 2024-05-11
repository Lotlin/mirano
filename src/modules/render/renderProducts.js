import {goodsList} from '../getElements';
import {ProductCard} from '../ProductCard';
import {store} from '../Store';

export const renderProducts = async () => {
  const updateList = () => {
    const products = store.getProducts();

    goodsList.innerHTML = '';

    products.forEach(product => {
      const productCard = ProductCard(product);

      goodsList.append(productCard);
    });
  };

  store.subscribe(updateList);

  updateList();
};

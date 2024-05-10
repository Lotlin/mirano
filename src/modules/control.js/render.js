import {fetchProducts} from '../API';
import {goodsList} from '../getElements';
import {ProductCard} from '../ProductCard';

export const renderProducts = async (type = 'bouquets') => {
  const products = await fetchProducts();

  goodsList.innerHTML = '';

  products.forEach(product => {
    const productCard = ProductCard(product);

    goodsList.append(productCard);
  });
};

import {goodsList, goodsTitle} from '../getElements';
import {ProductCard} from '../ProductCard';
import {store} from '../Store';

export const renderProducts = async () => {
  const updateList = () => {
    const products = store.getProducts();

    goodsList.innerHTML = '';

    if (!products.length) {
      const messageItem = document.createElement('li');
      messageItem.className = 'goods__no-product';
      messageItem.textContent = 'Товары не найдены';

      goodsList.append(messageItem);

      return;
    }

    products.forEach(product => {
      const productCard = ProductCard(product);

      goodsList.append(productCard);
    });
  };

  store.subscribe(updateList);

  updateList();
};

export const renderGoosTitle = (title) => {
  goodsTitle.textContent = title;
};

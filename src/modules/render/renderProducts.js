import {goodsList, goodsTitle} from '@/modules/getElements';
import {ProductCard} from '@/modules/components/ProductCard';
import {store} from '@/modules/components/Store';

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

export const renderGoodsTitle = (title) => {
  goodsTitle.textContent = title;
};

import {goodsList, goodsTitle} from '@/modules/getElements';
import {ProductCard} from '@/modules/components/ProductCard';
import {productStore} from '@/modules/components/Store';
import {renderMessage} from '@/modules/render/renderMessages.js';

export const renderProducts = async () => {
  const updateList = () => {
    const products = productStore.products;

    goodsList.innerHTML = '';

    if (!products.length && !productStore.loading) {
      renderMessage('goods__no-product', 'Товары не найдены', goodsList);

      return;
    }

    products.forEach(product => {
      const productCard = ProductCard(product);

      goodsList.append(productCard);
    });
  };

  productStore.subscribe(updateList);

  updateList();
};

export const renderGoodsTitle = (title) => {
  goodsTitle.textContent = title;
};

import {productStore} from '@/modules/components/Store';

export const API_URL = 'http://localhost:3000';
const PRODUCTS_URL = 'api/products';
export const CART_URL = 'api/cart';
export const CART_POST = 'items';
export const CART_REGISTER = 'register';

const formatQueryStryng = params => {
  if (!Object.keys(params)) {
    return '';
  }

  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, value);
  });

  return `?${searchParams.toString()}`;
};

export const fetchProducts = async (params = {}) => {
  try {
    const response = await fetch(
        `${API_URL}/${PRODUCTS_URL}${formatQueryStryng(params)}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const products = await response.json();

    productStore.setProducts(products);
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error}`);

    return [];
  }
};

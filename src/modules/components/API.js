export const API_URL = 'https://magnificent-flowery-oak.glitch.me';
const PRODUCTS_URL = 'api/products';
export const CART_URL = 'api/cart';
export const CART_POST = 'items';
export const CART_REGISTER = 'register';
export const ORDER_URL = 'api/orders';

const formatQueryStryng = params => {
  if (!Object.keys(params).length) {
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
    return products;
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error}`);

    return [];
  }
};


export const sendOrder = async (orderData) => {
  try {
    const response = await fetch(`${API_URL}/${ORDER_URL}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error(`Ошибка при заказе ${response.status}, попробуйте позже`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};


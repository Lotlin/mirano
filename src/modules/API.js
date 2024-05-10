export const API_URL = 'http://localhost:3000';
export const PRODUCTS_URL = 'api/products';

export const fetchProducts = async (type = 'bouquets') => {
  try {
    const response = await fetch(`${API_URL}/${PRODUCTS_URL}?type=${type}`);

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const products = response.json();

    return products;
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error}`);

    return [];
  }
};

/* eslint-disable require-jsdoc */
class Store {
  constructor() {
    this.observers = [];
  }

  subscribe(observerFunction) {
    this.observers.push(observerFunction);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer());
  }
}

class ProductStore extends Store {
  constructor() {
    super();
    this.products = [];
    this.categories = new Set();
  }

  getProducts() {
    return this.products;
  }

  setProducts(newProducts) {
    this.products = newProducts;
    this.updateCategories(newProducts);
    this.notifyObservers();
  }

  getCategories() {
    return this.categories;
  }

  updateCategories(products) {
    this.categories.clear();

    products.forEach(product => {
      if (product.categories) {
        product.categories.forEach(category => {
          this.categories.add(category);
        });
      }
    });

    this.notifyObservers();
  }
}

export const store = new ProductStore();

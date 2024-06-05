export const body = document.body;

export const header = body.querySelector('.header');
export const headerForm = header.querySelector('.header__form');
export const typeChoices = body.querySelector('.filter__choices-type-btn');
export const allChoicesBtns = body.querySelectorAll('.choices__btn');
export const allChoicesBoxes = body.querySelectorAll('.choices__box');
export const allChoicesButtons = body.querySelectorAll('.choices__btn');


export const cart = body.querySelector('.cart');
export const cartOpenBtn = body.querySelector('.header__cart-btn');
export const cartCloseBtn = cart.querySelector('.cart__close-btn');

export const goodsSection = body.querySelector('.goods');
export const goodsTitle = goodsSection.querySelector('.goods__title');
export const goodsList = goodsSection.querySelector('.goods__list');

export const filterForm = body.querySelector('.filter__form');
export const filterCategoryList =
  filterForm.querySelector('.filter__type-list');

export const cartElem = body.querySelector('.cart');
export const cartList = cartElem.querySelector('.cart__list');
export const cartTotalPrice = cartElem.querySelector('.cart__price--total');
export const cartOrderBtn = cartElem.querySelector('.cart__order-btn');

export const getOrderSection = () => document.querySelector('.order');
export const getOrderDeliveryTimeSelect = () =>
  document.querySelector('.order-form__delivery-time');
export const getOrderFormElem = (order) => order.querySelector('.order__form');

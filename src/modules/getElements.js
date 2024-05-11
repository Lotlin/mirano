export const body = document.body;

export const header = body.querySelector('.header');

export const typeChoices = body.querySelector('.filter__choices--type');
export const allChoicesBtns = body.querySelectorAll('.choices__btn');
export const allChoicesBoxes = body.querySelectorAll('.choices__box');

export const cart = body.querySelector('.cart');
export const cartOpenBtn = body.querySelector('.header__cart-btn');
export const cartCloseBtn = cart.querySelector('.cart__close-btn');

export const goodsList = body.querySelector('.goods__list');

export const filterForm = body.querySelector('.filter__form');
export const filterCategoryList =
  filterForm.querySelector('.filter__type-list');

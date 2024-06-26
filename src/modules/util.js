import {body, header} from '@/modules/getElements';

export const debounce = (fn, msec = 100) => {
  let idTimeout;

  return (...args) => {
    clearTimeout(idTimeout);
    idTimeout = setTimeout(() => {
      fn(...args);
    }, msec);
  };
};

const getCurrentHeadHight = () => header.offsetHeight;

export const fixHeaderOnTop = () => {
  header.classList.add('header--fixed');
  header.classList.remove('header--normal');
  body.style.paddingTop = `${getCurrentHeadHight}px`;
};

export const returnHeaderNormalPosition = () => {
  header.classList.remove('header--fixed');
  body.style.paddingTop = '0';
};

export const getScrolledDistance = () => window.scrollY;

export const headerIsScrolled = () =>
  getScrolledDistance() > getCurrentHeadHight();

export const toggleChoiceBox = (box) => {
  box.classList.toggle('choices__box--active');
};

export const hideChoiceBox = (box) => {
  box.classList.remove('choices__box--active');
};

export const isClickOnThisChoicesBox = (target) => target.closest('.choices');

export const isChoiseBoxShown = (choiceBox) =>
  choiceBox.classList.contains('choices__box--active');

const isElemDroppingOutLeft = (elemPosition) => elemPosition.left < 0;
const isElemDroppingOutRight = (elemPosition, viewportWindow) =>
  elemPosition.right > viewportWindow;

export const adjustElementPosition = (elem, count = 0) => {
  const currentElemPosition = elem.getBoundingClientRect();
  const viewportWindow = window.innerWidth;

  if (isElemDroppingOutLeft(currentElemPosition)) {
    elem.style.left = '0';
    elem.style.right = 'auto';
    elem.style.transform = 'translateX(0)';
  } else if (isElemDroppingOutRight(currentElemPosition, viewportWindow)) {
    elem.style.left = 'auto';
    elem.style.right = '0';
    elem.style.transform = 'translateX(0)';
  } else {
    elem.style.left = '50%';
    elem.style.right = 'auto';
    elem.style.transform = 'translateX(-50%)';
  }

  const newElemPosition = elem.getBoundingClientRect();
  if ((isElemDroppingOutLeft(newElemPosition) ||
    isElemDroppingOutRight(newElemPosition, viewportWindow)) && count < 3) {
    count++;
    adjustElementPosition(elem, count);
  }
};

export const isCartShown = (cart) => cart.classList.contains('cart--active');

export const toggleCart = (cart) => {
  cart.classList.toggle(`cart--active`);

  if (isCartShown(cart) && window.innerWidth > 1360) {
    cart.scrollIntoView({behavior: 'smooth'});
  }
};

export const hideCart = (cart) => {
  cart.classList.remove(`cart--active`);
};

export const showItemQuantity = (cartOpenBtn, cartStore) => {
  cartOpenBtn.textContent = cartStore.getCart().length;
};

export const cleanInputValue = (input) => {
  input.value = '';
};

export const removeElem = (elem, parentElem) => {
  elem.style.display = 'none';
  elem.remove();

  if (parentElem.style.position === 'relative') {
    parentElem.style.position = '';
  }
};

export const choiceBtnRotateArrowBg = (elem) => {
  elem.classList.add('filter__select--bg-rotate');
};

export const choiceBtnReturnToNormalPosArrowBg = (elem) => {
  elem.classList.remove('filter__select--bg-rotate');
};

const addZeroToSingleDigit = num => (num < 10 ? `0${num}` : num);

export const getDeliveryDate = (deliveryTimeInDays = 1) => {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  const deliveryDay = addZeroToSingleDigit(date.getDate());
  const deliveryMonth = addZeroToSingleDigit((date.getMonth() + 1));

  const deliveryDate = `${deliveryDay}.${deliveryMonth}`;

  return deliveryDate;
};

export const isClickedOnBouquetTypeBtn = (target) =>
  target.closest('.filter__type-button');

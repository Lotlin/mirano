import {
  headerIsScrolled, fixHeaderOnTop, returnHeaderNormalPosition, toggleChoiceBox,
  adjustElementPositon, hideChoiceBox, toggleCart, hideCart,
} from './service.js';

import {
  allChoicesBtns, allChoicesBoxes, cart, cartOpenBtn, cartCloseBtn,
} from './getElements.js';

const headerAppearanceControl = () => {
  if (headerIsScrolled()) {
    fixHeaderOnTop();
  } else {
    returnHeaderNormalPosition();
  }
};

export const headerControl = () => {
  window.addEventListener('scroll', () => {
    headerAppearanceControl();
  });
};

export const choicesControl = () => {
  allChoicesBtns.forEach(btn => {
    const btnsAmount = allChoicesBtns.length;

    btn.addEventListener('click', e => {
      for (let i = 0; i < btnsAmount; i++) {
        if (allChoicesBtns[i] === e.target) {
          toggleChoiceBox(allChoicesBoxes[i]);
          adjustElementPositon(allChoicesBoxes[i]);
        } else {
          hideChoiceBox(allChoicesBoxes[i]);
        }
      }
    });
  });
};

const closeCartControl = () => {
  cartCloseBtn.addEventListener('click', () => {
    hideCart(cart);
  });
};

const openCartControl = (elemList) => {
  cartOpenBtn.addEventListener('click', () => {
    toggleCart(cart);
  });
};

export const cartControl = () => {
  openCartControl();
  closeCartControl();
};


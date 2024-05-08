import {
  headerIsScrolled, fixHeaderOnTop, returnHeaderNormalPosition, toggleChoiceBox,
  adjustElementPositon, hideChoiceBox,
} from './service.js';

import {allChoicesBtns, allChoicesBoxes} from './getElements.js';

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
  const btnsAmount = allChoicesBtns.length;
  allChoicesBtns.forEach(btn => {
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


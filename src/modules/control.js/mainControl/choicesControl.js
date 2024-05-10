import {
  toggleChoiceBox, adjustElementPositon, hideChoiceBox,
} from '../../service.js';

import {allChoicesBtns, allChoicesBoxes} from '../../getElements.js';

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

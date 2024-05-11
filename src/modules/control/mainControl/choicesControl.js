import {
  toggleChoiceBox, adjustElementPositon, hideChoiceBox, isClickOnElem,
  isChoiseBoxShown,
} from '../../util';
import {allChoicesBtns, allChoicesBoxes, typeChoices} from '../../getElements';
import {store} from '../../Store';
import {renderCategories} from '../../render/renderCategories.js';

export const choicesControl = () => {
  allChoicesBtns.forEach(btn => {
    const btnsAmount = allChoicesBtns.length;

    btn.addEventListener('click', e => {
      for (let i = 0; i < btnsAmount; i++) {
        const hideNotClickedChoiceBox = ({target}) => {
          if (!isClickOnElem(target, '.choices')) {
            hideChoiceBox(allChoicesBoxes[i]);
          }
        };

        if (allChoicesBtns[i] === e.target) {
          toggleChoiceBox(allChoicesBoxes[i]);

          if (isChoiseBoxShown(allChoicesBoxes[i])) {
            adjustElementPositon(allChoicesBoxes[i]);
            document.addEventListener('click', hideNotClickedChoiceBox);
          } else {
            document.removeEventListener('click', hideNotClickedChoiceBox);
          }
        } else {
          hideChoiceBox(allChoicesBoxes[i]);
        }
      }
    });
  });
};

export const controlTypeChoicesVisibility = () => {
  const category = store.getCategories();

  if (category.size) {
    typeChoices.style.display = '';
    renderCategories();
  } else {
    typeChoices.style.display = 'none';
  }
};


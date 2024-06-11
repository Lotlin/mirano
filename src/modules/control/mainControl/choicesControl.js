import {
  toggleChoiceBox, adjustElementPosition, hideChoiceBox, isChoiseBoxShown,
  isClickOnThisChoicesBox, choiceBtnRotateArrowBg,
  choiceBtnReturnToNormalPosArrowBg, debounce,
} from '@/modules/util';
import {
  allChoicesBtns, allChoicesBoxes, typeChoices, allChoicesButtons,
} from '@/modules/getElements';
import {productStore} from '@/modules/components/Store';
import {renderCategories} from '@/modules/render/renderCategories';

const choiceActivate = (choiceBox, choiceBtn) => {
  adjustElementPosition(choiceBox);
  choiceBtnRotateArrowBg(choiceBtn);
};

const choiceDeactivate = (choiceBox, choiceBtn) => {
  hideChoiceBox(choiceBox);
  choiceBtnReturnToNormalPosArrowBg(choiceBtn);
};

export const choicesControl = () => {
  allChoicesBtns.forEach(btn => {
    const btnsAmount = allChoicesBtns.length;

    btn.addEventListener('click', e => {
      for (let i = 0; i < btnsAmount; i++) {
        const hideNotClickedChoicesBox = ({target}) => {
          if (!isClickOnThisChoicesBox(target)) {
            choiceDeactivate(allChoicesBoxes[i], allChoicesButtons[i]);
          }
        };

        if (allChoicesBtns[i] === e.target) {
          toggleChoiceBox(allChoicesBoxes[i]);

          if (isChoiseBoxShown(allChoicesBoxes[i])) {
            choiceActivate(allChoicesBoxes[i], allChoicesButtons[i]);
            document.addEventListener('click', hideNotClickedChoicesBox);
          } else {
            choiceBtnReturnToNormalPosArrowBg(allChoicesButtons[i]);
            document.removeEventListener('click', hideNotClickedChoicesBox);
          }
        } else {
          choiceDeactivate(allChoicesBoxes[i], allChoicesButtons[i]);
        }

        window.addEventListener('resize', debounce(() => {
          adjustElementPosition(allChoicesBoxes[i]);
        }));

        productStore.subscribe(() => adjustElementPosition(allChoicesBoxes[i]));
      }
    });
  });
};

export const controlTypeChoicesVisibility = () => {
  const category = productStore.getCategories();

  if (category.size) {
    typeChoices.style.display = '';
    renderCategories();
  } else {
    typeChoices.style.display = 'none';
  }
};


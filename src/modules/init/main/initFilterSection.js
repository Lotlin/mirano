import {store} from '../../Store.js';
import {
  choicesControl, controlTypeChoicesVisibility,
} from '../../control/mainControl/choicesControl.js';
import {filterProducts} from '../../service/filterProducts.js';


const initChoices = () => {
  choicesControl();

  store.subscribe(controlTypeChoicesVisibility);

  controlTypeChoicesVisibility();
};

export const initFilterSection = () => {
  initChoices();
  filterProducts();
};

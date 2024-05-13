import {productStore} from '@/modules/components/Store';
import {
  choicesControl, controlTypeChoicesVisibility,
} from '@/modules/control/mainControl/choicesControl';
import {filterProducts} from '@/modules/service/filterProducts';


const initChoices = () => {
  choicesControl();

  productStore.subscribe(controlTypeChoicesVisibility);

  controlTypeChoicesVisibility();
};

export const initFilterSection = () => {
  initChoices();
  filterProducts();
};

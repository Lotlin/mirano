import {store} from '../Store';
import {
  choicesControl, controlTypeChoicesVisibility,
} from '../control/mainControl/choicesControl';


export const initChioces = () => {
  choicesControl();

  store.subscribe(controlTypeChoicesVisibility);
  controlTypeChoicesVisibility();
};

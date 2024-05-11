import {store} from '../Store';
import {
  choicesControl, controlTypeChoicesVisibility,
} from '../control/mainControl/choicesControl';


export const initChoices = () => {
  choicesControl();

  store.subscribe(controlTypeChoicesVisibility);
  controlTypeChoicesVisibility();
};

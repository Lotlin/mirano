import {headerControl} from './headerControl.js';
import {choicesControl} from './mainControl/choicesControl.js';
import {cartControl} from './cartControl.js';

export const initControl = () => {
  headerControl();
  choicesControl();
  cartControl();
};

import {headerControl} from './headerControl';
import {choicesControl} from './mainControl/choicesControl';
import {cartControl} from './cartControl';

export const initControl = () => {
  headerControl();
  choicesControl();
  cartControl();
};

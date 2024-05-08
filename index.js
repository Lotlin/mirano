import '@/scss/index.scss';
import {headerControl, choicesControl, cartControl} from './src/js/conrol.js';

const init = () => {
  headerControl();
  choicesControl();
  cartControl();
};


init();


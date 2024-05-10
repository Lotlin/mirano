import '@/scss/index.scss';
import {initControl} from '@/modules/control.js/initControl';
import {renderProducts} from '@/modules/control.js/render';

const init = () => {
  initControl();
  renderProducts('bouquets');
};

init();

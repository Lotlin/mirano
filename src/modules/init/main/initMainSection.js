import {renderProducts} from '../../render/renderProducts.js';
import {initFilterSection} from './initFilterSection.js';

export const initMainSection = () => {
  renderProducts();
  initFilterSection();
};

import {renderProducts} from '@/modules/render/renderProducts';
import {initFilterSection} from '@/modules/init/main/initFilterSection';

export const initMainSection = () => {
  renderProducts();
  initFilterSection();
};

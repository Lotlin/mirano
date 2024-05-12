import {renderPreload} from '@/modules/render/renderPreload';
import {removeElem} from '@/modules/util';

export const callbackWithPreload = async (elem, cb, ...params) => {
  const preload = renderPreload(elem, 'show');

  try {
    const result = await cb(...params);

    return result;
  } finally {
    removeElem(preload);
  }
};

import * as actionTypes from './actionTypes';
import { Touch3Object } from '../../../schema/touch-thr3e';

/**
 * 追加
 * @param data 
 */
export const append = (data: Touch3Object) => {
  
  return ({
    type: actionTypes.APPEND_OBJECT,
    payload: {
      data,
    },
  })
};

/**
 * 更新
 * @param data 
 */
export const update = (data: Touch3Object) => {
  
  return ({
    type: actionTypes.UPDATE_OBJECT,
    payload: {
      data,
    },
  })
};

/**
 * 削除
 * @param id 
 */
export const remove = (id) => {

  return ({
    type: actionTypes.REMOVE_OBJECT,
    payload: {
      id,
    },
  });
};

import * as actionTypes from '../actions/actionTypes';
import { addItem, removeItem } from '../utils/arrayRedux';

/**
 * 初期state
 */
const initialModalState = {
  objects: [],
};


/**
 * Objectsを管理するreducer
 * @param state 
 * @param action 
 */
const objectHandler = (state = initialModalState, action) => {
  switch (action.type) {
    // 新しくObjectを追加
    case actionTypes.APPEND_OBJECT:
 
      return {
        ...state,
        objects: addItem(state.objects, action.payload),
      };

    // Object更新
    case actionTypes.UPDATE_OBJECT:
      return {
        ...state,

      };

    // Object削除
    case actionTypes.REMOVE_OBJECT:
      return {
        ...state,
        objects: removeItem(state.objects, action.payload),
      };

    default:
      return state;
  }
};

export default objectHandler;

import * as actionTypes from '../actions/actionTypes';

/**
 * 初期State
 */
const initialSrcState = {
  src: '',
};

/**
 * three.jsをrenderするコードの管理
 * @param state 
 * @param action 
 */
const srcHandler = (state = initialSrcState, action) => {
  switch (action.type) {
    // 変更済みソースコードをset
    case actionTypes.SET_SRC:
      return {
        ...state,
        src: action.payload.src,
      };

    default:
      return state;
  }
};

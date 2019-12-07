import * as actionTypes from '../actions/actionTypes';
// import * as modalTypes from '../utils/modalTypes';

/**
 * 初期state
 */
const initialModalState = {
  modalOpenFlag: false,
  modalType: '',
};

/**
 * モーダルの状態を管理するreducer
 * @param state 
 * @param action 
 */
const modalHandler = (state = initialModalState, action) => {
  switch (action.type) {
    // タイプを指定して、モーダルを開く
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        modalOpenFlag: true,
      };

    // モーダルを閉じる
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalOpenFlag: false,
      };

    default:
      return state;
  }
};

export default modalHandler;
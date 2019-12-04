import * as actionTypes from '../utils/actionTypes';
import * as modalTypes from '../utils/modalTypes';

const initialModalState = {
  openFlag: false,
  modalType: '',
};

const modalHandler = (state = initialModalState, action) => {
  // タイプを指定して、モーダルを開く
  if (action.type === actionTypes.OPEN_MODAL) {
    return {
      ...state,
      openFlag: true,
    };
  }
  // モーダルを閉じる
  else if (action.type === actionTypes.CLOSE_MODAL) {
    return {
      ...state,
      openFlag: false,
    };
  }
  // ...
  else {
    return state;
  }
};

export default modalHandler;
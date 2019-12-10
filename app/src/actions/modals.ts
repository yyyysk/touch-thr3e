import * as actionTypes from './actionTypes';

/**
 * モーダルを開くアクション
 */
export const openModal = (modalType) => {

  return ({
    type: actionTypes.OPEN_MODAL,
    payload: {
      modalType
    },
  })
};

/**
 * モーダルを閉じるアクション
 */
export const closeModal = () => {

  return ({
    type: actionTypes.CLOSE_MODAL,
  })
};
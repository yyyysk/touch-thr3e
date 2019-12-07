import * as actionTypes from './actionTypes';

/**
 * モーダルを開くアクション
 */
export const openModal = (modalOpenFlag, modalType) => {
  return ({
    type: actionTypes.OPEN_MODAL,
    payload: {
      modalOpenFlag,
      modalType
    },
  })
};

/**
 * モーダルを閉じるアクション
 */
export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL,
});
import * as actionTypes from '../utils/actionTypes';

/**
 * モーダルを開くアクション
 */
export const openModal = () => { type: actionTypes.OPEN_MODAL };

/**
 * モーダルを閉じるアクション
 */
export const closeModal = () => { type: actionTypes.CLOSE_MODAL };
import { combineReducers } from 'redux';
import modalHandler from './modalHandler';

const reducer = combineReducers({
  modalHandler,
});
// const reducer = modalHandler;

export default reducer;
import { combineReducers } from 'redux';
import modalHandler from './modalHandler';
import srcHandler from './srcHandler';

const reducer = combineReducers({
  modalHandler,
  srcHandler,
});

export default reducer;
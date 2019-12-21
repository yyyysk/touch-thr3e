import { combineReducers } from 'redux';
import modalHandler from './modalHandler';
import srcHandler from './srcHandler';
import objectHandler from './objectHandler';

const reducer = combineReducers({
  modalHandler,
  srcHandler,
  objectHandler,
});

export default reducer;

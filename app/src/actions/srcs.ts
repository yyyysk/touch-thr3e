import * as actionTypes from './actionTypes';

export const setSrc = (src) => {

  return ({
    type: actionTypes.SET_SRC,
    payload: {
      src,
    },
  });
};

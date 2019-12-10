import * as React from 'react';
import {
  ADD_OBJECT,
  EDIT_OBJECT,
  ADD_LIGHT,
  EDIT_LIGHT,
  ADD_CAMERA,
  EDIT_CAMERA
} from '../../utils/modalTypes';

import ObjectEditor from '../ObjectEditor';

const Modal = ({ modalType, closeModal }) => {

  let editorElm;
  switch(modalType) {
    case ADD_OBJECT || EDIT_OBJECT: 
      editorElm = <ObjectEditor />;
      break;
  }

  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="modalContent">
          <div>
            <div className="modalContent__title">{ modalType }</div>
            <div className="modalContent__close" onClick={() => closeModal()}>
              <a>close</a>
            </div>
          </div>
          { editorElm }
        </div>
      </div>
      <div className="modalOverlay"></div>
    </div>
  );
};

export default Modal;

import * as React from 'react';

type modalProps = {
  // displayFlag: boolean;
};

const Modal: React.FC<modalProps> = (props: modalProps) => {
  // if (!props.displayFlag) return;

  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="modalContent">

        </div>
      </div>
      <div className="modalOverlay"></div>
    </div>
  );
};

export default Modal;

import * as React from 'react';

type CancelButtonProps = {
  onClick: () => void;
  label: string;
};

const CancelButton: React.FC<CancelButtonProps> = (props) => {
  return(
    <a className="cancelButton" onClick={props.onClick}>
      {props.label}
    </a>
  );
};

export default CancelButton;
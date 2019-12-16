import * as React from 'react';

type primaryButtonProps = {
  label: string;
  onClick: () => void;
};

const PrimaryButton: React.FC<primaryButtonProps> = (props) => {
  return(
    <a className="primaryButton" onClick={props.onClick}>
      {props.label}
    </a>
  );
};

export default PrimaryButton;

import * as React from 'react';

type Props = {
  label: string;
  type: string;
};

const XyzInput: React.FC<Props> = (props) => {

  const xId = props.type + 'x';
  const yId = props.type + 'y';
  const zId = props.type + 'z';

  return(
    <div className="xyz-input">
      <div className="xyz-input__label--head">
        { props.label }
      </div>
      <div className="xyz-inputWrapper">
        <div>
          <label className="xyz-input__label" htmlFor={xId}>x: </label>
          <input id={xId} type="number" />
        </div>

        <div>
          <label className="xyz-input__label" htmlFor={yId}>y: </label>
          <input id={yId} type="number" />
        </div>

        <div>
          <label className="xyz-input__label" htmlFor={zId}>z: </label>
          <input id={zId} type="number" />
        </div>
      </div>
    </div>
  );
};

export default XyzInput;
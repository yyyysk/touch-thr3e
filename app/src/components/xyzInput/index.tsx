import * as React from 'react';

type Props = {
  label: string;
  type: string;
  xValue: number;
  yValue: number;
  zValue: number;
  onChange: (e, key, type) => void;
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
          <input id={xId} onChange={(e) => props.onChange(e, 'x', props.type)} type="number" value={props.xValue} />
        </div>
        <div>
          <label className="xyz-input__label" htmlFor={yId}>y: </label>
          <input id={yId} onChange={(e) => props.onChange(e, 'y', props.type)} type="number" value={props.yValue} />
        </div>
        <div>
          <label className="xyz-input__label" htmlFor={zId}>z: </label>
          <input id={zId} onChange={(e) => props.onChange(e, 'z', props.type)} type="number" value={props.zValue} />
        </div>
      </div>
    </div>
  );
};

export default XyzInput;
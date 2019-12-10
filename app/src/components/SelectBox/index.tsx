import * as React from 'react';

type Props = {
  label: string;
  options: string[];
};

/**
 * 
 * @param label title
 * @param options values
 */
const SelectBox: React.FC<Props> = (props) => {

  const opeionElms = props.options.map((opt, i) => (
    <option key={i} value={opt}>{opt}</option>
  ));

  return(
    <div className="selectbox-wrapper">
      <div className="selectbox-title">{ props.label }</div>
      <div className="selectbox">
        <select>
          <option value="" hidden>Choose</option>
          { opeionElms }
        </select>
      </div>
    </div>
  );
};

export default SelectBox;

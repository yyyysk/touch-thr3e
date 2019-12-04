import * as React from 'react';

interface linkProps {
  label: string;
  onClick: () => void;
};

const Link: React.FC<linkProps> = (props: linkProps) => {
  console.log(props)
  return(
  <div className="header__content__link">
    <a onClick={ props.onClick }>{props.label}</a>
  </div>);
};

export default Link;
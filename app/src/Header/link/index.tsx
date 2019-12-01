import * as React from 'react';

interface linkProps {
  label: string;
};

const Link: React.FC<linkProps> = (prop: linkProps) => (
  <div className="header__content__link">
    <a>{prop.label}</a>
  </div>
);

export default Link;
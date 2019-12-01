import * as React from 'react';

type ShowcaseProps = {
  type: string;
}

const Showcase: React.FC<ShowcaseProps> = (props: ShowcaseProps) => (
  <div className="showcase">
    <div className="showcase__title">{props.type}</div>
    <div className="showcase__box"></div>
  </div>
);

export default Showcase;

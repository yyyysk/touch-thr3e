import * as React from 'react';
import ShowcaseIcon from '../ShowcaseIcon';

type ShowcaseProps = {
  type: string;
}

const Showcase: React.FC<ShowcaseProps> = (props: ShowcaseProps) => {

  let iconName;
  switch (props.type) {
    case 'Objects': iconName = 'object-icon'; break;
    case 'Lights' : iconName = 'light-icon';  break;
    case 'Cameras': iconName = 'camera-icon'; break;
  }

  return (
    <div className="showcase">
      <div className="showcase__title">{props.type}</div>
      <div className="showcase__box">
        <ShowcaseIcon imgName={iconName} />
      </div>
    </div>
  );
};

export default Showcase;

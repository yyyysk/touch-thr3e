import * as React from 'react';

type ShowcaseIconProps = {
  imgName: string;
}

const ShowcaseIcon: React.FC<ShowcaseIconProps> = (props: ShowcaseIconProps) => (
  <img className="showcase__icon" src={`/assets/images/${props.imgName}.png`} />
);

export default ShowcaseIcon;

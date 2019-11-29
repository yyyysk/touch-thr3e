import * as React from 'react';
import { string } from 'prop-types';

interface linkProps {
  label: string;
  href: string;
};

const Link: React.FC<linkProps> = (prop: linkProps) => (
  <li>
    <a href={prop.href}>{prop.label}</a>
  </li>
);

export default Link;
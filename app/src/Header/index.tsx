import * as React from 'react';
import HeaderLogo from './logo';
import HeaderLink from './link';
import HeaderIcon from './icon';

const Header: React.FC = () => (
  <div className="header">
    <HeaderLogo />
    <div className="header__content">
      <HeaderLink label="Add object" />
      <HeaderLink label="Add light" />
      <HeaderLink label="Add camera" />
    </div>
    <HeaderIcon />
  </div>
);

export default Header;
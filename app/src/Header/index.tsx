import * as React from 'react';
import HeaderLogo from './logo';
import HeaderLink from './link';

const Header: React.FC = () => (
  <div className="header">
    <HeaderLogo />
    <div className="header__content">
      <HeaderLink label="Add object" />
      <HeaderLink label="Add light" />
      <HeaderLink label="Add camera" />
    </div>
  </div>
);

export default Header;
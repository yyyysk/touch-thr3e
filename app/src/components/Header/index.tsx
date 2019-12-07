import * as React from 'react';

import HeaderLogo from './logo';
import HeaderLink from './link';
import HeaderIcon from './icon';

const Header = ({ modalOpenFlag, modalType, openModal}) => {
  return(
    <div className="header">
      <HeaderLogo />
      <div className="header__content">
        <HeaderLink label="Add object" onClick={ openModal } />
        <HeaderLink label="Add light"  onClick={ openModal } />
        <HeaderLink label="Add camera" onClick={ openModal } />
      </div>
      <HeaderIcon />
    </div>
  );
};

export default Header;
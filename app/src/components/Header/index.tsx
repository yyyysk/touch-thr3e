import * as React from 'react';

import { 
  ADD_OBJECT,
  ADD_LIGHT,
  ADD_CAMERA
} from '../../utils/modalTypes';
import HeaderLogo from './logo';
import HeaderLink from './link';
import HeaderIcon from './icon';


const Header = ({ openModal }) => {
  
  return(
    <div className="header">
      <HeaderLogo />
      <div className="header__content">
        <HeaderLink label="Add object" onClick={ () => openModal(ADD_OBJECT) } />
        <HeaderLink label="Add light"  onClick={ () => openModal(ADD_LIGHT) } />
        <HeaderLink label="Add camera" onClick={ () => openModal(ADD_CAMERA) } />
      </div>
      <div className="margin--300"></div>
      <HeaderIcon />
    </div>
  );
};

export default Header;
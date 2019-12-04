import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import HeaderLogo from './logo';
import HeaderLink from './link';
import HeaderIcon from './icon';

interface OwnProps {
  modalHandler: any;
  actions: any;
}

class Header extends React.Component<OwnProps> {
  render() {    
    const { modalHandler, actions } = this.props;

    return(
      <div className="header">
        <HeaderLogo />
        <div className="header__content">
          <HeaderLink label="Add object" onClick={ actions.openModal } />
          <HeaderLink label="Add light"  onClick={ actions.openModal } />
          <HeaderLink label="Add camera" onClick={ actions.openModal } />
        </div>
        <HeaderIcon />
      </div>
    );
  }
}


const mapState = (state, ownProps) => ({
  modalHandler: state.modalHandler,
});

const mapDispatch = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapState, mapDispatch)(Header);
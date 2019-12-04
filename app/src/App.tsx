import * as React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Sidebar from './Sidebar';
import Screen from './Screen';
import Modal from './components/Modal';

// interface OwnProps {
//   modalHandler: any;
//   actions: any;
// }

// type props = OwnProps;

class App extends React.Component {
  render() {

    // const modalHandler = this.props.modalHandler;

    return(
      <div className="wrapper">
        <Header />
        <div className="contentWrapper">
          <Sidebar />
          <Screen />
          {/* {modalHandler.openFlag? <Modal /> : <div></div>} */}
        </div>
      </div>
    );
  }
}

// const App: React.FC = () => (
//   <div className="wrapper">
//     <Header />
//     <div className="contentWrapper">
//       <Sidebar />
//       <Screen />
//       {/* <Modal displayFlag={true} /> */}
//     </div>
//   </div>
// );

// const mapState = (state, ownProps) => ({
//   modalHandler: state.modalHandler,
// });

// export default connect(mapState, {})(App);

export default App;

import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Screen from './Screen';
import Modal from './components/Modal';

const App: React.FC = () => (
  <div className="wrapper">
    <Header />
    <div className="contentWrapper">
      <Sidebar />
      <Screen />
      {/* <Modal displayFlag={true} /> */}
    </div>
  </div>
);

export default App;
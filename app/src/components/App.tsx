import * as React from 'react';

import Header from '../containers/Header';
import Sidebar from './Sidebar';
import Screen from './Screen';
import Modal from './Modal';



const App: React.FC = () => (
  <div className="wrapper">
    <Header />
    <div className="contentWrapper">
      <Sidebar />
      <Screen />
    </div>
  </div>
);


export default App;

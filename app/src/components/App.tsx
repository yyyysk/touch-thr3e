import * as React from 'react';

import Header from '../containers/Header';
import Modal from '../containers/Modal';
import Screen from '../containers/Screen';

import Sidebar from './Sidebar';

const App = ({ modalOpenFlag }) => {
  
  // Modal表示
  const ModalElm = modalOpenFlag? <Modal /> : <></>;

  return(
    <>
      <Header />
      <Sidebar />
      <Screen />
      { ModalElm }
    </>
  );
};


export default App;

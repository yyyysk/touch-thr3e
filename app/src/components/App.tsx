import * as React from 'react';

import Header from '../containers/Header';
import Sidebar from './Sidebar';
import Screen from './Screen';
import Modal from './Modal';



const App: React.FC = () => (
  <>
    <Header />
    <Sidebar />
    <Screen />
  </>
);


export default App;

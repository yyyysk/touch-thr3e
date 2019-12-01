import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Screen from './Screen';

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
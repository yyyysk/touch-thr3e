import * as React from 'react';
import Showcase from './Showcase';

const Sidebar: React.FC = () => (
  <div className="sidebar">
    <Showcase type="Objects" />
    <Showcase type="Lights" />
    <Showcase type="Cameras" />
  </div>
);

export default Sidebar;

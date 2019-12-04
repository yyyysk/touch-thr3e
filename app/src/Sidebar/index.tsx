import * as React from 'react';
import Showcase from './Showcase';
import DownloadLink from './DownloadLink';

const Sidebar: React.FC = () => (
  <div className="sidebar">
    <Showcase type="Objects" />
    <Showcase type="Lights" />
    <Showcase type="Cameras" />
    <DownloadLink />
  </div>
);

export default Sidebar;

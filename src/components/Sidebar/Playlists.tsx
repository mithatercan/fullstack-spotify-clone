import React from 'react';
import { playlists } from './menus';
import MenuList from './MenuList';
const Playlists = () => {
  return <MenuList menu={playlists} />;
};

export default Playlists;

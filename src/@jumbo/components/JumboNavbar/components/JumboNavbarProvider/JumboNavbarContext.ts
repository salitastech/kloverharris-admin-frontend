'use client';
import { NavbarContext } from '@jumbo/types';
import { createTheme } from '@mui/material';
import React from 'react';

const defaultNavbarContext: NavbarContext = {
  items: [],
  groupBehaviour: 'collapsible',
  mini: false,
  open: true,
  miniAndClosed: false,
  //TODO: need to provide a default values to the theme
  theme: createTheme(),
};

const JumboNavbarContext = React.createContext(defaultNavbarContext);

export { JumboNavbarContext };

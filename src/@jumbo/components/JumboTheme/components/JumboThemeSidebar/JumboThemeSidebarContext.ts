'use client';
import { JumboThemeSidebarContextType } from '@jumbo/types';
import { createTheme } from '@mui/material';
import React from 'react';

const defaultContextValue: JumboThemeSidebarContextType = {
  sidebarTheme: createTheme({}),
  setSidebarTheme: () => null,
};

const JumboThemeSidebarContext = React.createContext(defaultContextValue);

export { JumboThemeSidebarContext };

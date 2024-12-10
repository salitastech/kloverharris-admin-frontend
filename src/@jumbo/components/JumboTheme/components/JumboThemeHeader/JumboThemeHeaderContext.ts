'use client';
import { JumboThemeHeaderContextType } from '@jumbo/types';
import { createTheme } from '@mui/material';
import React from 'react';

const defaultContextValue: JumboThemeHeaderContextType = {
  headerTheme: createTheme({}),
  setHeaderTheme: () => null,
};

const JumboThemeHeaderContext = React.createContext(defaultContextValue);

export { JumboThemeHeaderContext };

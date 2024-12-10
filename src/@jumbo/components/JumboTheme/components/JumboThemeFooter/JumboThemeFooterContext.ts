'use client';
import { JumboThemeFooterContextType } from '@jumbo/types';
import { createTheme } from '@mui/material';
import React from 'react';

const defaultContextValue: JumboThemeFooterContextType = {
  footerTheme: createTheme({}),
  setFooterTheme: () => null,
};

const JumboThemeFooterContext = React.createContext(defaultContextValue);

export { JumboThemeFooterContext };

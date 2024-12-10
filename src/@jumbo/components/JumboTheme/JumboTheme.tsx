'use client';
import { Theme, ThemeOptions, ThemeProvider, createTheme } from '@mui/material';
import { enUS } from '@mui/material/locale';
import React from 'react';

import { JumboThemeConfig, JumboThemeContextType } from '@jumbo/types';

import {
  JumboThemeFooter,
  JumboThemeHeader,
  JumboThemeSidebar,
} from './components';

import { JumboThemeContext } from './JumboThemeContext';

declare module '@mui/material/styles' {
  interface Theme {
    type: 'light' | 'semi-dark' | 'dark';
    sidebar: {
      bgimage: string;
      overlay: {
        bgcolor: string;
        bgimage: string;
        opacity: number;
      };
    };
    jumboComponents: {
      JumboNavbar: {
        nav: {
          action: {
            active: string;
            hover: string;
          };
          background: {
            active: string;
            hover: string;
          };
          tick: {
            active: string;
            hover: string;
          };
        };
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    type?: 'light' | 'semi-dark' | 'dark';
    sidebar?: {
      bgimage?: string;
      overlay?: {
        bgcolor?: string;
        bgimage?: string;
        opacity?: number;
      };
    };
    jumboComponents?: {
      JumboNavbar?: {
        nav?: {
          action?: {
            active?: string;
            hover?: string;
          };
          background?: {
            active?: string;
            hover?: string;
          };
          tick?: {
            active?: string;
            hover?: string;
          };
        };
      };
    };
  }
}

function JumboTheme({
  children,
  init,
}: {
  children: React.ReactNode;
  init: JumboThemeConfig;
}) {
  const [theme, setTheme] = React.useState<Theme>(createTheme(init.main));
  const [muiLocale, setMuiLocale] = React.useState(enUS);

  const updateTheme = React.useCallback(
    (options: ThemeOptions) => {
      setTheme(createTheme({ ...theme, ...options }, muiLocale));
    },
    [theme, muiLocale]
  );

  const themeContextValue: JumboThemeContextType = React.useMemo(
    () => ({
      theme,
      muiLocale,
      setTheme: updateTheme,
      setMuiLocale,
    }),
    [theme, muiLocale, updateTheme]
  );
  return (
    <JumboThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={theme}>
        <JumboThemeHeader init={init.header}>
          <JumboThemeSidebar init={init.sidebar}>
            <JumboThemeFooter init={init.footer}>{children}</JumboThemeFooter>
          </JumboThemeSidebar>
        </JumboThemeHeader>
      </ThemeProvider>
    </JumboThemeContext.Provider>
  );
}

export { JumboTheme };

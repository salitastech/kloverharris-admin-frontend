import { Theme, ThemeOptions } from '@mui/material';
import { Localization } from '@mui/material/locale';
import React from 'react';

interface JumboThemeContextType {
  theme: Theme;
  setTheme: (options: ThemeOptions) => void;
  muiLocale?: Localization;
  setMuiLocale?: React.Dispatch<React.SetStateAction<Localization>>;
}

interface JumboThemeHeaderContextType {
  headerTheme: Theme;
  setHeaderTheme: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

interface JumboThemeFooterContextType {
  footerTheme: Theme;
  setFooterTheme: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

interface JumboThemeSidebarContextType {
  sidebarTheme: Theme;
  setSidebarTheme: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

export {
  type JumboThemeContextType,
  type JumboThemeFooterContextType,
  type JumboThemeHeaderContextType,
  type JumboThemeSidebarContextType,
};

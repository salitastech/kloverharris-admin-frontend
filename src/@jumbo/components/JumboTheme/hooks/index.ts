'use client';
import React from 'react';
import { JumboThemeContext } from '../JumboThemeContext';
import {
  JumboThemeFooterContext,
  JumboThemeHeaderContext,
  JumboThemeSidebarContext,
} from '../components';

function useJumboHeaderTheme() {
  return React.useContext(JumboThemeHeaderContext);
}

function useJumboFooterTheme() {
  return React.useContext(JumboThemeFooterContext);
}

function useJumboSidebarTheme() {
  return React.useContext(JumboThemeSidebarContext);
}

function useJumboTheme() {
  return React.useContext(JumboThemeContext);
}

export {
  useJumboFooterTheme,
  useJumboHeaderTheme,
  useJumboSidebarTheme,
  useJumboTheme,
};

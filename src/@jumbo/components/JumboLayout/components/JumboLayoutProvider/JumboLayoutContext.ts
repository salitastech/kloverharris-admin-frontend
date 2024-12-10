'use client';
import { LayoutContext, LayoutOptions } from '@jumbo/types';
import {
  SIDEBAR_ANCHOR_POSITIONS,
  SIDEBAR_SCROLL_TYPES,
  SIDEBAR_STYLES,
  SIDEBAR_VARIANTS,
  SIDEBAR_VIEWS,
} from '@jumbo/utilities/constants';
import React from 'react';

const defaultLayoutOptions: LayoutOptions = {
  header: {
    hide: false,
    fixed: true,
    plain: false,
  },
  sidebar: {
    open: true,
    hide: false,
    width: 240,
    minWidth: 80,
    variant: SIDEBAR_VARIANTS.PERSISTENT,
    anchor: SIDEBAR_ANCHOR_POSITIONS.LEFT,
    scrollType: SIDEBAR_SCROLL_TYPES.FIXED,
    style: SIDEBAR_STYLES.FULL_HEIGHT,
    view: SIDEBAR_VIEWS.FULL,
    drawer: true,
    plain: false,
  },
  footer: {
    hide: false,
  },
  root: {},
  content: {},
  wrapper: {},
  main: {},
};

const defaultLayoutContext: LayoutContext = {
  layoutOptions: defaultLayoutOptions,
  headerOptions: defaultLayoutOptions.header,
  sidebarOptions: defaultLayoutOptions.sidebar,
  footerOptions: defaultLayoutOptions.footer,
  rootOptions: defaultLayoutOptions.root,
  contentOptions: defaultLayoutOptions.content,
  wrapperOptions: defaultLayoutOptions.wrapper,
  mainOptions: defaultLayoutOptions.main,
  setMainOptions: () => {},
  setSidebarOptions: () => {},
  setRootOptions: () => {},
  setContentOptions: () => {},
  setFooterOptions: () => {},
  setOptions: () => {},
  setHeaderOptions: () => {},
  setWrapperOptions: () => {},
};
const JumboLayoutContext =
  React.createContext<LayoutContext>(defaultLayoutContext);

export { JumboLayoutContext, defaultLayoutContext, defaultLayoutOptions };

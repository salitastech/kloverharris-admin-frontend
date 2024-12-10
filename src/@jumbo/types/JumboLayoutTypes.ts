import {
  LAYOUT_CONTAINER_STYLES,
  LAYOUT_DENSITIES,
  POSITION_TYPES,
  SIDEBAR_ANCHOR_POSITIONS,
  SIDEBAR_SCROLL_TYPES,
  SIDEBAR_STYLES,
  SIDEBAR_VARIANTS,
  SIDEBAR_VIEWS,
} from '@jumbo/utilities/constants';
import { Breakpoint, SxProps, Theme } from '@mui/material';
import { ElementType } from 'react';

type SidebarVariantKeys = keyof typeof SIDEBAR_VARIANTS;
type SidebarVariantsType = (typeof SIDEBAR_VARIANTS)[SidebarVariantKeys];

type SidebarStyleKeys = keyof typeof SIDEBAR_STYLES;
type SidebarStylesType = (typeof SIDEBAR_STYLES)[SidebarStyleKeys];

type SidebarScrollTypeKeys = keyof typeof SIDEBAR_SCROLL_TYPES;
type SidebarScrollTypesType =
  (typeof SIDEBAR_SCROLL_TYPES)[SidebarScrollTypeKeys];

type SidebarAnchorPositionKeys = keyof typeof SIDEBAR_ANCHOR_POSITIONS;
type SidebarAnchorPositionsType =
  (typeof SIDEBAR_ANCHOR_POSITIONS)[SidebarAnchorPositionKeys];

type LayoutDensityKeys = keyof typeof LAYOUT_DENSITIES;
type LayoutDensitiesType = (typeof LAYOUT_DENSITIES)[LayoutDensityKeys];

type LayoutContainerStyleKeys = keyof typeof LAYOUT_CONTAINER_STYLES;
type LayoutContainerStylesType =
  (typeof LAYOUT_CONTAINER_STYLES)[LayoutContainerStyleKeys];

type PositionTypeKeys = keyof typeof POSITION_TYPES;
type PositionTypesType = (typeof POSITION_TYPES)[PositionTypeKeys];

type SidebarViewKeys = keyof typeof SIDEBAR_VIEWS;
type SidebarViewsType = (typeof SIDEBAR_VIEWS)[SidebarViewKeys];

interface LayoutHeaderOptions {
  hide?: boolean;
  fixed: boolean;
  height?: number;
  plain?: boolean;
  sx?: SxProps<Theme>;
  drawerBreakpoint?: Breakpoint;
}

interface LayoutSidebarOptions {
  open?: boolean;
  hide?: boolean;
  width?: number;
  minWidth?: number;
  variant?: SidebarVariantsType;
  style?: SidebarStylesType;
  scrollType?: SidebarScrollTypesType;
  view?: SidebarViewsType;
  anchor?: SidebarAnchorPositionsType;
  drawerBreakpoint?: Breakpoint;
  drawer?: boolean;
  sx?: SxProps<Theme>;
  plain?: boolean;
}

interface LayoutFooterOptions {
  hide: boolean;
  sx?: SxProps<Theme>;
}

interface LayoutRootOptions {
  sx?: SxProps<Theme>;
}

interface LayoutRightSidebarOptions {
  open?: boolean;
  hide?: boolean;
  width?: number;
  minWidth?: number;
  variant?: SidebarVariantsType;
  style?: SidebarStylesType;
  scrollType?: SidebarScrollTypesType;
  view?: SidebarViewsType;
  anchor?: SidebarAnchorPositionsType;
  drawerBreakpoint?: Breakpoint;
  drawer?: boolean;
  sx?: SxProps<Theme>;
  plain?: boolean;
}

interface LayoutContentOptions {
  container?: boolean;
  sx?: SxProps<Theme>;
}

interface LayoutWrapperOptions {
  component?: ElementType<any, keyof JSX.IntrinsicElements> &
    (ElementType<any, keyof JSX.IntrinsicElements> | undefined);
  container?: boolean;
  containerSx?: SxProps<Theme>;
  sx?: SxProps<Theme>;
}

interface LayoutMainOptions {
  sx?: SxProps<Theme>;
}

interface LayoutOptions {
  header: LayoutHeaderOptions;
  sidebar: LayoutSidebarOptions;
  footer: LayoutFooterOptions;
  root: LayoutRootOptions;
  content: LayoutContentOptions;
  rightSidebar?: LayoutRightSidebarOptions;
  wrapper: LayoutWrapperOptions;
  main: LayoutMainOptions;
}

/**
 * header, sidebar, footer, root and contentOptions
 * are used to avoid putting "as" and
 * an extra step of destructuring
 * from the context value
 */
interface LayoutContext {
  layoutOptions: LayoutOptions;
  headerOptions: LayoutHeaderOptions;
  sidebarOptions: LayoutSidebarOptions;
  rightSidebarOptions?: LayoutRightSidebarOptions;
  footerOptions: LayoutFooterOptions;
  rootOptions: LayoutRootOptions;
  contentOptions: LayoutContentOptions;
  wrapperOptions: LayoutWrapperOptions;
  mainOptions: LayoutMainOptions;
  debugOptions?: any;
  setHeaderOptions: (options: LayoutHeaderOptions) => void;
  setFooterOptions: (options: LayoutFooterOptions) => void;
  setSidebarOptions: (options: LayoutSidebarOptions) => void;
  setRootOptions: (options: LayoutRootOptions) => void;
  setRightSidebarOptions?: (options: LayoutRightSidebarOptions) => void;
  setContentOptions: (options: LayoutContentOptions) => void;
  setWrapperOptions: (options: LayoutWrapperOptions) => void;

  setMainOptions: (options: LayoutMainOptions) => void;
  setOptions: (options: LayoutOptions) => void;
}

interface LayoutProps {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  rightSidebar?: React.ReactNode;
}

export {
  type LayoutContainerStylesType,
  type LayoutContentOptions,
  type LayoutContext,
  type LayoutDensitiesType,
  type LayoutFooterOptions,
  type LayoutHeaderOptions,
  type LayoutMainOptions,
  type LayoutOptions,
  type LayoutProps,
  type LayoutRightSidebarOptions,
  type LayoutRootOptions,
  type LayoutSidebarOptions,
  type LayoutWrapperOptions,
  type PositionTypesType,
  type SidebarAnchorPositionsType,
  type SidebarScrollTypesType,
  type SidebarStylesType,
  type SidebarVariantsType,
  type SidebarViewsType,
};

import { Palette, Theme } from '@mui/material';

export type NavbarContext = {
  items: MenuItems;
  groupBehaviour: 'collapsible' | 'popover';
  mini: boolean;
  open: boolean;
  theme: Theme;
  miniAndClosed: boolean;
};

export type NavbarItem = {
  label: string;
  path: string;
  icon?: string;
  target?: string;
};

export type NavbarGroup = {
  label: string;
  children: (NavbarGroup | NavbarItem)[];
  collapsible?: boolean;
  icon?: string;
};

export type NavbarSection = {
  label: string;
  children?: (NavbarGroup | NavbarItem)[];
};

export type MenuItem = NavbarSection | NavbarGroup | NavbarItem;
export type MenuItems = MenuItem[];

export type NavbarTheme = Theme & {
  palette: Palette & {
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

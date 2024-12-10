import { Palette, Theme } from '@mui/material';

type NavbarContext = {
  items: MenuItems;
  groupBehaviour: 'collapsible' | 'popover';
  mini: boolean;
  open: boolean;
  theme: Theme;
  miniAndClosed: boolean;
};

type NavbarItem = {
  label: string;
  path: string;
  icon?: string;
  target?: string;
};

type NavbarGroup = {
  label: string;
  children: (NavbarGroup | NavbarItem)[];
  collapsible?: boolean;
  icon?: string;
};

type NavbarSection = {
  label: string;
  children: (NavbarGroup | NavbarItem)[];
};

type MenuItem = NavbarSection | NavbarGroup | NavbarItem;
type MenuItems = MenuItem[];

type NavbarTheme = Theme & {
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
export {
  type MenuItem,
  type MenuItems,
  type NavbarContext,
  type NavbarGroup,
  type NavbarItem,
  type NavbarSection,
  type NavbarTheme,
};

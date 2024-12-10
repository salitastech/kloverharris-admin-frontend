import { footerTheme } from '@app/_themes/footer/default';
import { headerTheme } from '@app/_themes/header/default';
import { mainTheme } from '@app/_themes/main/default';
import { sidebarTheme } from '@app/_themes/sidebar/default';
import { JumboThemeConfig } from '@jumbo/types';
import { createJumboTheme } from '@jumbo/utilities/helpers';
import { anonymousPaths, publicPaths } from './routes/path';

type ConfigType = {
  THEME: JumboThemeConfig;
  PUBLIC_ROUTES: string[];
  ANONYMOUS_ROUTES: string[];
  DISABLE_PROTECTED_ROUTE_CHECK: boolean;
};

export const CONFIG: ConfigType = {
  THEME: createJumboTheme(mainTheme, headerTheme, sidebarTheme, footerTheme),
  PUBLIC_ROUTES: publicPaths,
  ANONYMOUS_ROUTES: anonymousPaths,
  DISABLE_PROTECTED_ROUTE_CHECK: false,
};

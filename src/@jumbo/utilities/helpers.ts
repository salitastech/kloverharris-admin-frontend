import {
  JumboThemeConfig,
  NavbarGroup,
  NavbarItem,
  NavbarSection,
} from '@jumbo/types';
import { ThemeOptions } from '@mui/material';
export const createJumboTheme = (
  mainTheme: ThemeOptions,
  headerTheme: ThemeOptions,
  sidebarTheme: ThemeOptions,
  footerTheme: ThemeOptions
) => {
  const theme: JumboThemeConfig = {
    main: mainTheme,
    header: {
      ...mainTheme,
      ...(headerTheme ?? {}),
    },
    sidebar: {
      ...mainTheme,
      ...(sidebarTheme ?? {}),
    },
    footer: {
      ...mainTheme,
      ...(footerTheme ?? {}),
    },
  };
  return theme;
};

function isNavItem(object: any): object is NavbarItem {
  return 'path' in object;
}

function isNavGroup(object: any): object is NavbarGroup {
  return (
    !('path' in object) &&
    'label' in object &&
    'children' in object &&
    'collapsible' in object
  );
}

function isNavSection(object: any): object is NavbarSection {
  return (
    !('path' in object) &&
    !('collapsible' in object) &&
    'label' in object &&
    'children' in object
  );
}

function getNavChildren(item: NavbarGroup | NavbarSection) {
  if (item.children && Array.isArray(item.children)) {
    return item.children;
  }
  return [];
}

const getMarginStyle = (input?: number | string | (number | string)[]) => {
  let margin = {};
  if (!input) return margin;
  if (typeof input === 'number' || typeof input === 'string') {
    margin = typeof input === 'number' ? `${input}px` : input;
    return { top: margin, bottom: margin, left: margin, right: margin };
  } else if (Array.isArray(input)) {
    if (input.length === 1) {
      margin = typeof input[0] === 'number' ? `${input[0]}px` : input[0];
      return { top: margin, bottom: margin, left: margin, right: margin };
    } else if (input.length === 2) {
      const marginX = typeof input[0] === 'number' ? `${input[0]}px` : input[0];
      const marginY = typeof input[1] === 'number' ? `${input[1]}px` : input[1];
      return { top: marginY, bottom: marginY, left: marginX, right: marginX };
    } else if (input.length === 3 || input.length === 4) {
      const marginTop =
        typeof input[0] === 'number' ? `${input[0]}px` : input[0];
      const marginRight =
        typeof input[1] === 'number' ? `${input[1]}px` : input[1];
      const marginBottom =
        typeof input[2] === 'number' ? `${input[2]}px` : input[2];
      if (input.length === 3) {
        return {
          top: marginTop,
          bottom: marginBottom,
          left: 0,
          right: marginRight,
        };
      } else {
        const marginLeft =
          typeof input[3] === 'number' ? `${input[3]}px` : input[3];
        return {
          top: marginTop,
          bottom: marginBottom,
          left: marginLeft,
          right: marginRight,
        };
      }
    }
  }
  return {};
};

function isColorCode(value: string) {
  return (
    typeof value === 'string' &&
    value[0] === '#' &&
    (value.length === 4 || value.length === 7)
  );
}

function isDegree(value: string) {
  const degArray = value.split('deg');
  return degArray.length === 2 && !Number.isNaN(parseInt(degArray[0]));
}

export function getBackgroundColorStyle(colors?: string[]) {
  if (!colors) return {};

  const foundColors: string[] = [];
  let gradientDegree;
  let gradientType = 'linear-gradient';

  colors.forEach((color) => {
    if (isColorCode(color)) {
      foundColors.push(color);
    } else if (isDegree(color)) {
      gradientDegree = color;
    }
  });

  if (foundColors.length <= 0) return {};

  if (foundColors.length === 1)
    return {
      backgroundColor: foundColors[0],
    };

  const gradientValue = gradientDegree
    ? `${gradientDegree}, ${foundColors.toString()}`
    : foundColors.toString();
  return {
    backgroundImage: `${gradientType}(${gradientValue})`,
  };
}

export function getBackgroundImageStyle(src?: string) {
  if (!src) return {};

  return {
    background: `url(${src}) no-repeat center`,
    backgroundSize: 'cover',
  };
}

export { getMarginStyle, getNavChildren, isNavGroup, isNavItem, isNavSection };

import { LayoutOptions } from '@jumbo/types';
import {
  SIDEBAR_ANCHOR_POSITIONS,
  SIDEBAR_SCROLL_TYPES,
  SIDEBAR_STYLES,
  SIDEBAR_VARIANTS,
  SIDEBAR_VIEWS,
} from '@jumbo/utilities/constants';

const clippedUnderHeaderLayoutConfig: LayoutOptions = {
  sidebar: {
    variant: SIDEBAR_VARIANTS.PERSISTENT,
    style: SIDEBAR_STYLES.CLIPPED_UNDER_HEADER,
    view: SIDEBAR_VIEWS.FULL,
    open: true,
    hide: false,
    scrollType: SIDEBAR_SCROLL_TYPES.FIXED,
    anchor: SIDEBAR_ANCHOR_POSITIONS.LEFT,
    width: 240,
    minWidth: 80,
  },
  header: {
    hide: false,
    fixed: true,
    sx: {
      height: 80,
    },
  },
  footer: {
    hide: false,
  },
  root: {},
  content: {
    sx: {
      py: 4,
    },
  },
  wrapper: {},
  main: {},
};

export { clippedUnderHeaderLayoutConfig };

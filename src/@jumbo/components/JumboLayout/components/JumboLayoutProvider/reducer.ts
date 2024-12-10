import {
  LayoutContentOptions,
  LayoutFooterOptions,
  LayoutHeaderOptions,
  LayoutOptions,
  LayoutRootOptions,
  LayoutSidebarOptions,
} from '@jumbo/types';
import { LAYOUT_ACTIONS } from '@jumbo/utilities/constants';

function jumboLayoutReducer(
  state: LayoutOptions,
  action: {
    type: string;
    payload:
      | LayoutOptions
      | LayoutHeaderOptions
      | LayoutFooterOptions
      | LayoutContentOptions
      | LayoutSidebarOptions
      | LayoutRootOptions;
  }
): LayoutOptions {
  switch (action.type) {
    case LAYOUT_ACTIONS.SET_OPTIONS:
      return {
        ...state,
        ...action.payload,
      };
    case LAYOUT_ACTIONS.SET_SIDEBAR_OPTIONS:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          ...action.payload,
        },
      };
    case LAYOUT_ACTIONS.SET_HEADER_OPTIONS:
      return {
        ...state,
        header: {
          ...state.header,
          ...action.payload,
        },
      };
    case LAYOUT_ACTIONS.SET_FOOTER_OPTIONS:
      return {
        ...state,
        footer: {
          ...state.footer,
          ...action.payload,
        },
      };
    case LAYOUT_ACTIONS.SET_CONTENT_OPTIONS:
      return {
        ...state,
        content: {
          ...state.content,
          ...action.payload,
        },
      };
    case LAYOUT_ACTIONS.SET_ROOT_OPTIONS:
      return {
        ...state,
        root: {
          ...state.root,
          ...action.payload,
        },
      };
    default:
      return { ...state };
  }
}

export { jumboLayoutReducer };

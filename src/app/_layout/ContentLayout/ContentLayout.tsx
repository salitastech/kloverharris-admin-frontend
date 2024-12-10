import { ContentThemeProvider } from '@app/_components/_core';
import { JumboLayout, JumboLayoutProvider } from '@jumbo/components';
import {
  LayoutContentOptions,
  LayoutHeaderOptions,
  LayoutMainOptions,
  LayoutRootOptions,
  LayoutSidebarOptions,
  LayoutWrapperOptions,
} from '@jumbo/types';
import { SIDEBAR_STYLES, SIDEBAR_VARIANTS } from '@jumbo/utilities/constants';
import React from 'react';

interface ContentLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  sidebar: React.ReactNode;
  headerOptions?: LayoutHeaderOptions | Object;
  sidebarOptions?: LayoutSidebarOptions | Object;
  contentOptions?: LayoutContentOptions | Object;
  rootOptions?: LayoutRootOptions | Object;
  wrapperOptions?: LayoutWrapperOptions | Object;
  mainOptions?: LayoutMainOptions | Object;
}

export function ContentLayout({
  header,
  sidebar,
  headerOptions = {},
  sidebarOptions = {},
  contentOptions = {},
  rootOptions = {},
  wrapperOptions = {},
  mainOptions = {},
  children,
}: ContentLayoutProps) {
  return (
    <ContentThemeProvider>
      <JumboLayoutProvider
        layoutConfig={{
          header: {
            fixed: false,
            plain: true,
            ...headerOptions,
          },
          sidebar: {
            open: true,
            hide: false,
            variant: SIDEBAR_VARIANTS.PERMANENT,
            style: SIDEBAR_STYLES.CLIPPED_UNDER_HEADER,
            plain: true,
            ...sidebarOptions,
          },
          footer: {
            hide: true,
          },
          root: rootOptions,
          content: contentOptions,
          wrapper: wrapperOptions,
          main: mainOptions,
        }}
      >
        <JumboLayout header={header} sidebar={sidebar}>
          {children}
        </JumboLayout>
      </JumboLayoutProvider>
    </ContentThemeProvider>
  );
}

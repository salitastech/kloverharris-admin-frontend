'use client';
import { JumboNavbar } from '@jumbo/components';
import { useJumboLayout } from '@jumbo/components/JumboLayout/hooks';
import { JumboScrollbar } from '@jumbo/components/JumboScrollbar';
import { useJumboSidebarTheme } from '@jumbo/components/JumboTheme/hooks';
import { Div } from '@jumbo/shared';
import { MenuItems } from '@jumbo/types';
import { SIDEBAR_STYLES, SIDEBAR_VIEWS } from '@jumbo/utilities/constants';
import React, { Suspense } from 'react';
import { SidebarHeader, SidebarSkeleton } from './components';

type SidebarProps = {
  menus: MenuItems;
};

function Sidebar({ menus }: SidebarProps) {
  const { sidebarTheme } = useJumboSidebarTheme();
  const { sidebarOptions } = useJumboLayout();
  return (
    <React.Fragment>
      {sidebarOptions?.style !== SIDEBAR_STYLES.CLIPPED_UNDER_HEADER && (
        <SidebarHeader />
      )}
      <JumboScrollbar>
        <Suspense
          fallback={
            <Div
              sx={{
                display: 'flex',
                minWidth: 0,
                alignItems: 'center',
                alignContent: 'center',
                px: 3,
              }}
            >
              <SidebarSkeleton />
            </Div>
          }
        >
          {/* <SidebarSkeleton /> */}
          <JumboNavbar
            items={menus}
            theme={sidebarTheme}
            mini={sidebarOptions.view === SIDEBAR_VIEWS.MINI}
            open={sidebarOptions.open}
          />
        </Suspense>
      </JumboScrollbar>
    </React.Fragment>
  );
}

export { Sidebar };

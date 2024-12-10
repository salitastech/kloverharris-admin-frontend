'use client';
import { AuthUserPopover } from '@app/_components/popovers/AuthUserPopover';
import { MessagesPopover } from '@app/_components/popovers/MessagesPopover';
import { NotificationsPopover } from '@app/_components/popovers/NotificationsPopover';
import { useSidebarState } from '@jumbo/components/JumboLayout/hooks';
import { useJumboHeaderTheme } from '@jumbo/components/JumboTheme/hooks';

import { SIDEBAR_STYLES } from '@jumbo/utilities/constants';

import { Logo, SidebarToggleButton } from '@app/_components/_core';
import { TranslationPopover } from '@app/_components/popovers/TranslationPopover';
import { Stack } from '@mui/material';
import React from 'react';
import { Search, SearchIconButtonOnSmallScreen } from './components';
import { ThemeModeOption } from './components/ThemeModeOptions';

function Header() {
  const { isSidebarStyle } = useSidebarState();

  const [searchVisibility, setSearchVisibility] = React.useState(false);
  const { headerTheme } = useJumboHeaderTheme();

  const handleSearchVisibility = React.useCallback((value: boolean) => {
    setSearchVisibility(value);
  }, []);

  return (
    <React.Fragment>
      <SidebarToggleButton />
      {isSidebarStyle(SIDEBAR_STYLES.CLIPPED_UNDER_HEADER) && (
        <Logo sx={{ mr: 3 }} mode={headerTheme.type ?? 'light'} />
      )}
      <Search show={searchVisibility} onClose={handleSearchVisibility} />
      <Stack direction='row' alignItems='center' gap={1.25} sx={{ ml: 'auto' }}>
        <ThemeModeOption />
        {/* <TranslationPopover /> */}
        <SearchIconButtonOnSmallScreen onClick={handleSearchVisibility} />
        {/* <MessagesPopover /> */}
        <NotificationsPopover />
        <AuthUserPopover />
      </Stack>
    </React.Fragment>
  );
}

export { Header };

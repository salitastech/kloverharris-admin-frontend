'use client';
import { useJumboLayout } from '@jumbo/components/JumboLayout/hooks';
import { SIDEBAR_VIEWS } from '@jumbo/utilities/constants';
import styled from '@mui/material/styles/styled';

const SidebarHeaderDiv = styled('div')(({ theme }) => {
  const { sidebarOptions } = useJumboLayout();

  const isMiniAndClosed: boolean =
    sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
  return {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, !isMiniAndClosed ? 3.75 : 2.5),
    justifyContent: 'space-between',
    minHeight: '80px',
  };
});

export { SidebarHeaderDiv };

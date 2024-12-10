import { useJumboFooterTheme } from '@jumbo/components/JumboTheme/hooks';
import { Box } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import { useJumboLayout } from '../../hooks';

function JumboLayoutFooter({ children }: { children: React.ReactNode }) {
  const { footerTheme } = useJumboFooterTheme();
  const { footerOptions } = useJumboLayout();

  if (footerOptions?.hide) {
    return null;
  }
  return (
    <ThemeProvider theme={footerTheme}>
      <Box className='CmtLayout-footer'>{children}</Box>
    </ThemeProvider>
  );
}

export { JumboLayoutFooter };

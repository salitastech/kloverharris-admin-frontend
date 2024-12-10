import React from 'react';

import {
  useJumboSidebarTheme,
  useJumboTheme,
} from '@jumbo/components/JumboTheme/hooks';

import { Box } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { useJumboLayout } from '../../hooks';

import { Div } from '@jumbo/shared';

function JumboLayoutRside({ children }: { children: React.ReactNode }) {
  const { sidebarTheme } = useJumboSidebarTheme();
  const { theme } = useJumboTheme();
  const { rightSidebarOptions } = useJumboLayout();

  const sidebarWithDirectionByMainTheme = React.useMemo(() => {
    return {
      ...sidebarTheme,
      direction: theme.direction,
    };
  }, [theme.direction, sidebarTheme]);

  if (rightSidebarOptions?.hide) {
    return null;
  }
  if (rightSidebarOptions?.plain) {
    return (
      <ThemeProvider theme={sidebarWithDirectionByMainTheme}>
        <Box component={'aside'} sx={rightSidebarOptions.sx}>
          {children}
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={sidebarWithDirectionByMainTheme}>
      <Div>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            minWidth: 0,
            flexDirection: 'column',
            minHeight: '100%',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {children}
        </Box>
        {sidebarTheme?.sidebar?.overlay?.bgcolor && (
          <Box
            sx={{
              position: 'absolute',
              height: '100%',
              left: 0,
              right: 0,
              top: 0,
              ...(Array.isArray(sidebarTheme.sidebar.overlay.bgcolor) &&
              sidebarTheme.sidebar.overlay.bgcolor.length > 0
                ? {
                    backgroundImage: `linear-gradient(${sidebarTheme.sidebar.overlay.bgcolor[0]}, ${sidebarTheme.sidebar.overlay.bgcolor[1]})`,
                    opacity: sidebarTheme.sidebar.overlay.opacity
                      ? sidebarTheme.sidebar.overlay?.opacity ?? 0.85
                      : 1,
                  }
                : {
                    bgcolor: sidebarTheme.sidebar.overlay.bgcolor,
                    opacity: sidebarTheme.sidebar.overlay?.opacity ?? 1,
                  }),
            }}
          />
        )}
      </Div>
    </ThemeProvider>
  );
}

export { JumboLayoutRside };

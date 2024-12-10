import { useJumboHeaderTheme } from "@jumbo/components/JumboTheme/hooks";
import { AppBar, Box, ThemeProvider, Toolbar } from "@mui/material";
import React from "react";
import { useAppBarSx, useJumboLayout } from "../../hooks";

function JumboLayoutHeader({ children }: { children: React.ReactNode }) {
  const { headerOptions } = useJumboLayout();
  const { headerTheme } = useJumboHeaderTheme();

  //TODO: need to cross check this calculation
  const appBarSx = useAppBarSx();

  if (headerOptions?.hide || !children) return null;

  if (headerOptions?.plain) {
    return (
      <ThemeProvider theme={headerTheme}>
        <Box component={"header"} sx={headerOptions.sx}>
          {children}
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={headerTheme}>
      <AppBar
        elevation={0}
        position={headerOptions?.fixed ? "fixed" : "relative"}
        sx={{ ...appBarSx }}
      >
        <Toolbar sx={{ height: "100%", px: { lg: 6, xs: 4 } }}>
          {children}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export { JumboLayoutHeader };

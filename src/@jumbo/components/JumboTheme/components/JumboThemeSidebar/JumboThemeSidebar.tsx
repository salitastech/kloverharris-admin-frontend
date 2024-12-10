import { JumboThemeSidebarContextType } from "@jumbo/types";
import { ThemeOptions, createTheme } from "@mui/material/styles";
import React from "react";
import { JumboThemeSidebarContext } from "./JumboThemeSidebarContext";

const JumboThemeSidebar = ({
  children,
  init,
}: {
  children: React.ReactNode;
  init: ThemeOptions | undefined;
}) => {
  //todo: we can setup a default theme for sidebar here instead of {}
  const [sidebarTheme, setSidebarTheme] = React.useState(init ?? {});

  const themeSidebarContextValue: JumboThemeSidebarContextType = React.useMemo(
    () => ({
      sidebarTheme: createTheme(sidebarTheme),
      setSidebarTheme: setSidebarTheme,
    }),
    [sidebarTheme, setSidebarTheme]
  );

  return (
    <JumboThemeSidebarContext.Provider value={themeSidebarContextValue}>
      {children}
    </JumboThemeSidebarContext.Provider>
  );
};

export { JumboThemeSidebar };

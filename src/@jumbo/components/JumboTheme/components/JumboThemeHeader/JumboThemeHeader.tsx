import { JumboThemeHeaderContextType } from "@jumbo/types";
import { ThemeOptions, createTheme } from "@mui/material/styles";
import React from "react";
import { JumboThemeHeaderContext } from "./JumboThemeHeaderContext";

const JumboThemeHeader = ({
  children,
  init,
}: {
  children: React.ReactNode;
  init: ThemeOptions | undefined;
}) => {
  //todo: later we can set a default theme for header here instead of {}
  const [headerTheme, setHeaderTheme] = React.useState(init ?? {});

  const themeHeaderContextValue: JumboThemeHeaderContextType = React.useMemo(
    () => ({
      headerTheme: createTheme(headerTheme),
      setHeaderTheme: setHeaderTheme,
    }),
    [headerTheme, setHeaderTheme]
  );

  return (
    <JumboThemeHeaderContext.Provider value={themeHeaderContextValue}>
      {children}
    </JumboThemeHeaderContext.Provider>
  );
};

export { JumboThemeHeader };

'use client';
import {
  JumboThemeHeader,
  JumboThemeSidebar,
} from '@jumbo/components/JumboTheme/components';
import {
  useJumboHeaderTheme,
  useJumboSidebarTheme,
  useJumboTheme,
} from '@jumbo/components/JumboTheme/hooks';
import React from 'react';

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useJumboTheme();
  const { setSidebarTheme } = useJumboSidebarTheme();
  const { setHeaderTheme } = useJumboHeaderTheme();

  React.useEffect(() => {
    setSidebarTheme(theme);
    setHeaderTheme(theme);
  }, [theme, setHeaderTheme, setSidebarTheme]);
  return children;
}

export function ContentThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useJumboTheme();
  return (
    <JumboThemeSidebar init={theme}>
      <JumboThemeHeader init={theme}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </JumboThemeHeader>
    </JumboThemeSidebar>
  );
}

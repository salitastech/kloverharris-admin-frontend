import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { useJumboTheme } from '../JumboTheme/hooks';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const JumboRTL = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useJumboTheme();

  if (theme.direction === 'rtl')
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;

  return children;
};

export default JumboRTL;

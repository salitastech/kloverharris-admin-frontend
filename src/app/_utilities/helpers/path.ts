import { anonymousPaths, publicPaths } from '@app/_config/routes/path';
import { match } from 'path-to-regexp';

function matchPathname(pathArray: string[], pathname: string) {
  return pathArray.some((path) => {
    const pathMatcher = match(path, { decode: decodeURIComponent });
    console.log({ path, pathname });
    return pathMatcher(pathname);
  });
}

export function isPublicPath(pathname: string) {
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/assets/')
  ) {
    return true;
  }

  return matchPathname(publicPaths, pathname);
}

export function isAnonymousPath(pathname: string) {
  return matchPathname(anonymousPaths, pathname);
}

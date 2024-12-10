import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';
import { activeLocale } from '../../middleware';

let headers = { 'accept-language': 'en-US,en;q=0.5' };
let languages = new Negotiator({ headers }).languages();
let locales = ['en-US'];
let defaultLocale = 'en-US';

export function pathnameHasLocale(pathname: string, activeLocale: string) {
  return locales.some((locale) => {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      activeLocale = locale;
      return true;
    }
    return false;
  });
}

export function prefixLocale(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith(`/api/`) ||
    pathname.startsWith(`/assets/`) ||
    pathname.startsWith('/_next/')
  ) {
    return null;
  }

  if (pathnameHasLocale(pathname, activeLocale)) {
    return null;
  }

  //redirect with default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;

  return url;
}

import { anonymousMiddleware, authMiddleware } from '@app/_middleware/auth';
import { prefixLocale } from '@app/_middleware/locale';
import { isAnonymousPath, isPublicPath } from '@app/_utilities/helpers/path';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';

let headers = { 'accept-language': 'en-US,en;q=0.5' };
let languages = new Negotiator({ headers }).languages();
let locales = ['en-US'];
let defaultLocale = 'en-US';

match(languages, locales, defaultLocale);

export let activeLocale = defaultLocale;

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  const localeResponse = prefixLocale(request);
  if (localeResponse) {
    return NextResponse.redirect(localeResponse);
  }

  if (isPublicPath(pathname, activeLocale)) {
    return NextResponse.next();
  }

  if (isAnonymousPath(pathname, activeLocale)) {
    return anonymousMiddleware(request);
  }

  return authMiddleware(request);
}

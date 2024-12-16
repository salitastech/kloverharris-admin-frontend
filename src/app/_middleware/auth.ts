import { ACCESS_TOKEN_KEY } from '@app/_utilities/constants';
import { getAuthToken } from '@app/_utilities/helpers';
import { NextRequest, NextResponse } from 'next/server';

export function authMiddleware(request: NextRequest) {
  const token = request.cookies.get(ACCESS_TOKEN_KEY);
  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = `/auth/login`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export function anonymousMiddleware(req: NextRequest) {
  const accessToken = getAuthToken() || req.cookies.get(ACCESS_TOKEN_KEY);
  if (accessToken) {
    const url = req.nextUrl.clone();
    url.pathname = `/`; // Redirect logged-in users to dashboard
    return NextResponse.redirect(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }
  return NextResponse.next();
}

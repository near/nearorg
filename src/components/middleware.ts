import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

//https://www.iban.com/country-codes
const IBAN_BLOCKED_REGIONS = ['CU', 'IR', 'KP', 'SY'];

// Limit middleware triggering to specific routes
export const config = {
  matcher: [
    '/:path*/widget/:slug*',
    '/:path*/component/:slug*',
    '/files/:path*',
    '/papers/:path*',
    '/blog/:path*',
    '/applications/:path*',
    '/signup/:path*',
    '/signin/:path*',
    '/ecosystem/:path*',
    '/founders/:path*',
    '/people',
    '/learn/:path*',
    '/events/',
    '/sandbox',
    '/onboarding',
    '/applications',
    '/components',
    '/gateways',
    '/blockchain',
    '/open-web-applications',
    '/data-availability',
    '/fast-auth-and-relayers',
    '/data-infrastructure',
  ],
};

export function middleware(req: NextRequest) {
  const country = (req.geo && req.geo.country) || 'UNKNOWN';

  let response = NextResponse.rewrite(req.nextUrl);

  // Redirect users from blocked regions
  if (IBAN_BLOCKED_REGIONS.includes(country)) {
    const url = req.nextUrl.clone();
    url.pathname = '/geoBlocked';
    response = NextResponse.redirect(url);
  }

  return response;
}

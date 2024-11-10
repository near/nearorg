import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

//https://www.iban.com/country-codes
const IBAN_BLOCKED_REGIONS = ['CU', 'IR', 'KP', 'SY'];

// Limit middleware triggering to specific routes
export const config = {
  matcher: ['/files/:path*', '/blog/:path*'],
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

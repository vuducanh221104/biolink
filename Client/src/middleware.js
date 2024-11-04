import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';

// Update locales to include 'vi', 'en', and 'ar'
let locales = ['vi', 'en', 'ar'];
let defaultLocale = 'vi'; // Change default locale to Vietnamese

function getLocale(request) {
    let headers = {
        'accept-language': request.headers.get('accept-language') || '',
    };
    let languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Skip if the pathname is an API endpoint or a public resource
    if (
        pathname.startsWith('/api/') ||
        pathname.startsWith('/dns') ||
        pathname.startsWith('/ipa') ||
        pathname.startsWith('/plist') ||
        pathname.startsWith('/UUID') ||
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/Esign.png') ||
        pathname.startsWith('/favicon.ico') ||
        pathname.startsWith('/music.mp3') ||
        pathname.match(/\.(png|ico|mp3)$/)
    ) {
        return;
    }

    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

    // If the pathname already has a locale, do nothing
    if (pathnameHasLocale) return;

    // Get the appropriate locale based on the request
    const locale = getLocale(request);

    // Redirect to the same path with the detected locale
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        '/((?!_next|api).*)', // Skip all internal paths and API routes
    ],
};

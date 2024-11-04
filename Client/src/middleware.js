import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';

const locales = ['vi', 'en', 'ar'];
const defaultLocale = 'vi';

function getLocale(request) {
    const headers = {
        'accept-language': request.headers.get('accept-language') || '',
    };
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

    // Nếu đường dẫn đã có locale, nhưng là một tài nguyên trong thư mục public
    if (pathnameHasLocale) {
        // Kiểm tra nếu đường dẫn có thể là tài nguyên trong public
        if (pathname.startsWith('/dns')) {
            // Chuyển hướng về đường dẫn mà không có tiền tố ngôn ngữ
            const newPath = pathname.replace(/^\/(vi|en|ar)/, ''); // Loại bỏ tiền tố ngôn ngữ
            return NextResponse.redirect(new URL(newPath, request.url));
        }
        return; // Nếu không thì không làm gì cả
    }

    // Nếu đường dẫn không có locale, thêm locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        '/((?!_next).*)', // Bỏ qua tất cả các đường dẫn nội bộ
    ],
};

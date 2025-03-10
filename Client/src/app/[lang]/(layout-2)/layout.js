import localFont from 'next/font/local';
import './stylesLayout2.scss';
import '../../../styles/navBar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactBanner from '../../../components/ContactBanner';
const geistSans = localFont({
    src: '../..//fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: '../..//fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata = {
    title: 'Dinhhavn',
    description: 'dinhhavn.id.vn',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'Dinhhavn',
        description: 'dinhhavn.id.vn',
        url: 'https://dinhhavn.id.vn',
        type: 'website',
        images: [
            {
                url: 'https://res.cloudinary.com/do4zld720/image/upload/v1726413958/favicon_iutkcy.png',
                alt: 'Dinhhavn.id.vn',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@dinhhavn',
        title: 'Dinhhavn',
        description: 'dinhhavn.id.vn',
        images: [
            {
                url: 'https://res.cloudinary.com/do4zld720/image/upload/v1726413958/favicon_iutkcy.png',
                alt: 'Dinhhavn.id.vn',
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default async function RootLayout({ children, params }) {
    const { lang } = await params;
    return (
        <html lang={lang} suppressHydrationWarning={true}>
            <meta name="theme-color" content="#000000" />
            <meta
                content="width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5"
                name="viewport"
            />
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <ContactBanner />
                {children}
            </body>
        </html>
    );
}

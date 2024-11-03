'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { achirvo } from '../../assets/fontNext';
import Image from 'next/image';
import images from '../../assets/index';
import { ZaloIcon, NavBarIcon, ChervonDonwIcon } from '../../assets/Icons';

function Navbar({ dict, lang, isCertPage = false }) {
    const router = useRouter();
    const [showLang, setShowLang] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false); // Trạng thái cho navbar-collapse
    const langRef = useRef(null);
    const navbarRef = useRef(null);
    const togglerRef = useRef(null); // Ref cho navbar-toggler

    useEffect(() => {
        // Highlight the active link based on the current route
        const activeLink = document.querySelector(`#navbarSupportedContent ul li a[href="${router.pathname}"]`);
        if (activeLink) activeLink.parentElement.classList.add('active');
    }, [router.pathname]);

    useEffect(() => {
        // Đóng dropdown nếu click ra ngoài
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setShowLang(false);
            }
            // Kiểm tra nếu navbar đang mở và nhấp ra ngoài, thì đóng lại
            if (
                showNavbar &&
                navbarRef.current &&
                !navbarRef.current.contains(event.target) &&
                !togglerRef.current.contains(event.target) // Bỏ qua khi nhấn vào navbar-toggler
            ) {
                setShowNavbar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showNavbar]); // Thêm showNavbar vào dependency để theo dõi trạng thái

    const handleToggle = () => {
        // Toggle trạng thái navbar-collapse cho mobile view
        setShowNavbar((prev) => !prev);
    };
    const listMenu = [
        {
            name: dict?.navBar.menu1,
            icon: <Image src={images.buyIcon} alt="logo" width={20} height={20} style={{ borderRadius: '30px' }} />,
            href: `${lang}/cert#cert-buy`,
        },
        {
            name: dict?.navBar.menu2,
            icon: <Image src={images.logo} alt="logo" width={20} height={20} style={{ borderRadius: '30px' }} />,
            href: '#esign-free',
        },
        {
            name: dict?.navBar.menu3,
            icon: <ZaloIcon width={20} height={20} />,
            href: 'https://zalo.me/g/buqlbt248',
        },

        {
            name: dict?.navBar.menu4,
            icon: <ZaloIcon width={20} height={20} />,
            href: '#contact',
        },
    ];

    const listMenuCert = [
        {
            name: dict?.navBar.menu1,
            icon: <Image src={images.buyIcon} alt="logo" width={20} height={20} style={{ borderRadius: '30px' }} />,
            href: '#cert-buy',
        },
        {
            name: dict?.navBar.menu2,
            icon: <Image src={images.logo} alt="logo" width={20} height={20} style={{ borderRadius: '30px' }} />,
            href: `/${lang}/#esign-free`,
        },
        {
            name: dict?.navBar.menu3,
            icon: <ZaloIcon width={20} height={20} />,
            href: 'https://zalo.me/g/buqlbt248',
        },

        {
            name: dict?.navBar.menu4,
            icon: <ZaloIcon width={20} height={20} />,
            href: `/${lang}/#contact`,
        },
    ];

    return (
        <nav className="navbar fixed navbar-expand-custom navbar-mainbg">
            <Link href="/" className={`navbar-brand navbar-logo`}>
                <Image src={images.signApple} alt="logo" />
            </Link>
            <div className="navbar-menu">
                <div className="menu-lang-inner" ref={langRef}>
                    <div
                        className={'header-icon-map'}
                        onClick={() => setShowLang(!showLang)}
                        role="button"
                        aria-label="Map"
                    >
                        {lang === 'vi' && <span>Tiếng Việt 🇻🇳</span>}
                        {lang === 'en' && <span>English 🇺🇸</span>}
                        {lang === 'ar' && <span>العربية 🇸🇦</span>}
                        <ChervonDonwIcon
                            style={{
                                height: '15px',
                                width: '18px',
                                paddingLeft: '3px',
                                fontSize: '1.2rem',
                                marginBottom: '5px',
                            }}
                        />
                        <div className={`wrapper-tippy ${showLang && 'active'}`}>
                            <ul className={'language-change-list'}>
                                <li className={`language-change-item ${lang === 'vi' ? 'active' : ''}`}>
                                    <Link href={`/vi`}>
                                        <button>Tiếng Việt 🇻🇳</button>
                                    </Link>
                                </li>

                                <li className={`language-change-item ${lang === 'en' ? 'active' : ''}`}>
                                    <Link href="/en">
                                        <button>English 🇺🇸</button>
                                    </Link>
                                </li>

                                <li className={`language-change-item ${lang === 'ar' ? 'active' : ''}`}>
                                    <Link href="/ar">
                                        <button>العربية 🇸🇦</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button
                    ref={togglerRef}
                    className="navbar-toggler"
                    onClick={handleToggle}
                    aria-label="Toggle navigation"
                >
                    <NavBarIcon width={25} height={25} />
                </button>
            </div>

            {/* LIST */}
            <div
                className={`collapse navbar-collapse ${showNavbar ? 'show' : ''}`}
                id="navbarSupportedContent"
                ref={navbarRef}
            >
                <ul className="navbar-nav">
                    {isCertPage &&
                        listMenuCert.map((item, index) => (
                            <li key={index} className="nav-item">
                                <Link href={item.href} className={`nav-link ${achirvo.className}`}>
                                    {item.icon}
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    {!isCertPage &&
                        listMenu.map((item, index) => (
                            <li key={index} className="nav-item">
                                <Link href={item.href} className={`nav-link ${achirvo.className}`}>
                                    {item.icon}
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                </ul>
                <div className="hori-selector">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { achirvo } from "../../assets/fontNext";
import Image from "next/image";
import images from "../../assets/index";
import { CartIcon, ZaloIcon, NavBarIcon } from "../../assets/Icons";

function Navbar() {
  const router = useRouter();

  useEffect(() => {
    // Highlight the active link based on the current route
    const activeLink = document.querySelector(
      `#navbarSupportedContent ul li a[href="${router.pathname}"]`
    );
    if (activeLink) activeLink.parentElement.classList.add("active");
  }, [router.pathname]);

  const handleToggle = () => {
    // Toggle the navbar for mobile view
    document.getElementById("navbarSupportedContent").classList.toggle("show");
  };

  return (
    <nav className="navbar fixed navbar-expand-custom navbar-mainbg">
      <Link href="/" className={`navbar-brand navbar-logo `}>
        <Image src={images.signApple} alt="logo" />
      </Link>

      <button
        className="navbar-toggler"
        onClick={handleToggle}
        aria-label="Toggle navigation"
      >
        <NavBarIcon width={25} height={25} />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          {[
            {
              name: "Mua Chứng Chỉ Apple",
              icon: (
                <Image
                  src={images.buyIcon}
                  alt="logo"
                  width={20}
                  height={20}
                  style={{ borderRadius: "30px" }}
                />
              ),
              href: "/cert",
            },
            {
              name: "Chứng Chỉ Free",
              icon: (
                <Image
                  src={images.logo}
                  alt="logo"
                  width={20}
                  height={20}
                  style={{ borderRadius: "30px" }}
                />
              ),
              href: "#esign-free",
            },
            {
              name: "Nhóm Check Uy Tín",
              icon: <ZaloIcon width={20} height={20} />,
              href: "https://zalo.me/g/buqlbt248",
            },

            {
              name: "Liên Hệ",
              icon: <ZaloIcon width={20} height={20} />,
              href: "#contact",
            },
          ].map((item, index) => (
            <li key={index} className="nav-item">
              <Link
                href={item.href}
                className={`nav-link ${achirvo.className}`}
              >
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

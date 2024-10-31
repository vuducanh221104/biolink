"use client";
import Image from "next/image";
import images from "../../assets/index";

function ContactBanner() {
  return (
    <>
      <a className="banner-gobal">
        <Image src={images.bannerGobal} alt="" />
      </a>
      <div className="wrapper-banner-contact">
        <Image src={images.bannerContact} alt="" />
      </div>
    </>
  );
}

export default ContactBanner;

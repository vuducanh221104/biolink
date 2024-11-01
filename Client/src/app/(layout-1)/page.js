"use client";
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../assets";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";
import {
  ZaloIcon,
  FaceBookICcon,
  TelegramIcon,
  ImeiIcon,
} from "../../assets/Icons";
import ModalNotify from "../../components/ModalNotify";
import Link from "next/link";

function App() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const esignLinks = [
    { href: "/api/VNPOST", label: "Esign VIETNAM POSTS & TG - HCMC (UPDATE)" },
    {
      href: "/api/GacTrump",
      label: "Esign Gac Trumpchi Car Sales Co., Ltd (NEW)",
    },
    { href: "/api/SunLife", label: "Esign Sun Life Everbright (NEW)" },
    { href: "/api/Mylan", label: "Esign Mylan Inc." },
    { href: "/api/Arada", label: "Esign ARADA Co., Ltd." },
    { href: "/api/CCPC", label: "Esign China Continent P&C (NEW)" },
    { href: "/api/sunshine1", label: "Esign Sunshine 1 (Update)" },
    { href: "/api/CITIC", label: "Esign China CITIC" },
    { href: "/api/AnBang", label: "Esign ANBANG INSURANCE" },
    { href: "/api/Chongqing", label: "Esign Bank Of Chongqing" },
    { href: "/api/Henan", label: "Esign Henan Provincial" },
    { href: "/api/HDFC", label: "Esign HDFC Life" },
    { href: "/api/sunshine", label: "Esign Sunshine Vip" },
  ];
  const toRotate = useMemo(
    () => ["Web developer", "Web Designer", "UX,UI Designer"],
    []
  );
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const audioRef = useRef(null);

  // Phát nhạc khi trang được tải
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay blocked: ", error);
        });
      }
    };

    // Thêm sự kiện khi người dùng tương tác với trang
    window.addEventListener("click", playAudio);

    return () => {
      window.removeEventListener("click", playAudio);
    };
  }, []);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  }, [isDeleting, loopNum, period, text, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, tick]);

  return (
    <div>
      {/* Phần tử audio */}
      <audio ref={audioRef} src="/music.mp3" loop autoPlay />

      <div className="img-contain" id="contact">
        <Image
          className="profile-photo"
          src={images.logo}
          alt="Profile photo"
        />
      </div>

      <div className="wrapper-heading">
        <div className="content">
          <h2>Đình Hà</h2>
          <h2>Đình Hà</h2>
        </div>
      </div>
      <p className="margin-top">
        {`Đức Anh`}
        {` - `}
        {text}
      </p>
      {/* Lien He */}
      <ul className="link-tree">
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/daodinhha97?mibextid=LQQJ4d"
          >
            <i>
              <FaceBookICcon />
              FaceBook(Admin 1)
            </i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/I.Am.DucAnh123">
            <i>
              <FaceBookICcon />
              FaceBook(Admin 2)
            </i>
          </a>
        </li>
        {/* <li>
          <a target="_blank" href="">
            YouTube
          </a>
        </li> */}
        {/* <li>
          <a target="_blank" href="">
            Twitter
          </a>
        </li> */}
        <li>
          <a target="_blank" href="tel:+84967890629">
            <i className="bi bi-telephone-fill">Số Điện Thoại</i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://zalo.me/g/buqlbt248">
            <div>
              <ZaloIcon />
              Box Chat Zalo
            </div>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://t.me/dinhhavn">
            <div>
              <TelegramIcon />
              Box Chat Telegram
            </div>
          </a>
        </li>
      </ul>
      <div className="install">
        <div className="install-margin">
          <h3 className="buy-cert-text-color">MUA CHỨNG CHỈ 50K</h3>
          <ul className="link-tree">
            <li className="cert-1">
              <Link href="/cert">
                <i>
                  <span className="apple-icon"></span>
                  Xem Gói Chứng Chỉ Apple
                </i>
              </Link>
            </li>
            <li className="cert-2">
              <a target="_blank" href="https://zalo.me/g/buqlbt248">
                <i>
                  <Image
                    src={images.iconCheck}
                    alt="logo"
                    width={20}
                    height={20}
                    style={{ borderRadius: "30px" }}
                  />
                  Nhóm Check Uy Tín
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Price */}
      <div className="install">
        <div className="install-margin">
          <p className="text-large">
            <Link href="/cert" style={{ color: "white !important" }}>
              Nếu Bạn Muốn Có Nhu Cầu Mua Chứng Chỉ Esign | Gbox | Scarlet Với
              Giá 50k Thì inbox Cho mình Bên Trên Nhé
            </Link>
          </p>
        </div>
      </div>
      {/* DNS */}
      <div className="install">
        <div className="install-margin">
          <h3>Install DNS</h3>

          <a
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/DNS`}
          >
            <button className="btn btn-warning">
              <i className="bi bi-cloud-download"></i>
              Install
            </button>
          </a>
        </div>
      </div>
      {/* Cert */}
      <div className="install">
        <div className="install-margin">
          <h3>File Chứng Chỉ (Esign Cert)</h3>
          <a
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/CertEsign`}
          >
            <button className="btn btn-info">
              <i className="bi bi-file-earmark-zip"></i> Install
            </button>
          </a>
        </div>
      </div>
      {/* IPA */}
      <div className="install">
        <div className="install-margin">
          <h3>IPA Singed ✅</h3>

          <a href={`#`}>
            <button className="btn btn-danger">
              <Image
                src={images.lienQuan}
                className="image-thumb"
                alt="lienquan"
              />
              LQ Hack Map & Mod Skin
            </button>
          </a>
          <a
            // target="_blank"
            // href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/coinmaster`}
            href={`#`}
          >
            <button className="btn btn-danger">
              <Image
                src={images.coinMaser}
                className="image-thumb"
                alt="coinMaster"
              />
              Coin Master (VIP)
            </button>
          </a>
          <a href={`#`}>
            <button className="btn btn-danger">
              <Image
                src={images.tiktok}
                className="image-thumb"
                alt="TiktokChina"
              />
              TikTok China
            </button>
          </a>
          <a href={`#`}>
            <button className="btn btn-danger">
              <Image
                src={images.spotify}
                className="image-thumb"
                alt="spotify "
              />
              Spotify Premium
            </button>
          </a>
        </div>
      </div>
      {/*  ESSIGN*/}
      <div className="install">
        <div className="install-margin" id="esign-free">
          <h3>Esign Free ✅</h3>
          {esignLinks.map((link, index) => (
            <a
              key={index}
              target="_blank"
              href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${link.href}`}
            >
              <button className="btn btn-info">
                <Image className="img-button" src={images.logo} alt="#" />
                {link.label}
              </button>
            </a>
          ))}
        </div>
        <div className="install">
          <div className="install-margin" id="esign-free">
            <h3>Lấy UDID Máy 📱</h3>
            <a href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/UUID`}>
              <button className="btn btn-info uuid">
                <ImeiIcon className="imei-icon" />
                GET UDID
              </button>
            </a>
          </div>
        </div>
        <div className="install">
          <div className="install-margin" id="esign-free">
            {/* Footer */}
            <div className="footer">
              <p>By VDP</p>
              <p>All rights reserved - © 2024</p>
            </div>
            {!showModal && (
              <div onClick={() => setShowModal(!showModal)}>
                <ModalNotify />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

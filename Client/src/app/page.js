"use client";
import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import images from "../assets";
import Image from "next/image";
import { ZaloIcon, FaceBookICcon } from "../assets/Icons";
import ModalNotify from "../components/ModalNotify";

function App() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toRotate = ["Web developer", "Web Designer", "UX,UI Designer"];
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

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let UpdateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(UpdateText);

    if (isDeleting) {
      setDelta((preDelta) => preDelta / 2);
    }

    if (!isDeleting && UpdateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && UpdateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src="/music.mp3" loop autoPlay />
      {/* Phần tử audio */}
      <div className="img-contain">
        <Image className="profile-photo" src={images.logo} alt="Profile" />
      </div>

      {/* <h1>Đình Hà</h1> */}
      <div className="wrapper-heading">
        <div className="content">
          <h2>Đình Hà</h2>
          <h2>Đình Hà</h2>
        </div>
      </div>
      <p className="margin-top text-custom" style={{ marginBottom: "0" }}>
        -Đức Anh-
      </p>
      <p>
        {`Liên Hệ`}
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
              FaceBook
            </i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/I.Am.DucAnh123">
            <i>
              <FaceBookICcon />
              FaceBook(2)
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
            <i class="bi bi-telephone-fill">Số Điện Thoại</i>
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
      </ul>
      {/* Price */}
      <div className="install">
        <div className="install-margin">
          <p className="text-large ">
            Nếu Bạn Muốn Có Nhu Cầu Mua Chứng Chỉ Esign | Gbox | Scarlet Với Giá
            79k Thì inbox Cho mình Bên Trên Nhé
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
              <i class="bi bi-file-earmark-zip"></i> Install
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
              <Image src={images.lienQuan} className="image-thumb" />
              LQ Hack Map & Mod Skin
            </button>
          </a>
          <a
            // target="_blank"
            // href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/coinmaster`}
            href={`#`}
          >
            <button className="btn btn-danger">
              <Image src={images.coinMaser} className="image-thumb" />
              Coin Master (VIP)
            </button>
          </a>
          <a href={`#`}>
            <button className="btn btn-danger">
              <Image src={images.tiktok} className="image-thumb" />
              TikTok China
            </button>
          </a>
        </div>
      </div>
      {/*  ESSIGN*/}
      <div className="install">
        <div className="install-margin">
          <h3>Esign Free ✅</h3>
          <a
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/CCPC`}
          >
            <button className="btn btn-info">
              <Image className="img-button" src={images.logo} alt="#" />
              Esign China Continent P&C (NEW)
            </button>
          </a>
          <a
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/sunshine`}
          >
            <button className="btn btn-info">
              <Image className="img-button" src={images.logo} alt="#" />
              Esign Sunshine Vip(Update)
            </button>
          </a>
          <a
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/sunshine1`}
          >
            <button className="btn btn-info">
              <Image className="img-button" src={images.logo} alt="#" />
              Esign Sunshine 1 (Update)
            </button>
          </a>

          <a
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/CITIC`}
          >
            <button className="btn btn-info">
              <Image className="img-button" src={images.logo} alt="#" />
              Esign China CITIC
            </button>
          </a>

          <a
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/AnBang`}
          >
            <button className="btn btn-info">
              <Image className="img-button" src={images.logo} alt="#" />
              Esign ANBANG INSURANCE
            </button>
          </a>

          <a
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/Chongqing`}
          >
            <button className="btn btn-info">
              <Image className="img-button" src={images.logo} alt="#" />
              Esign Bank Of Chongqing
            </button>
          </a>

          <a
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/Henan`}
          >
            <button className="btn btn-info">
              <Image className="img-button" src={images.logo} alt="#" />
              Esign Henan Provincial
            </button>
          </a>

          <a
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/HDFC`}
          >
            <button className="btn btn-info">
              <Image className="img-button" src={images.logo} alt="#" />
              Esign HDFC Life
            </button>
          </a>
        </div>
      </div>

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

      {/* Modal */}
      {/* {!showModal && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Thông báo</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Chào mừng bạn đến với trang web của chúng tôi!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default App;

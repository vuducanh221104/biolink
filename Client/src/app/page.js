"use client";
import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import images from "@/assets";
import Image from "next/image";

function App() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web developer", "Web Designer", "UX,UI Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

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

  const audioRef = useRef(null); // Dùng để tham chiếu đến phần tử âm thanh
  const [isPlaying, setIsPlaying] = useState(true); // Trạng thái nhạc đang phát

  // Tự động phát nhạc khi tải trang
  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //   }
  // }, []);

  // Hàm điều khiển phát / tạm dừng nhạc
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      {/* Phần tử audio */}
      <audio ref={audioRef} src="/music1.mp3" loop />
      <div className="img-contain">
        <Image className="profile-photo" src={images.logo} alt="Profile" />
      </div>
      <h1>Đình Hà</h1>
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
            FaceBook
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
            Số Điện Thoại
          </a>
        </li>
        <li>
          <a target="_blank" href="https://zalo.me/g/buqlbt248">
            Box Chat Zalo
          </a>
        </li>
      </ul>
      {/* Price */}
      <div className="install">
        <div className="install-margin">
          <p>
            - Nếu Bạn Muốn Có Nhu Cầu Mua Chứng Chỉ Esign-Gbox-Scarlet Với Giá
            79k Thì inbox Cho mình Bên Dưới Nhé -
          </p>
        </div>
      </div>

      {/*  */}
      <div className="install">
        <div className="install-margin">
          <h3>Install DNS</h3>
          <button className="btn btn-warning">
            <i className="bi bi-cloud-download"></i>

            <a
              target="_blank"
              href="https://github.com/DuccAnhVu/ducanhdns/raw/main/Block-DNS/Revoke.mobileconfig"
            >
              Install
            </a>
          </button>
        </div>
        <div className="install">
          <div className="install-margin">
            <h3>File Chứng Chỉ (Esign Cert)</h3>
            <button className="btn btn-info">
              <i class="bi bi-file-earmark-zip"></i>{" "}
              <a
                target="_blank"
                href="https://github.com/DuccAnhVu/ducanhdns/raw/main/Esign-IPA/Esign-Certs.zip"
              >
                Install
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* IPA */}
      {/* <div className="install">
        <div className="install-margin">
          <h3>Premium</h3>
          <button className="btn btn-danger">
            <i class="bi bi-youtube"></i>
            <a
              target="_blank"
              href="https://github.com/DuccAnhVu/ducanhdns/raw/main/Block-DNS/Revoke.mobileconfig"
            >
              Youtube Premium
            </a>
          </button>
          <br></br>
          <button className="btn btn-success">
            <i class="bi bi-spotify"></i>
            <a target="_blank" href="">
              Spotify Premium
            </a>
          </button>
          <br></br>
          <button className="btn btn-dark">
            <i class="bi bi-tiktok"></i>
            <a target="_blank" href="">
              Tiktok Premium
            </a>
          </button>
        </div>
      </div> */}
      {/*  ESSIGN*/}
      <div className="install">
        <div className="install-margin">
          <h3>Esign Free -Bypass Revoke-</h3>
          <button className="btn btn-info">
            <Image className="img-button" src={images.logo} alt="#" />
            <a
              target="_blank"
              href="itms-services://?action=download-manifest&url=https://sign.applep12.com/GetPlist/66b8b57a-5198-8101-00d2-8b6f26a2ea49"
            >
              Esign Sunshine (Update)
            </a>
          </button>
          <br></br>
          <button className="btn btn-info">
            <Image className="img-button" src={images.logo} alt="#" />
            <a
              target="_blank"
              href="tms-services://?action=download-manifest&url=https://sign.applep12.com/GetPlist/66982035-3c9b-9f01-00a9-4ac651f01172"
            >
              Esign China CITIC
            </a>
          </button>
          <br></br>

          <button className="btn btn-info">
            <Image className="img-button" src={images.logo} alt="#" />
            <a target="_blank" href="">
              Esign ANBANG INSURANCE
            </a>
          </button>
          <br></br>
          <button className="btn btn-info">
            <Image className="img-button" src={images.logo} alt="#" />
            <a target="_blank" href="">
              Esign Bank Of Chongqing
            </a>
          </button>

          <br></br>
          <button className="btn btn-info">
            <Image className="img-button" src={images.logo} alt="#" />
            <a target="_blank" href="">
              Esign HDFC Life
            </a>
          </button>
          <br></br>
          <button className="btn btn-info">
            <Image className="img-button" src={images.logo} alt="#" />
            <a target="_blank" href="">
              Esign Henan Provincial
            </a>
          </button>
          <br></br>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>By VDP</p>
        <p>All rights reserved - © 2024</p>
      </div>
      {/* Nút Play/Pause */}
      {/* <button onClick={togglePlayPause} className="btn btn-secondary mb-4">
        {isPlaying ? "Pause Music" : "Play Music"}
      </button> */}
    </div>
  );
}

export default App;

"use client";
import Image from "next/image";
import images from "../../assets/index";
function FooterPayment() {
  return (
    <footer className="footer-wrapper">
      <div className="footer__text">
        Chấp nhận thanh toán tự động qua QR
        <Image style="height:18px;width:auto;" src={images.qrPro} alt="" />
      </div>
      <div className="footer__blocks">
        <div className="vietqr-block">
          <p className="vietqr-block-number">Ngân Hàng</p>
          <p className="vietqr-block-subtitle"></p>
          <div className="vietqr-block-logo">
            <Image style="height:25px;width:auto;" src={images.BankA} alt="" />
            <Image style="height:25px;width:auto;" src={images.MBBank} alt="" />
            <span>+50</span>
          </div>
          <p className="vietqr-block-subtitle"></p>
        </div>
        <div className="vietqr-block">
          <p className="vietqr-block-number">Ví điện tử</p>
          <div className="vietqr-block-logo">
            <Image style="height:25px;width:auto;" src={images.Momo} alt="" />
            <Image
              style="height:25px;width:auto;"
              src={images.zaloPay}
              alt=""
            />
            <span>+5</span>
          </div>
          <p className="vietqr-block-subtitle"></p>
        </div>
        <div className="vietqr-block">
          <p className="vietqr-block-number">Tiền di động</p>
          <p className="vietqr-block-subtitle"></p>
          <div className="vietqr-block-logo">
            <Image
              style="height:25px;width:auto;"
              src={images.VNPTMoney}
              alt=""
            />
            <Image
              style="height:25px;width:auto;"
              src={images.VTMoney}
              alt=""
            />
          </div>
          <p className="vietqr-block-subtitle"></p>
        </div>
      </div>
    </footer>
  );
}

export default FooterPayment;
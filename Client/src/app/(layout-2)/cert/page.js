"use client";
import { Card } from "antd";
import Image from "next/image";
import images from "../../../assets";
import config from "../../../config";

export default function Home() {
  return (
    <div className="container">
      <div>
        <div className={"grid"}>
          <div className={"card-content"}>
            <div className={"card-content card-inner"}>
              <div className={"plan"}>
                <p className="sale-text">SALE 20%</p>

                <Image
                  src={images.banner}
                  alt="image"
                  layout="responsive"
                  className="img-banner"
                />
                <Image
                  src={images.signApple}
                  alt="image-123"
                  layout="responsive"
                  className="img-apple"
                />
                <p className="price-sale">79.000đ</p>
              </div>
              <p className="only-price">Chỉ Còn:</p>
              <div className="patterns">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern
                      id="polka-dots"
                      x="0"
                      y="0"
                      width="100"
                      height="100"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                    </pattern>
                    <style>
                      @import url("https://fonts.googleapis.com/css?
                      family=Lora:400,400i,700,700i");
                    </style>
                  </defs>

                  <text x="50%" y="40%" textAnchor="middle">
                    50.000đ
                  </text>
                </svg>
              </div>
              <div className="footerr-bg"></div>
            </div>
            <div className="card__body">
              <ul className="plan__list">
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🚀 Gói
                  ưu đãi kích hoạt sau 𝟕𝟐 giờ!
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>📱 Hỗ
                  Trợ 𝑰𝑶𝑺 𝟏𝟔-𝟏𝟖 𝒊𝑷𝒉𝒐𝒏𝒆 𝒗𝒔 𝒊𝑷𝒂𝒅
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🕒 Sử
                  dụng 𝟑𝟔𝟓 ngày{" "}
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🔐 Ký
                  IPA, nhân bản ứng dụng
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🗓️ Hiệu
                  lực 𝟏 năm
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🔧 Bảo
                  hành 𝟏𝟎𝟎 ngày
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🌟 Được
                  Nhận 𝑲𝒉𝒐 𝑮𝒂𝒎𝒆 𝑳𝑒̂𝒏 Đến 𝟏.𝟎𝟎𝟎 𝑨𝑷𝑷 𝑯𝒂𝒄𝒌
                </li>

                <li className="plan__item block">
                  <i className="plan__tick ri-close-circle-line"></i>Không hỗ
                  trợ thiết bị Blacklist, Bị Apple Ban, Thiết bị Bypass
                </li>
              </ul>
            </div>
            <a className="btn-primary-buy" href={config.routesSocial.zalo}>
              Mua Ngay
            </a>
          </div>
          <div className={"card-content"}>
            <div className={"card-content card-inner"}>
              <div className={"plan"}>
                <p className="sale-text">SALE 20%</p>

                <Image
                  src={images.banner}
                  alt="image"
                  layout="responsive"
                  className="img-banner"
                />
                <Image
                  src={images.signApple}
                  alt="image"
                  layout="responsive"
                  className="img-apple"
                />
                <p className="price-sale">99.000đ</p>
              </div>
              <p className="only-price">Chỉ Còn:</p>
              <div className="patterns">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern
                      id="polka-dots"
                      x="0"
                      y="0"
                      width="100"
                      height="100"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                    </pattern>
                    <style>
                      @import url("https://fonts.googleapis.com/css?
                      family=Lora:400,400i,700,700i");
                    </style>
                  </defs>

                  <text x="50%" y="40%" textAnchor="middle">
                    79.000đ
                  </text>
                </svg>
              </div>
              <div className="footerr-bg"></div>
            </div>
            <div className="card__body">
              <ul className="plan__list">
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🚀 Chứng
                  chỉ cấp trong 𝟕𝟐 giờ!
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🕒 Sử
                  dụng lên đến 365 ngày.
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>📱 Hỗ
                  Trợ 𝑰𝑶𝑺 𝟏𝟔-𝟏𝟖 𝒊𝑷𝒉𝒐𝒏𝒆 𝒗𝒔 𝒊𝑷𝒂𝒅
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🔐 Ký
                  IPA không giới hạn.
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🔄 Nhân
                  bản ứng dụng dễ dàng.
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🛠️ Bảo
                  hành 𝟏𝟓𝟎 ngày, cấp lại ngay.
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🌟 Được
                  Nhận 𝑲𝒉𝒐 𝑮𝒂𝒎𝒆 𝑳𝑒̂𝒏 Đến 𝟏.𝟎𝟎𝟎 𝑨𝑷𝑷 𝑯𝒂𝒄𝒌
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🌟 Chứng
                  chỉ hàng đầu tại Việt Nam!
                </li>

                <li className="plan__item block">
                  <i className="plan__tick ri-close-circle-line"></i>Không hỗ
                  trợ thiết bị Blacklist, Bị Apple Ban, Thiết bị Bypass
                </li>
              </ul>
              <button className="btn-primary-buy">Mua Ngay</button>
            </div>
          </div>
          <div className={"card-content card-child-3"}>
            <div className={"card-content card-inner"}>
              <div className={"plan"}>
                <p className="sale-text">SALE 35%</p>

                <Image
                  src={images.banner}
                  alt="image"
                  layout="responsive"
                  className="img-banner"
                />
                <Image
                  src={images.signApple}
                  alt="image"
                  layout="responsive"
                  className="img-apple"
                />
                <p className="price-sale">150.000đ</p>
              </div>
              <p className="only-price">Chỉ Còn:</p>
              <div className="patterns">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern
                      id="polka-dots"
                      x="0"
                      y="0"
                      width="100"
                      height="100"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                    </pattern>
                    <style>
                      @import url("https://fonts.googleapis.com/css?
                      family=Lora:400,400i,700,700i");
                    </style>
                  </defs>

                  <text x="50%" y="40%" textAnchor="middle">
                    100.000đ
                  </text>
                </svg>
              </div>
              <div className="footerr-bg"></div>
            </div>
            <div className="card__body">
              <ul className="plan__list">
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🚀 Chứng
                  chỉ cấp trong 𝟕𝟐 giờ!
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🕒 Sử
                  dụng lên đến 𝟑𝟔𝟓 ngày.
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>📱 Hỗ
                  Trợ 𝑰𝑶𝑺 𝟏𝟔-𝟏𝟖 𝒊𝑷𝒉𝒐𝒏𝒆 𝒗𝒔 𝒊𝑷𝒂𝒅
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🔐 Ký
                  IPA không giới hạn.
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🔄 Nhân
                  bản ứng dụng dễ dàng.
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🛠️ Bảo
                  hành 𝟑𝟎𝟎 ngày, cấp lại ngay.
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🌟 Chứng
                  chỉ hàng đầu tại Việt Nam!
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i>🌟 Được
                  Nhận 𝑲𝒉𝒐 𝑮𝒂𝒎𝒆 𝑳𝑒̂𝒏 Đến 𝟑.𝟎𝟎𝟎 𝑨𝑷𝑷 𝑯𝒂𝒄𝒌
                </li>
                <li className="plan__item">
                  <i className="plan__tick ri-checkbox-circle-line"></i> 𝑨𝑷𝑷𝑳𝑬
                </li>
                <li className="plan__item block">
                  <i className="plan__tick ri-close-circle-line"></i>Không hỗ
                  trợ thiết bị Blacklist, Bị Apple Ban, Thiết bị Bypass
                </li>
              </ul>
              <button className="btn-primary-buy">Mua Ngay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

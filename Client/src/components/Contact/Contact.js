"use client";
import { FaceBookICcon, PhonneIcon, ZaloIcon } from "../../assets/Icons/Icons";

function Contact() {
  return (
    <footer className="bg-light text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <p className="text-footer">- Liên Hệ Với Chúng Tôi -</p>
          <a href="#!" role="button" className="wrapper-icon-social">
            <FaceBookICcon className="icon-social" />
          </a>

          <a href="#!" role="button" className="wrapper-icon-social">
            <ZaloIcon className="icon-social" />
          </a>

          <a href="#!" role="button" className="wrapper-icon-social">
            <PhonneIcon className="icon-social" />
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © VUDUCANH
      </div>
    </footer>
  );
}

export default Contact;

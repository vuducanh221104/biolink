'use client';
import { FaceBookICcon, PhonneIcon, TelegramIcon, ZaloIcon } from '../../assets/Icons/Icons';

function Contact({ dict }) {
    return (
        <footer className="bg-light text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <p className="text-footer">- {dict.cert.contact.contactUs} -</p>
                    <a
                        target="_blank"
                        href="https://www.facebook.com/daodinhha97?mibextid=LQQJ4d"
                        role="button"
                        className="wrapper-icon-social"
                    >
                        <FaceBookICcon className="icon-social" />
                    </a>

                    <a target="_blank" href="https://zalo.me/84967890629" role="button" className="wrapper-icon-social">
                        <ZaloIcon className="icon-social" />
                    </a>

                    <a target="_blank" href="https://t.me/vuducanh21" role="button" className="wrapper-icon-social">
                        <TelegramIcon className="icon-social" />
                    </a>
                </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © VUDUCANH
            </div>
        </footer>
    );
}

export default Contact;

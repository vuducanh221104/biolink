'use client';
import Image from 'next/image';
import images from '../../assets';
import config from '../../config';
import FooterPayment from '../../components/FooterPayment';
import Contact from '../../components/Contact';
import Navbar from '../../components/Navbar';

export default function CertHome({ dict, lang }) {
    return (
        <>
            <Navbar dict={dict} lang={lang} isCertPage={true} />
            <div className="container">
                <div id={'cert-buy'}>
                    <div className={'grid'}>
                        <div className={'card-content'}>
                            <div className={'card-content card-inner'}>
                                <div className={'plan'}>
                                    <p className="sale-text">{dict.cert.package1.saleHeader}</p>

                                    <Image src={images.banner} alt="image" layout="responsive" className="img-banner" />
                                    <Image
                                        src={images.signApple}
                                        alt="image-123"
                                        layout="responsive"
                                        className="img-apple"
                                    />
                                    <p className="price-sale">{dict.cert.package1.priceOrignal}</p>
                                </div>
                                <p className="only-price">{dict.cert.only}</p>
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
                                        </defs>

                                        <text x="50%" y="40%" textAnchor="middle">
                                            {dict.cert.package1.priceDiscount}
                                        </text>
                                    </svg>
                                </div>
                                <div className="footerr-bg"></div>
                            </div>
                            <div className="card__body">
                                <ul className="plan__list">
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>{' '}
                                        {dict.cert.package1.mess1}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>{' '}
                                        {dict.cert.package1.mess2}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>{' '}
                                        {dict.cert.package1.mess3}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>{' '}
                                        {dict.cert.package1.mess4}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>{' '}
                                        {dict.cert.package1.mess5}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>{' '}
                                        {dict.cert.package1.mess6}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>{' '}
                                        {dict.cert.package1.mess7}
                                    </li>

                                    <li className="plan__item block">
                                        <i className="plan__tick ri-close-circle-line"></i> {dict.cert.package1.mess8}
                                    </li>
                                </ul>
                            </div>
                            <a className="btn-primary-buy" href={config.routesSocial.zalo}>
                                {dict.cert.buyNow}
                            </a>
                        </div>
                        <div className={'card-content'}>
                            <div className={'card-content card-inner'}>
                                <div className={'plan'}>
                                    <p className="sale-text">{dict.cert.package2.saleHeader}</p>

                                    <Image src={images.banner} alt="image" layout="responsive" className="img-banner" />
                                    <Image
                                        src={images.signApple}
                                        alt="image"
                                        layout="responsive"
                                        className="img-apple"
                                    />
                                    <p className="price-sale">{dict.cert.package2.priceOrignal}</p>
                                </div>
                                <p className="only-price">{dict.cert.only}</p>
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
                                        </defs>

                                        <text x="50%" y="40%" textAnchor="middle">
                                            {dict.cert.package2.priceDiscount}
                                        </text>
                                    </svg>
                                </div>
                                <div className="footerr-bg"></div>
                            </div>
                            <div className="card__body">
                                <ul className="plan__list">
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>{' '}
                                        {dict.cert.package2.mess1}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>{' '}
                                        {dict.cert.package2.mess2}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>{' '}
                                        {dict.cert.package2.mess3}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package2.mess4}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package2.mess5}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package2.mess6}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package2.mess7}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package2.mess8}
                                    </li>

                                    <li className="plan__item block">
                                        <i className="plan__tick ri-close-circle-line"></i>
                                        {dict.cert.package2.mess9}
                                    </li>
                                </ul>
                                <button className="btn-primary-buy">{dict.cert.buyNow}</button>
                            </div>
                        </div>
                        <div className={'card-content card-child-3'}>
                            <div className={'card-content card-inner'}>
                                <div className={'plan'}>
                                    <p className="sale-text">{dict.cert.package3.saleHeader}</p>

                                    <Image src={images.banner} alt="image" layout="responsive" className="img-banner" />
                                    <Image
                                        src={images.signApple}
                                        alt="image"
                                        layout="responsive"
                                        className="img-apple"
                                    />
                                    <p className="price-sale">{dict.cert.package3.priceOrignal}</p>
                                </div>
                                <p className="only-price">{dict.cert.only}</p>
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
                                        </defs>

                                        <text x="50%" y="40%" textAnchor="middle">
                                            {dict.cert.package3.priceDiscount}
                                        </text>
                                    </svg>
                                </div>
                                <div className="footerr-bg"></div>
                            </div>
                            <div className="card__body">
                                <ul className="plan__list">
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package3.mess1}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package3.mess2}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package3.mess3}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package3.mess4}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package3.mess5}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package3.mess6}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package3.mess7}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package3.mess8}
                                    </li>
                                    <li className="plan__item">
                                        <i className="plan__tick ri-checkbox-circle-line"></i>
                                        {dict.cert.package3.mess9}
                                    </li>
                                    <li className="plan__item block">
                                        <i className="plan__tick ri-close-circle-line"></i>
                                        {dict.cert.package3.mess10}
                                    </li>
                                </ul>
                                <button className="btn-primary-buy">{dict.cert.buyNow}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact dict={dict} />
            <FooterPayment dict={dict} />
        </>
    );
}

import React from "react";
import whitelogo from "../../assets/HeaderLogo/whitelogo.png";
const Footer = () => {
    return (
        <div className="w-full h-full relative">
            <div className="px-48 py-20 flex flex-row bg-[#343280] w-full h-auto justify-center items-center gap-2">
                <div className="container flex h-60 w-full justify-start items-start">
                    <ul className="text-white">
                        <li>
                            <img
                                className="h-20 mb-4"
                                src={whitelogo}
                                alt="Niksa Metal"
                            />
                        </li>
                        <li>
                            <a
                                className="text-xl"
                                href="hakkimizda"
                                target="blank"
                            >
                                Hakkımızda
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-xl"
                                href="urunler"
                                target="blank"
                            >
                                Ürünler
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-xl"
                                href="iletisim"
                                target="blank"
                            >
                                İletişim
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <div className="flex h-60 w-full justify-center items-starts">
                <ul className="text-white">
                    <li>
                        <h4 className="font-bold text-2xl text-white mb-5">
                            KVKK
                        </h4>
                    </li>
                    <li>Lorem İpsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div> */}
                {/* <div className="flex h-60 w-full justify-center items-starts">
                <ul className="text-white">
                    <li>
                        <h4 className="font-bold text-2xl text-white mb-5">
                            Blog & Haberler
                        </h4>
                    </li>
                    <li>Lorem İpsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div> */}
                <div className="flex h-60 w-full justify-end items-starts">
                    <ul className="text-white">
                        <li>
                            <h4 className="font-bold text-2xl text-white mb-5">
                                Bizimle İletişime Geçin
                            </h4>
                        </li>
                        <li>
                            <a href="tel:0555 831 30 66" target="blank">
                                0555 831 30 66
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/905332014873" target="blank">
                                0533 201 48 73
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@niksametal.com" target="blank">
                                info@niksametal.com
                            </a>
                        </li>
                        <li>
                            Hacıvat Mh. 5. Aksu Sk. No: 41/7 Yıldırım / BURSA
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-black px-10 opacity-30 h-10 bottom-0 w-full absolute flex justify-end items-center">
                <p className="z-50 text-white  text-sm">Copyrigte</p>
            </div>
        </div>
    );
};

export default Footer;

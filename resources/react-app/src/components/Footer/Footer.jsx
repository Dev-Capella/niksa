import React from "react";

const Footer = () => {
    return (
        <div className=" px-48 py-20 flex flex-row bg-[#343280] w-full h-auto justify-center items-center gap-2">
            <div className=" flex h-60 w-full justify-center items-starts">
                <ul className="text-white">
                    <li>
                        <h3 className="font-bold text-2xl text-white mb-5">
                            Hakkımızda
                        </h3>
                    </li>
                    <li>Biz Kimiz?</li>
                    <li>Misyon</li>
                    <li>Vizyon</li>
                    <li>Üretim Tesisimiz</li>
                    <li>Kalite Anlayışımız</li>
                </ul>
            </div>
            <div className="flex h-60 w-full justify-center items-starts">
                <ul className="text-white">
                    <li>
                        <h3 className="font-bold text-2xl text-white mb-5">
                            Ürünler
                        </h3>
                    </li>
                    <li>Lorem İpsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div>
            <div className="flex h-60 w-full justify-center items-starts">
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
            </div>
            <div className="flex h-60 w-full justify-center items-starts">
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
            </div>
            <div className="flex h-60 w-full justify-center items-starts">
                <ul className="text-white">
                    <li>
                        <h4 className="font-bold text-2xl text-white mb-5">
                            İletişim
                        </h4>
                    </li>
                    <li>Lorem İpsum</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;

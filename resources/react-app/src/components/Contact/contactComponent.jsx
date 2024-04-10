import React from "react";
import { BsSend } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const contactComponent = () => {
    return (
        <div className=" border-radius-6px box-shadow-double-large flex flex-col justify-center items-center -mt-16 mb-8 relative z-10">
            <div className=" bg-white flex flex-col justify-center w-[61rem] shadow-2xl pl-20 pr-20 pt-20 pb-20 rounded">
                <div className="flex flex-row justify-between items-center  pb-10">
                    <p className="font-semibold text-gray-800 text-5xl ">
                        Bizimle iletişime geç
                    </p>
                    <BsSend size={56} className="text-gray-600" />
                </div>
                <div className="flex flex-col justify-between ">
                    <form className="flex flex-col justify-between gap-4  ">
                        <div className="flex flex-row justify-between gap-4">
                            <input
                                className=" pt-3 pb-3 pl-6 pr-6 w-full border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0 "
                                type="text"
                                placeholder="Ad*"
                                required
                            />
                            <input
                                className=" pt-3 pb-3 pl-6 pr-6 w-full border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0"
                                type="email"
                                placeholder="Mail*"
                                required
                            />
                        </div>
                        <div className="flex flex-row justify-between gap-4 pt-4">
                            <input
                                className=" pt-3 pb-3 pl-6 w-full pr-6 border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0"
                                type="tel"
                                placeholder="Telefon"
                                required
                            />
                            <input
                                className=" pt-3 pb-3 pl-6 w-full pr-6 border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0"
                                type="text"
                                placeholder="Konu"
                                required
                            />
                        </div>
                        <div className="flex justify-center gap-4 pt-4">
                            <textarea
                                className="w-full pt-3 pb-3 pl-6 pr-6 border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0"
                                name="subject"
                                id=""
                                cols="40"
                                rows="4"
                                placeholder="Mesajın"
                            ></textarea>
                        </div>
                        <div className="flex flex-row justify-between pt-7 ">
                            <p className="w-full max-w-xl break-words text-gray-400 text-sm font-medium ">
                                Gizliliğinizi korumayı taahhüt ediyoruz. Açık
                                izniniz olmadan asla hakkınızda bilgi
                                toplamayacağız.
                            </p>
                            <button className="bg-[#343280] hover:bg-[#2b2969] font-semibold text-sm text-white  h-12 w-36 rounded-full">
                                Gönder
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex flex-row  justify-center items-center mt-24 mb-8 w-full gap-8">
                <p className="font-semibold text-2xl">
                    Bize sosyal medyadan ulaşın{" "}
                </p>
                <hr className=" border-t w-56 border-gray-300" />
                <FaFacebook
                    size={32}
                    className="hover:text-blue-500 transition-all duration-300"
                />
                <FaInstagram
                    size={34}
                    className="hover:text-[#F60485]  transition-all
                    duration-300"
                />
                <IoLogoYoutube
                    size={34}
                    className="hover:text-[#FF0000]
                transition-all
                duration-300
                "
                />
            </div>
        </div>
    );
};

export default contactComponent;

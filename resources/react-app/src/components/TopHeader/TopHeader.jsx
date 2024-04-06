import React from "react";
import phone from "../../assets/phone-call.png";
import mail from "../../assets/email.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import { BsSearch } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { useState } from "react";

const TopHeader = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const changeLanguage = (lang) => {
        setLangOpen(false);
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };
    return (
        <div className="flex flex-row bg-green-500 justify-between items-center w-full h-11 relative">
            <div className="container mx-auto flex flex-row justify-between">
                <div>
                    <p className="text-gray-600 font-medium italic text-base">
                        Niksa Metal A.Ş
                    </p>
                </div>

                <div className="flex flex-row ">
                    <ul className="flex flex-row items-center gap-2">
                        <li>
                            <FaSquarePhoneFlip />
                        </li>
                        <li className="text-white text-base hover:text-black  transition-colors duration-300 ease-in-out">
                            444 70 70
                        </li>
                        <li>
                            <img src={youtube} alt="CompanyMail"></img>
                        </li>
                        <li className="text-white text-base hover:text-black  transition-colors duration-300 ease-in-out">
                            <a href="">info@niksateknikmetal.com.tr </a>
                        </li>
                    </ul>
                    <div className="flex  flex-row ml-5">
                        <ul className="flex flex-row items-center gap-3">
                            <li>
                                <a href="/">
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FaYoutube />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        src={twitter}
                                        alt="CompanyTwitter"
                                    ></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-2 relative ml-10">
                        <BsSearch
                            onClick={() => setOpenSearch(true)}
                            className="text-2xl text-black cursor-pointer hover:text-slate-700 duration-150 delay-200"
                        />
                        <GrLanguage
                            className="text-2xl text-black cursor-pointer hover:text-slate-400 duration-150 delay-200"
                            onMouseEnter={() => setLangOpen(true)}
                        />
                        {langOpen && (
                            <>
                                <IoMdArrowDropdown className="text-[#FF855A] absolute top-4 text-4xl left-[1.6rem]" />
                                <div
                                    onMouseLeave={() => setLangOpen(false)}
                                    className="absolute z-50 mt-10 bg-white border-2 border-orange-100 shadow-sm left-[1.6rem]"
                                >
                                    <p
                                        className="text-black cursor-pointer hover:bg-orange-100 p-2"
                                        onClick={() => changeLanguage("tr")}
                                    >
                                        TR
                                    </p>
                                    <p
                                        className="text-black cursor-pointer mt-2 hover:bg-orange-100 p-2"
                                        onClick={() => changeLanguage("en")}
                                    >
                                        EN
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;

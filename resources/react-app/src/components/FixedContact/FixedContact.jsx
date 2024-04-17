import React, { useState } from "react";
import support from "../../assets/FixedContact/destek.png";
import phone from "../../assets/FixedContact/phonefix.png";
import wp from "../../assets/FixedContact/wp.png";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import "./fixedContact.css";

function FixedContact() {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const { t, i18n } = useTranslation();
    return (
        <div className="max-md:hidden">
            <div className="fixed z-40 right-4 top-[170px]">
                <div
                    className="flex justify-center items-center mt-2"
                    onMouseEnter={() => setHover1(true)}
                    onMouseLeave={() => setHover1(false)}
                >
                    <FaWhatsapp
                        className={
                            hover1
                                ? "kay cursor-pointer right-[2%] w-[36px] h-[36px]"
                                : "cursor-pointer w-[36px] h-[36px]"
                        }
                    />

                    <div
                        className={
                            !hover1
                                ? "hidden"
                                : "kaydirilan-div visible bg-[#343280]  py-2 px-5 shadow-md rounded-sm w-40"
                        }
                    >
                        <a
                            className="text-white"
                            href="https://wa.me/+905332014873"
                        >
                            0533 201 48 73
                        </a>
                    </div>
                </div>
            </div>
            <div className="fixed z-40 right-4 top-[220px]">
                <div
                    className="flex justify-center items-center mt-2"
                    onMouseEnter={() => setHover3(true)}
                    onMouseLeave={() => setHover3(false)}
                >
                    <FaPhone
                        className={
                            hover3
                                ? "kay cursor-pointer right-[2%] w-[32px] h-[32px]"
                                : "w-[32px] h-[32px] cursor-pointer"
                        }
                    />

                    <div
                        className={
                            !hover3
                                ? "hidden"
                                : "kaydirilan-div visible bg-[#343280]  py-2 px-5 shadow-md rounded-sm w-40"
                        }
                    >
                        <a className="text-white" href="tel:05558313066">
                            0555 831 30 66
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FixedContact;

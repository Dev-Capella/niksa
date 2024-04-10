import React from "react";
import { useState, useEffect } from "react";
import HeaderLogo from "../../assets/HeaderLogo/headerlogo.png";
import { GrLanguage } from "react-icons/gr";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);

    return (
        <nav
            className={
                navbar
                    ? "flex flex-row items-center justify-center h-24 w-full gap-24 fixed top-0 z-[9999] bg-[#343280] transition-all duration-500"
                    : "bg-transparent transition-all duration-500"
            }
        >
            <div className="flex flex-row items-center justify-center h-24 w-full gap-24 fixed top-0 z-[9999] bg-transparent">
                <img
                    className="max-w-none max-h-28 "
                    src={HeaderLogo}
                    alt="Header"
                ></img>
                <div>
                    <ul className="flex flex-row justify-around items-center gap-24 ">
                        <li className="font-bold text-base text-center text-white max-xl:text-xs w-full nav-item">
                            <a href="/"> ANASAYFA</a>
                        </li>
                        <li className="font-bold text-base text-center text-white max-xl:text-xs w-full nav-item">
                            <a href="about"> HAKKIMIZDA </a>
                        </li>
                        <li className="font-bold text-base text-center text-white max-xl:text-xs w-full nav-item">
                            <a href="/corporate"> KURUMSAL</a>
                        </li>
                        <li className="font-bold text-base text-center text-white max-xl:text-xs w-full nav-item">
                            <a href=""> ÜRÜNLER </a>
                        </li>
                        <li className="font-bold text-base text-center text-white max-xl:text-xs w-full nav-item">
                            <a href=""> HİZMETLER</a>
                        </li>
                        <li className="font-bold text-base text-center text-white max-xl:text-xs w-full nav-item">
                            <a href=""> PROJELER </a>
                        </li>
                        <li className="font-bold text-base text-center text-white max-xl:text-xs w-full nav-item">
                            <a href="/contact"> İLETİŞİM</a>
                        </li>
                        <div>
                            <GrLanguage className="w-6 h-6" />
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

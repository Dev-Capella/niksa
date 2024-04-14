import React from "react";
import { useState, useEffect } from "react";
import HeaderLogo from "../../assets/HeaderLogo/headerlogo.png";

import { Link } from "react-router-dom";

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
                    ? "  flex flex-row items-center justify-between h-24 w-full fixed top-0 z-[9999] bg-[#343280] transition-all duration-500"
                    : "bg-transparent transition-all duration-500"
            }
        >
            <div className="  flex flex-row items-center justify-between h-24 w-full  fixed top-0 z-[9999] bg-transparent">
                <img
                    className="max-w-none max-h-28 "
                    src={HeaderLogo}
                    alt="Header"
                ></img>
                <div>
                    <ul className="flex flex-row justify-around items-center gap-48 ">
                        <li className="font-bold text-base text-center text-white max-xl:text-xs w-full nav-item">
                            <Link to={"/"}>ANASAYFA </Link>
                        </li>
                        <li className="font-bold text-base text-center text-white max-xl:text-xs w-full nav-item">
                            <Link to={"/product"}>ÜRÜNLER </Link>
                        </li>

                        <li className="font-bold text-base text-center text-white max-xl:text-xs w-full nav-item">
                            <Link to={"/about"}>HAKKIMIZDA </Link>
                        </li>

                        <li className="font-bold text-base text-center text-white max-xl:text-xs w-full nav-item">
                            <Link to={"/contact"}>İLETİŞİM </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

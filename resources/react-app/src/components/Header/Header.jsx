import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderLogo from "../../assets/HeaderLogo/headerlogo.png";
import whitelogo from "../../assets/HeaderLogo/whitelogo.png";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [navItem, setNavItem] = useState(" ");
    const navigate = useNavigate();
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    const slug = window.location.pathname;
    useEffect(() => {
        setNavItem(slug);
    }, [slug]);
    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);
    const navigation = [
        { name: "Anasayfa", href: "/" },
        { name: "Hakkımızda", href: "/hakkimizda" },
        { name: "Ürünlerimiz", href: "/urunler" },
        { name: "İletişim", href: "/iletisim" },
    ];
    const isMobile = window.innerWidth <= 768;

    useEffect(() => {}, [slug]);
    return (
        <Disclosure
            as="nav"
            className={`absolute top-0 z-50 w-full max-sm:relative max-md:bg-white ${
                !isMobile && navbar
                    ? "sticky top-0 bg-white shadow-md z-[99999] transition-all duration-500"
                    : ""
            }`}
            style={{ top: !isMobile && navbar ? "0" : "" }}
        >
            {({ open }) => (
                <>
                    <div className="mx-auto px-2   max-xl:mx-0 max-xl:px-0 ">
                        <div
                            className={
                                navbar
                                    ? "relative flex sm:h-auto h-auto items-center justify-between transition-all duration-500 "
                                    : "relative flex sm:h-20 h-16 items-center justify-between"
                            }
                        >
                            <div className="absolute flex-row inset-y-0 left-0 flex items-center md:hidden justify-between w-full px-6">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex  items-center justify-center p-2 text-slate-700 ring-2 ring-inset ring-white max-md:mt-2">
                                    <div
                                        className={`hamburger-menu ${
                                            open ? "open" : ""
                                        }`}
                                    >
                                        <span className="line"></span>
                                        <span className="line"></span>
                                        <span className="line"></span>
                                    </div>
                                </Disclosure.Button>
                                <img
                                    className="block lg:hidden h-12"
                                    src={HeaderLogo}
                                    onClick={() => navigate("/")}
                                    alt="Niksa Metal"
                                />
                            </div>
                            <div className="flex items-center justify-center sm:items-stretch sm:justify-around text-[#191919] font-semibold w-full ">
                                <div className="hidden sm:ml-6 md:block w-[85%] max-xl:w-full">
                                    <div
                                        className={`flex justify-between items-center max-xl:text-sm max-lg:px-10 ${
                                            navbar ? "" : "mt-8"
                                        } max-xl:px-10`}
                                    >
                                        {navbar ? (
                                            <div className="flex flex-shrink-0 items-center max-xl:w-32 w-52">
                                                <a href="/">
                                                    <img
                                                        className="block w-auto lg:hidden"
                                                        src={HeaderLogo}
                                                        alt="Niksa Metal"
                                                    />
                                                </a>
                                                <a href="/">
                                                    <img
                                                        className="hidden w-auto lg:block"
                                                        src={HeaderLogo}
                                                        alt="Niksa Metal"
                                                    />
                                                </a>
                                            </div>
                                        ) : (
                                            <div className="flex flex-shrink-0 items-center max-xl:w-32 w-52">
                                                <a href="/">
                                                    <img
                                                        className="block w-auto lg:hidden"
                                                        src={whitelogo}
                                                        alt="Niksa Metal"
                                                    />
                                                </a>
                                                <a href="/">
                                                    <img
                                                        className="hidden w-auto lg:block"
                                                        src={whitelogo}
                                                        alt="Niksa Metal"
                                                    />
                                                </a>
                                            </div>
                                        )}

                                        <div className="w-full flex justify-end items-center text-white gap-16 max-lg:gap-10">
                                            <a
                                                className={
                                                    navItem === "/"
                                                        ? `text-base font-semibold underline-offset-8 ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium ${
                                                              navbar
                                                                  ? "text-black text-with-underline2"
                                                                  : "text-with-underline"
                                                          }`
                                                }
                                                href="/"
                                            >
                                                Anasayfa
                                            </a>
                                            <a
                                                className={
                                                    navItem === "/hakkimizda"
                                                        ? `text-base font-semibold underline-offset-8 ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium ${
                                                              navbar
                                                                  ? "text-black text-with-underline2"
                                                                  : "text-with-underline"
                                                          }`
                                                }
                                                href="/hakkimizda"
                                            >
                                                Hakkımızda
                                            </a>
                                            <a
                                                className={
                                                    navItem === "/urunler"
                                                        ? `text-base font-semibold underline-offset-8 ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium ${
                                                              navbar
                                                                  ? "text-black text-with-underline2"
                                                                  : "text-with-underline"
                                                          }`
                                                }
                                                href="/urunler"
                                            >
                                                Ürünlerimiz
                                            </a>

                                            <a
                                                className={
                                                    navItem === "/iletisim"
                                                        ? `text-base font-semibold underline-offset-8 ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium ${
                                                              navbar
                                                                  ? "text-black"
                                                                  : "text-with-underline"
                                                          }`
                                                }
                                                href="/iletisim"
                                            >
                                                İletişim
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel
                        className={`md:hidden  opacity-0 duration-200 delay-200 ${
                            open ? "opacity-95" : "opacity-0"
                        }`}
                    >
                        <div className="space-y-1 px-2 pt-2 pb-3 navbar-open-close">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    target={item.target ? "_blank" : ""}
                                    className="block px-3 py-2 rounded-md  font-medium"
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                            {/* <div className="flex justify-start items-center px-3 py-2 gap-5">
                                <p
                                    className={`${
                                        i18n.language === "en"
                                            ? "cursor-pointer font-bold"
                                            : "cursor-pointer hover:scale-105 duration-200 delay-200 hover:opacity-50"
                                    }`}
                                    onClick={() => changeLanguage("en")}
                                >
                                    ENG
                                </p>
                                /
                                <p
                                    className={`${
                                        i18n.language === "tr"
                                            ? "cursor-pointer font-bold"
                                            : "cursor-pointer hover:scale-105 duration-200 delay-200 hover:opacity-50"
                                    }`}
                                    onClick={() => changeLanguage("tr")}
                                >
                                    TR
                                </p>
                            </div> */}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Header;

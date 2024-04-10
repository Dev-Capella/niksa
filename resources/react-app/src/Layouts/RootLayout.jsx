import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <Header />
            <>
                {/* Buradaki div'e genel container css verilebilir. */}
                <Outlet />
            </>
            <Footer />
        </>
    );
};

export default RootLayout;

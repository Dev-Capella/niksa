import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import LoadingPage from "../components/Loading/Loading.jsx";

const RootLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // İletişim sayfası yüklenirken 2 saniye boyunca loading durumunu göster
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 900);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                <>
                    <Header />
                    <div>
                        <Outlet />
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
};

export default RootLayout;

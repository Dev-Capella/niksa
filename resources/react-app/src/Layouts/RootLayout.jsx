import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import LoadingPage from "../components/Loading/Loading.jsx";
import generalService from "../services/generalService.js";
const RootLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // İletişim sayfası yüklenirken 2 saniye boyunca loading durumunu göster
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 900);

        return () => clearTimeout(timeout);
    }, []);
    const [data, setData] = useState(null);
    const getCatalog = async () => {
        const result = await generalService.getCatalog();
        setData(result);
    };
    useEffect(() => {
        getCatalog();
    }, []);
    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                <>
                    <Header data={data} />
                    <div>
                        <Outlet />
                    </div>
                    <Footer data={data} />
                </>
            )}
        </>
    );
};

export default RootLayout;

import React from "react";
import Header from "../../components/Header/Header";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import Footer from "../../components/Footer/Footer";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import SloganBanner from "../../components/SloganBanner/SloganBanner";
import HomeContact from "../../components/HomeContact/HomeContact";

function Home() {
    return (
        <>
            <HeroCarousel />
            <ProductCarousel />
            <SloganBanner />
            <HomeContact />
            <AboutCompany />
        </>
    );
}

export default Home;

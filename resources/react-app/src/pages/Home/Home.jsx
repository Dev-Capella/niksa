import React from "react";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
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

import React from "react";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import SloganBanner from "../../components/SloganBanner/SloganBanner";
import ContactForm from "../../components/Contact/contactForm.jsx";

function Home() {
    return (
        <>
            <HeroCarousel />
            <ProductCarousel />
            <ContactForm />
            <AboutCompany />
        </>
    );
}

export default Home;

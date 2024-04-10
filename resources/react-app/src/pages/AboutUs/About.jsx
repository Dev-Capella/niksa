import React from "react";
import Header from "../../components/Header/Header";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import Footer from "../../components/Footer/Footer";
import AboutusComponent from "../../components/AboutusComponent/AboutusComponent";
import SloganBanner from "../../components/SloganBanner/SloganBanner";
import aboutus from "../../assets/kaynak1.jpg";

const About = () => {
    return (
        <>
            <BreadcrumbsNav imageSrc={aboutus} text={"Hakkımızda"} />
            <AboutusComponent />
            <SloganBanner />
        </>
    );
};

export default About;

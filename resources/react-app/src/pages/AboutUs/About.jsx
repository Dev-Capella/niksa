import React from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import AboutusComponent from "../../components/AboutUs/AboutusComponent";
import aboutus from "../../assets/kaynak1.jpg";

const About = () => {
    return (
        <>
            <BreadcrumbsNav imageSrc={aboutus} text={"Hakkımızda"} />
            <AboutusComponent />
        </>
    );
};

export default About;

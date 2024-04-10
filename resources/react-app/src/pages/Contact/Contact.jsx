import React from "react";
import aboutus from "../../assets/aboutus.png";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import ContactComponent from "../../components/Contact/contactComponent.jsx";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

const Contact = () => {
    return (
        <>
            <BreadcrumbsNav imageSrc={aboutus} text={"İletişim"} />
            <ContactComponent />
            <GoogleMap />
        </>
    );
};

export default Contact;

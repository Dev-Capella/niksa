import React, { useEffect } from "react";
import aboutus from "../../assets/contact/contactban.jpg";
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

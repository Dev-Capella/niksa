import React, { useEffect } from "react";
import aboutus from "../../assets/contact/contactban.jpg";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import ContactComponent from "../../components/Contact/contactComponent.jsx";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import { useTranslation } from "react-i18next";
const Contact = () => {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };

    return (
        <>
            <BreadcrumbsNav imageSrc={aboutus} text={"İletişim"} />
            <ContactComponent />
            <GoogleMap />
        </>
    );
};

export default Contact;

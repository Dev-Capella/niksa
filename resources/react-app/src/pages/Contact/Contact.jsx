import React from "react";
import aboutus from "../../assets/aboutus.png";
import Header from "../../components/Header/Header";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import ContactComponent from "../../components/Contact/contactComponent.jsx";
import Footer from "../../components/Footer/Footer";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

const Contact = () => {
    return (
        <div>
            <Header />
            <BreadcrumbsNav imageSrc={aboutus} text={"İletişim"} />
            <ContactComponent />
            <GoogleMap />
            <Footer />
        </div>
    );
};

export default Contact;

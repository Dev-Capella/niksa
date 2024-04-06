import React from "react";
import Header from "../../components/Header/Header";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import Footer from "../../components/Footer/Footer";
import aboutus from "../../assets/aboutus.png";

const Corporate = () => {
    return (
        <div>
            <Header />
            <BreadcrumbsNav imageSrc={aboutus} text={"Kurumsal"} />
            <Footer />
        </div>
    );
};

export default Corporate;

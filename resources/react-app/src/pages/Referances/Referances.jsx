import React from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import ReferancesComponent from "../../components/Referances/ReferancesComponent";
import { useTranslation } from "react-i18next";
import aboutus from "../../assets/contact/contactban.jpg";
const Referances = () => {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    return (
        <div>
            <>
                <BreadcrumbsNav imageSrc={aboutus} text={t("ReferanceBread")} />
                <ReferancesComponent />
            </>
        </div>
    );
};

export default Referances;

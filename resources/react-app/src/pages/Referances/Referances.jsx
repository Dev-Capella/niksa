import React from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import ReferancesComponent from "../../components/Referances/ReferancesComponent";
import { useTranslation } from "react-i18next";
import references from "../../assets/Referances/referances.jpg";
const Referances = () => {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    return (
        <div>
            <>
                <BreadcrumbsNav
                    imageSrc={references}
                    text={t("ReferanceBread")}
                />
                <ReferancesComponent />
            </>
        </div>
    );
};

export default Referances;

import React from "react";
import ActivitiesComponent from "../../components/Activities/ActivitiesComponent";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import { useTranslation } from "react-i18next";
import faaliyet from "../../assets/Activities/activities.jpg";
const Activities = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <BreadcrumbsNav imageSrc={faaliyet} text={t("ActivitiesBread")} />
            <ActivitiesComponent />
        </>
    );
};

export default Activities;

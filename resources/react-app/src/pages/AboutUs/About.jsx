import React, { useEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import AboutusBanner from "../../assets/AboutUs/aboutban1.jpg";
import AboutBanner from "../../assets/AboutUs/aboutbannerss.jpg";
import generalService from "../../services/generalService";
import { useTranslation } from "react-i18next";
const About = () => {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };

    const [data, setData] = useState(null);
    const [certificate, setCertificate] = useState(null);

    const getAboutus = async () => {
        const result = await generalService.getAboutUs();
        setData(result);
    };
    const getCertificate = async () => {
        const result = await generalService.getCertificate();
        setCertificate(result);
    };
    useEffect(() => {
        getAboutus();
        getCertificate();
    }, []);
    return (
        <>
            <BreadcrumbsNav imageSrc={AboutusBanner} text={data?.title} />
            <div className="flex justify-center items-center">
                {" "}
                <div className="container mx-atuo px-10 relative flex justify-between items-start mt-10">
                    <div className="relative  -top-32 w-2/6 max-lg:hidden">
                        <img
                            className=" w-full h-full"
                            src={AboutBanner}
                            alt="Banner Hakkımızda"
                        />
                    </div>

                    <div className="w-4/6 pl-10  max-md:pl-0 flex flex-col max-lg:w-full">
                        <p className="text-3xl max-md:text-xl">{data?.title}</p>
                        <div className="mt-5">
                            <div
                                className="text-lg max-md:text-base"
                                dangerouslySetInnerHTML={{
                                    __html: data?.content,
                                }}
                            />
                        </div>
                        <p className="text-3xl max-md:text-xl mt-5">
                            {t("AboutUsCertificate")}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-5">
                            {certificate?.map((item, i) => (
                                <div
                                    className="w-56 h-auto flex flex-col"
                                    key={i}
                                >
                                    <a href={item.image} target="blank">
                                        <img src={item.image} alt={item.name} />
                                    </a>
                                    <p className="pt-2">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;

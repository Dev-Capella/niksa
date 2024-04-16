import React, { useEffect, useState } from "react";
import Banner from "../../assets/SloganBanner/mainmenuimage.jpg";
import generalService from "../../services/generalService";

const SloganBanner = () => {
    const [data, setData] = useState(null);
    const getSlogan = async () => {
        const result = await generalService.getHomeSlogan();
        setData(result);
        console.log(result);
    };
    useEffect(() => {
        getSlogan();
    }, []);
    return (
        <div className="relative mb-16 w-full max-lg:w-full max-sm:w-full">
            <img
                className="w-full object-cover h-[35rem]"
                src={data?.image}
                alt="Banner"
            ></img>
            <div className="absolute inset-0 bg-black opacity-40 "></div>

            <h2 className="text-white font-bold text-7xl absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col">
                    <p className="font-bold text-center">{data?.title}</p>
                    <p className="text-xs font-normal">{data?.description}</p>
                </div>
            </h2>
        </div>
    );
};

export default SloganBanner;

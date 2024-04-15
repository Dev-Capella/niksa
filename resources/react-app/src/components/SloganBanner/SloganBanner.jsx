import React from "react";
import Banner from "../../assets/SloganBanner/banner2.jpg";

const SloganBanner = () => {
    return (
        <div className="relative mb-16 w-full max-lg:w-full max-sm:w-full">
            <img
                className="w-full object-cover h-96"
                src={Banner}
                alt="Banner"
            ></img>
            <div className="absolute inset-0 bg-black opacity-40 "></div>
            <h2 className="text-white font-bold text-7xl absolute inset-0 flex items-center justify-center">
                <p>Niksa Metal Makine Mobilya</p>
            </h2>
        </div>
    );
};

export default SloganBanner;

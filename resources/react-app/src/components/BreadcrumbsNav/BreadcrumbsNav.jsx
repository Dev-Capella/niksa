import React from "react";

const BreadcrumbsNav = ({ imageSrc, text }) => {
    return (
        <div className="relative">
            <img
                className="w-full object-cover h-96"
                src={imageSrc}
                alt={text}
            ></img>
            <div className="absolute inset-0 bg-black opacity-40 "></div>
            <h2 className="text-white font-bold text-7xl absolute inset-0 flex items-center justify-center">
                {text}
            </h2>
        </div>
    );
};

export default BreadcrumbsNav;

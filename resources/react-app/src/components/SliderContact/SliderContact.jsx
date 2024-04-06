import React from "react";
import phone from "../../assets/phone-call.png";
import mail from "../../assets/email.png";
import facebook from "../../assets/facebook.png";

const SliderContact = () => {
    return (
        <div className="container mx-auto">
            <div className="max-md:hidden">
                <div className="fixed z-40 right-4 top-[120px] group ">
                    <div className="flex justify-center items-center mt-2 transition-transform duration-3000">
                        <img
                            className="w-[45px] h-[45px] cursor-pointer transition-transform duration-1000 ease-in-out transform group-hover:translate-x-[-50%]"
                            src={phone}
                            alt="Phone"
                        />
                        <div className="hidden group-hover:block">
                            <a href="/">
                                <p className="text-black font-medium bg-green-500 transition-transform duration-3000">
                                    0555 831 30 66
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="fixed z-40 right-4 top-[170px] group">
                    <div className="flex justify-center items-center mt-2 transition-transform duration-3000">
                        <img
                            className="w-[45px] h-[45px] cursor-pointer transition-transform duration-1000  ease-out transform group-hover:translate-x-[-50%]"
                            src={mail}
                            alt="mail"
                        />
                        <div className="hidden group-hover:block">
                            <a className="text-black" href="/">
                                <p className="text-black font-medium bg-green-500 transition-transform duration-3000">
                                    info@niksametal.com
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="fixed z-40 right-4 top-[220px] group">
                    <div className="flex justify-center items-center mt-2 transition-transform duration-3000 ">
                        <img
                            className="w-[45px] h-[45px] cursor-pointer transition-transform duration-1000 transform group-hover:translate-x-[-50%]"
                            src={facebook}
                            alt="facebook"
                        />
                        <div className="hidden group-hover:block transition-transform duration-500">
                            <a className="text-black" href="/">
                                <p className="text-black font-medium bg-green-500 transition-transform duration-3000">
                                    {" "}
                                    Facebook
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderContact;

import React from "react";
import { BsSend } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import ContactForm from "../../components/Contact/contactForm";

const contactComponent = () => {
    return (
        <div className=" border-radius-6px box-shadow-double-large flex flex-col justify-center items-center -mt-16 mb-8 relative z-10">
            <ContactForm />
            <div className="flex flex-row  justify-center items-center mt-24 mb-8 w-full gap-8">
                <p className="font-semibold text-2xl">
                    Bize sosyal medyadan ulaşın{" "}
                </p>
                <hr className=" border-t w-56 border-gray-300" />
                <FaFacebook
                    size={32}
                    className="hover:text-blue-500 transition-all duration-300"
                />
                <FaInstagram
                    size={34}
                    className="hover:text-[#F60485]  transition-all
                    duration-300"
                />
                <IoLogoYoutube
                    size={34}
                    className="hover:text-[#FF0000]
                transition-all
                duration-300
                "
                />
            </div>
        </div>
    );
};

export default contactComponent;

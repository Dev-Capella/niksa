import React from "react";
import { BsSend } from "react-icons/bs";
const contactForm = () => {
    return (
        <div className="flex justify-center w-full">
            <div className=" bg-white flex flex-col justify-center w-[61rem] max-lg:w-10/12 max-lg:p-12 p-20 max-sm:w-full max-sm:p-4 max-sm:pt-20 max-sm:pb-20 max-sm:ml-2 max-sm:mr-2 shadow-2xl rounded">
                <div className="flex flex-row justify-between items-center  pb-10">
                    <p className="font-semibold text-gray-800  text-5xl max-lg:text-2xl max-sm:text-3xl">
                        Bizimle iletişime geç
                    </p>
                    <BsSend
                        size={56}
                        fill="black"
                        className="
                        text-gray-600 
                        max-sm:max-h-10
                        
                        "
                    />
                </div>
                <div className="flex flex-col justify-between ">
                    <form className="flex flex-col justify-between gap-4  ">
                        <div className="flex flex-row justify-between gap-4">
                            <input
                                className=" pt-3 pb-3 pl-6 pr-6 w-full  border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0 "
                                type="text"
                                placeholder="Ad*"
                                required
                            />
                            <input
                                className=" pt-3 pb-3 pl-6 pr-6 w-full  border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0"
                                type="email"
                                placeholder="Mail*"
                                required
                            />
                        </div>
                        <div className="flex flex-row justify-between gap-4 pt-4">
                            <input
                                className=" pt-3 pb-3 pl-6 w-full pr-6 border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0"
                                type="tel"
                                placeholder="Telefon"
                                required
                            />
                            <input
                                className=" pt-3 pb-3 pl-6 w-full pr-6 border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0"
                                type="text"
                                placeholder="Konu"
                                required
                            />
                        </div>
                        <div className="flex justify-center gap-4 pt-4">
                            <textarea
                                className="w-full pt-3 pb-3 pl-6 pr-6 border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0"
                                name="subject"
                                id=""
                                cols="40"
                                rows="4"
                                placeholder="Mesajın"
                            ></textarea>
                        </div>
                        <div className="flex flex-row justify-between pt-7 max-sm:gap-4 ">
                            <p className="w-full max-w-xl break-words text-gray-400 text-sm font-medium max-sm:text-xs ">
                                Gizliliğinizi korumayı taahhüt ediyoruz. Açık
                                izniniz olmadan asla hakkınızda bilgi
                                toplamayacağız.
                            </p>
                            <button className="bg-[#343280] hover:bg-[#2b2969] font-semibold text-sm text-white  h-12 w-36 max-sm:w-48 rounded-full transition duration-300 transform hover:translate-y-1">
                                Gönder
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default contactForm;

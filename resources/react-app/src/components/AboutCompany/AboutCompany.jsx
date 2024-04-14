import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiStarMedal } from "react-icons/gi";
import { GiFlyingTarget } from "react-icons/gi";
import { MdFactory } from "react-icons/md";
import { GiFlyingFlag } from "react-icons/gi";

const AboutCompany = () => {
    return (
        <div className="mt-24 mb-24 w-full h-auto relative flex justify-center items-center bg-[#f8f8f8]">
            <div className="z-50 flex flex-wrap justify-center items-center px-4 py-28 gap-10 max-2xl:px-12 max-xl:px-2 max-xl:py-24  max-md:py-4  max-md:gap-10 max-xl:grid-cols-3 max-sm:grid-cols-1 max-sm:py-12">
                <div className="flex justify-start items-center flex-col w-64 h-80">
                    <div className="flex justify-center items-center flex-col">
                        <FaPeopleGroup className="w-24 h-24 " />
                        <p className="my-5 text-2xl font-bold opacity-60">
                            Biz Kimiz?
                        </p>
                    </div>
                    <p className="my-2 text-base font-normal text-center">
                        2021 yılında %100 yerli sermaye ile kurulan Özayaz Boru,
                        hem Türkiye'de hem de yurt dışında bulunduğu sektörde en
                        büyük tedarikçiler arasında yer almayı hedeflemektedir.
                    </p>
                </div>
                <div className="flex justify-start items-center flex-col w-64 h-80">
                    <div className="flex justify-center items-center flex-col">
                        <GiFlyingTarget className="w-24 h-24" />
                        <p className="my-5 text-2xl font-bold opacity-60">
                            Misyon
                        </p>
                    </div>

                    <p className="my-2 text-base font-normal text-center">
                        Rekabetçi ve sürdürülebilir büyüme potansiyeli olan
                        “üretim gücünü” stratejik portföyü ile doğru şekilde
                        yönetmek
                    </p>
                </div>
                <div className="flex justify-start items-center flex-col w-64 h-80">
                    <div className="flex justify-center items-center flex-col">
                        <GiFlyingFlag className="w-24 h-24" />
                        <p className="my-5 text-2xl font-bold opacity-60">
                            Vizyon
                        </p>
                    </div>

                    <p className="my-2 text-base font-normal text-center">
                        Sektörde, Türkiye’nin bir numaralı, dünyanın sayılı boru
                        tedarik şirketi olmak
                    </p>
                </div>
                <div className="flex justify-start items-center flex-col w-64 h-80">
                    <div className="flex justify-center items-center flex-col">
                        <MdFactory className="w-24 h-24" />
                        <p className="my-5 text-2xl font-bold opacity-60">
                            Üretim Tesisimiz
                        </p>
                    </div>

                    <p className="my-2 text-base font-normal text-center">
                        12.000 m2'si kapalı olmak üzere toplamda 20.000 m2 alan
                        üzerine kurulu üretim tesisimiz ile hizmetinizdeyiz.
                    </p>
                </div>
                <div className="flex justify-start items-center flex-col w-64 h-80">
                    <div className="flex justify-center items-center flex-col">
                        <GiStarMedal className="w-24 h-24" />
                        <p className="my-5 text-2xl font-bold opacity-60">
                            Kalite Anlayışımız
                        </p>
                    </div>

                    <p className="my-2 text-base font-normal text-center">
                        Kalite ve standardizasyon bizim için çok önemlidir. Bu
                        yüzden nitelikli ve eğitimli ekibimiz tarafından, üretim
                        hattımızdan çıkan her ürün gerekli tüm analiz ve testler
                        yapılarak titizlikle kontrol edilir.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;

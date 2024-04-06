import React from "react";
import aboutuslogo from "../../assets/aboutuslogo.png";
import aboustus1 from "../../assets/about1.jpg";
const AboutusComponent = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-center items-center gap-24">
                <div className="mt-6 mb-6 ">
                    <img
                        className="max-w-xl "
                        src={aboutuslogo}
                        alt="About1"
                    ></img>
                </div>
                <div className="flex flex-col  justify-center items-center px-6 w-[39rem] h-52  border-2 shadow-2xl rounded">
                    <p className=" font-bold text-4xl text-[#343280] mb-6">
                        Biz Kimiz?
                    </p>
                    <p className="text-center  text-black">
                        Niksa Metal, Bursa merkezli operasyonu ve 30 yılı aşkın
                        tecrübesiyle; kaynaklı imalat, yüzey işlem ve metal
                        kaplama alanlarında projelerini ilerletmektedir.
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-24">
                <div className="flex flex-col  justify-center items-center px-6 w-[39rem] h-52  border-2 shadow-2xl rounded">
                    <p className=" font-bold text-4xl text-[#343280] mb-6">
                        Vizyon & Misyon
                    </p>
                    <p className="text-center  text-black">
                        Müşteri memnuniyetini misyonumuzun merkezine koyarak
                        ilerlediğimiz bu yolda, beklentilerinizin kusursuz bir
                        şekilde karşılanması için büyük bir disiplinle
                        çalışıyoruz.
                    </p>
                </div>
                <div className="flex flex-row justify-center items-center ">
                    <img
                        className="max-w-xl rounded "
                        src={aboustus1}
                        alt="About2"
                    ></img>
                </div>
            </div>
            <div className="flex justify-center items-center mt-8 mb-24">
                <div className="flex flex-col  justify-center items-center px-6 w-[80rem] h-52  border-2  shadow-2xl rounded">
                    <p className=" font-bold text-4xl text-[#343280] mb-6">
                        Kalite Anlayışımız
                    </p>
                    <p className="text-center  text-black">
                        Zamana karşı dayanıklı metal bileşenleri zanaatkarlığın
                        ve ileri teknolojinin desteğiyle Niksa Metal’de
                        keşfedin. İhtiyaçlarınıza yönelik kaliteli ve güçlü
                        çözümler üretme yolculuğunda güvenilir ortağınız
                        olmaktan gurur duyuyoruz.”
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutusComponent;

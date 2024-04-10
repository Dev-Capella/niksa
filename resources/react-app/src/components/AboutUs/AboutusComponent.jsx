import React from "react";
import aboutuslogo from "../../assets/AboutUs/aboutuslogo.png";
import aboustus1 from "../../assets/AboutUs/about1.jpg";

const AboutusComponent = () => {
    return (
        <div className="flex flex-col justify-between pr-52 pl-52 w-full mt-8 mb-8">
            <h2 className="flex text-5xl font-bold mb-4 justify-center">
                Biz Kimiz?
            </h2>
            <div className="flex flex-row items-center justify-between">
                <p className="w-full max-w-xl break-words font-light text-xl text-gray-600 ">
                    Niksa Metal, Bursa merkezli operasyonu ve 30 yılı aşkın
                    tecrübesiyle; kaynaklı imalat, yüzey işlem ve metal kaplama
                    alanlarında projelerini ilerletmektedir.
                </p>
                <img src={aboutuslogo} alt="About Logo" className="max-w-lg" />
            </div>

            <div className="flex flex-row  justify-between mt-24">
                <div className="flex flex-col justify-center">
                    <p className="text-5xl font-bold mb-4">Vizyon & Misyon</p>
                    <p className="max-w-3xl break-words font-light text-xl text-gray-600">
                        Müşteri memnuniyetini misyonumuzun merkezine koyarak
                        ilerlediğimiz bu yolda, beklentilerinizin kusursuz bir
                        şekilde karşılanması için büyük bir disiplinle
                        çalışıyoruz.
                    </p>
                    <div className="pt-16">
                        <p className="text-5xl font-bold mb-4">
                            Kalite Anlayışımız
                        </p>
                        <p className="max-w-2xl break-words font-light text-xl text-gray-600">
                            Zamana karşı dayanıklı metal bileşenleri
                            zanaatkarlığın ve ileri teknolojinin desteğiyle
                            Niksa Metal’de keşfedin. İhtiyaçlarınıza yönelik
                            kaliteli ve güçlü çözümler üretme yolculuğunda
                            güvenilir ortağınız olmaktan gurur duyuyoruz.”
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        src={aboustus1}
                        alt="About Image"
                        className="max-w-lg ml-auto"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default AboutusComponent;

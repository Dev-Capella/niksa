import React from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import aboutus from "../../assets/kaynak1.jpg";
import misyon from "../../assets/AboutUs/misyon.png";
import vizyon from "../../assets/AboutUs/vizyon.png";
import kalite from "../../assets/AboutUs/kalite.png";

const About = () => {
    return (
        <>
            <BreadcrumbsNav imageSrc={aboutus} text={"Hakkımızda"} />
            <div className="w-full h-full py-10">
                <div className="flex justify-center items-center pb-5">
                    <h1 className="text-5xl font-bold text-gray-700">
                        Niksa Metal
                    </h1>
                </div>
                <div className="flex w-full bgs-[#343280] bg-[#f6f6f6] h-auto py-10 justify-center items-center flex-col">
                    <h1 className="text-3xl font-medium">Biz Kimiz ?</h1>
                    <p className="p-10 text-black text-center">
                        <b>Niksa Metal</b>, Bursa merkezli operasyonu ve 30 yılı
                        aşkın tecrübesiyle; kaynaklı imalat, yüzey işlem ve
                        metal kaplama alanlarında projelerini ilerletmektedir.
                        Şirketimiz yenilenen dinamizm ve üst seviye
                        geliştirilmiş çalışma prensipleriyle faaliyetlerine
                        hızla devam etmektedir.
                    </p>
                </div>
                <div className="flex w-5/6 bg-[#343280]  h-auto py-5 my-5 items-center px-5">
                    <img className="w-16 h-auto" src={vizyon} alt="Vizyon" />
                    <div className="p-10 text-white text-start">
                        {/* Vizyon */}
                        <p className="text-2xl">Vizyon</p>
                        <p>
                            Müşteri memnuniyetini odak noktası olarak belirleyen
                            Niksa Metal, beklentileri karşılamak için titizlikle
                            çalışır. Kaliteli ve güçlü çözümler üretme
                            yolculuğunda güvenilir bir ortak olarak,
                            müşterilerine dayanıklı metal bileşenlerini sunar ve
                            ihtiyaçlarına en iyi şekilde yanıt verir.
                        </p>
                    </div>
                    <p></p>
                </div>
                <div className="flex justify-end ">
                    <div className="flex w-5/6 bg-[#343280]  h-auto py-5 my-5 px-5 items-center">
                        <div className="p-10 text-white text-end">
                            {/* Misyon */}
                            <p className="text-2xl">Misyon</p>
                            <p>
                                Sektörde öncü konumunu sürdürerek, kaynaklı
                                imalat, yüzey işlem ve metal kaplama alanlarında
                                ileri teknoloji ve zanaatkarlığın birleşimini
                                sunmayı hedefler. Yenilikçi yaklaşımıyla
                                sektörde öncü olmaya devam eder.
                            </p>
                        </div>
                        <img
                            className="w-16 h-auto "
                            src={misyon}
                            alt="Misyon"
                        />
                    </div>
                </div>
                <div className="flex w-full bgs-[#343280] bg-[#f6f6f6] h-auto py-5 flex-col justify-center items-center">
                    <img className="w-16 h-auto" src={kalite} alt="Kalite" />
                    <p className="text-2xl font-semibold text-gray-600">
                        Kalite Anlayışımız
                    </p>
                </div>
                <div className="flex w-full h-auto pb-10 flex-col justify-center items-center">
                    <p className="p-10 text-center">
                        30 yılı aşkın deneyimiyle kaliteden ödün vermeyen bir
                        yaklaşımla kaynaklı imalat, yüzey işlem ve metal kaplama
                        alanlarında öncüdür. Müşteri memnuniyetini misyonumuzun
                        merkezine koyarak, kaliteli ve güçlü çözümler
                        üretiyoruz. Güvenilir ortağınız Niksa Metal ile,
                        ihtiyaçlarınıza en uygun metal bileşenlerini keşfedin.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import demir from "../../assets/demir.jpg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdKeyboardArrowRight
            className="slick-arrow slick-next -right-6 max-md:-right-2 max-lg:right-2 h-56 w-56 z-50"
            style={{
                ...style,
                display: "block",
                color: "#343280",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdKeyboardArrowLeft
            className="slick-arrow slick-next -left-6 max-md:-left-1 max-lg:left-2 h-56 w-56 z-50"
            style={{
                ...style,
                display: "block",
                color: "#343280",
            }}
            onClick={onClick}
        />
    );
}

const ProductCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "center",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        centerMode: true,
        centerPadding: "0px",
    };

    return (
        <div className="slider-container  container mx-auto mt-10 mb-36 product-carousel">
            <div>
                <p className="text-center font-bold text-4xl mb-12 text-[#343280]">
                    ÜRÜNLERİMİZ
                </p>
            </div>
            <Slider className=" flex" {...settings}>
                <div className="flex justify-center items-center ">
                    <img className="w-80 h-80" src={demir} alt="demir" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <p className="text-2xl font-bold ">Demir</p>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <img className="w-80 h-80" src={demir} alt="demir" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <p className="text-2xl font-bold">Çelik</p>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <img className="w-80 h-80" src={demir} alt="demir" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <p className="text-2xl font-bold">Bronz</p>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <img className="w-80 h-80" src={demir} alt="demir" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <p className="text-2xl font-bold">Tahta</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default ProductCarousel;

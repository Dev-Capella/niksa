import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../../assets/HomeSlider/carousel1.png";
import carousel2 from "../../assets/HomeSlider/carousel2.jpg";
import carousel3 from "../../assets/HomeSlider/carousel3.jpg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdKeyboardArrowRight
            className="slick-arrow slick-next right-4 max-md:-right-2 max-lg:right-2 h-56 w-56 z-50 transition-all duration-900 ease-in-out
            custom-hover-color-herocarousel"
            style={{
                ...style,
                display: "block",
                color: "white",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdKeyboardArrowLeft
            className="slick-arrow slick-next left-4 max-md:-left-2 max-lg:left-2 h-56 w-56 z-50 transition-all duration-900 ease-in-out
            custom-hover-color-herocarousel"
            style={{
                ...style,
                display: "block",
                color: "white",
            }}
            onClick={onClick}
        />
    );
}

const HeroCarousel = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        waitForAnimate: true,
    };

    return (
        <div className="slider-container w-full h-screen overflow-hidden relative">
            <Slider {...settings}>
                <div className="text-center w-full h-screen relative ">
                    <img
                        className="w-screen h-full object-cover"
                        src={carousel1}
                        alt="Carousel 1"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                        <h4 className="text-xl font-bold">Lorem İpsum1</h4>
                        <h1 className="text-4xl font-bold">Lorem İpsum1</h1>
                    </div>
                </div>
                <div className="text-center w-full h-screen relative">
                    <img
                        className="w-screen h-full object-cover"
                        src={carousel2}
                        alt="Carousel 2"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                        <h4 className="text-xl font-bold">Lorem İpsum2</h4>
                        <h1 className="text-4xl font-bold">Lorem İpsum2</h1>
                    </div>
                </div>
                <div className="text-center w-full h-screen relative ">
                    <img
                        className="w-screen h-full object-cover"
                        src={carousel3}
                        alt="Carousel 3"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                        <h4 className="text-xl font-bold">Lorem İpsum3</h4>
                        <h1 className="text-4xl font-bold">Lorem İpsum3</h1>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default HeroCarousel;

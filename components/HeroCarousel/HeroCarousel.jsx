"use client"

import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./HeroCarousel.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HeroCarousel = () => {
  const settings = {
    infinite: true,
    speed: 800,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "slides"
  };
  return (
    <div className="animate-fade-up">
      <Slider {...settings}>
        <img src="/images/bannerStreet.jpg" alt="" className="h-[400px] object-cover object-center" />
        <img src="https://www.tripstore.com.ar/media/weltpixel/owlcarouselslider/images/g/r/grafica_trip_1366_x_600_px_mesa_de_trabajo_1.jpg" alt="" className="h-[400px] object-cover object-center" />
        <img src="https://media.newera.com.ar/wysiwyg/sliders/newera/banner-Julio_03-desk-min.jpg" className="h-[400px] object-cover object-center"/>
      </Slider>
    </div>
  )
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="arrow right-0" onClick={onClick}>
      <BsChevronRight />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="arrow left-0" onClick={onClick}>
      <BsChevronLeft />
    </button>
  );
}

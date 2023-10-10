"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductCarousel.css";
import { CardItem } from "../CardItem";
import { stock } from "@/db/stock";

export const ProductCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {stock.map((prod) => (
          <div className="p-[15px] rounded-b-md" key={prod.id}>
            <div className="hover:shadow-md transition-transform rounded-b-md">
              <CardItem
                prod={...prod}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

"use client"

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductCarousel.css"
import Link from "next/link";

export const ProductCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div>
        <Slider {...settings}>

            <SlideProduct
                img="https://images.stockx.com/images/Fear-of-God-Essentials-Hoodie-Wood.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1664401013&q=60"
                name="Fear of God Essentials Hoodie Wood"
                price="$120"
            />
            <SlideProduct
                img="https://images.stockx.com/images/Fear-of-God-Essentials-Kids-Hoodie-Iron.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1646952431&q=60"
                name="Fear of God Essentials Kids Hoodie Iron"
                price="$120"        
            />
            <SlideProduct
                img="https://images.stockx.com/images/Fear-of-God-Essentials-Kids-Hoodie-Seafoam.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1646952430&q=60"
                name="Fear of God Essentials Kids Hoodie Seafoam"
                price="$120"
            />
            <SlideProduct
                img="https://images.stockx.com/images/Fear-of-God-Essentials-Hoodie-Wood.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1664401013&q=60"
                name="Fear of God Essentials Hoodie Wood"
                price="$120"
            />
            <SlideProduct
                img="https://images.stockx.com/images/Fear-of-God-Essentials-Kids-Hoodie-Iron.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1646952431&q=60"
                name="Fear of God Essentials Kids Hoodie Iron"
                price="$120"        
            />
            <SlideProduct
                img="https://images.stockx.com/images/Fear-of-God-Essentials-Kids-Hoodie-Seafoam.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1646952430&q=60"
                name="Fear of God Essentials Kids Hoodie Seafoam"
                price="$120"
            />
            
        </Slider>
    </div>

  );
}

const SlideProduct = ({img,name,price}) => {
  return (
    <div className="hover:shadow-lg transition-shadow">
        <Link href="/" >
            <picture>
                <img src={img} alt={name} className="max-h-[350px] w-full object-cover" />
            </picture>
            <div className="p-4 flex flex-col">
                <h3 className="h-14 ">{name}</h3>
                <p className="font-bold">{price}</p>
            </div>
        </Link>
    </div>
  )
}


"use client"

import { Autoplay, Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

//Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroCarousel.css'


export const HeroCarousel = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-[500px]"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className=''>
          <img src="https://www.awada.com.ar/uploads/page_block/banner/image/1235/file.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.awada.com.ar/uploads/page_block/banner/image/1237/file.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.awada.com.ar/uploads/page_block/banner/image/1238/file.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>

  )
}

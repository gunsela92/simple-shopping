import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
import Banner from "../../assets/images/banner.jpg";
import Banner2 from "../../assets/images/banner-2.jpg";

const Slider = () => {

  const swiperData = [
    {id: 1, image: Banner,},
    {id: 2, image: Banner2,},
  ]

  return (
      <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
      >
        {swiperData.map(item => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="Product" />
            </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default Slider;

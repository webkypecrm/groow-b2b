"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const SliderSection = () => {
  return (
    <div
      className="ps-shop-banner"
      //  style={{ border: "12px solid black" }}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next11",
          prevEl: ".swiper-button-prev11",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        className="mySwiper56"
      >
        <SwiperSlide>
          <div className="w-100" style={{ height: 400, overflow: "hidden" }}>
            <img
              src="/images/hero-baner3.jpg"
              alt="Slide 1"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-100" style={{ height: 400, overflow: "hidden" }}>
            <img
              src="/images/hero-baner2.jpg"
              alt="Slide 2"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-100" style={{ height: 400, overflow: "hidden" }}>
            <img
              src="/images/hero-baner1.jpg"
              alt="Slide 3"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </SwiperSlide>

        <div className="swiper-button-next swiper-button-next11">
          <i className="icon-chevron-right" />
        </div>
        <div className="swiper-button-prev swiper-button-prev11">
          <i className="icon-chevron-left" />
        </div>
      </Swiper>
    </div>
  );
};

export default SliderSection;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef } from "react";
import "./style/HeroStyle.css";

const Hero = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  return (
    <div className="relative w-full h-screen bg-black">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 30000 }}
        loop
        className="h-full"
      >
        {[1, 2, 3].map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative w-full h-full flex items-center justify-center p-20 slide-${slide}`}
            >
              <div className="w-full bg-opacity-50 flex flex-col items-start justify-center gap-3 ">
                <p className="text-white text-lg font-semibold flex items-center gap-2">
                  🔗 WE'RE PROVIDE BEST SERVICES
                </p>
                <h1 className="text-white text-5xl font-bold mt-2">
                  WORLD WIDE
                </h1>
                <h2 className="text-white text-7xl font-bold">BEST SHIPPING</h2>
                <p className="text-gray-300 mt-4 max-w-lg">
                  Proin eget tortor risus. Vivamus suscipit tortor eget felis
                  porttitor.
                </p>
                <div className="flex items-center mt-6 gap-4">
                  <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold">
                    FREE QUOTE!
                  </button>
                  <button className="flex items-center text-primary gap-2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      ▶
                    </div>
                    <p className="text-white">WATCH VIDEO</p>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}

      <div className="absolute top-[40%] right-0 flex flex-col gap-5 w-40 h-40">
        <button
          onClick={handleNext}
          className="w-16 h-16 bg-primary text-white text-4xl rounded-full flex items-center justify-center z-10 cursor-pointer"
        >
          →
        </button>
        <button
          onClick={handlePrev}
          className="w-16 h-16 bg-primary text-white text-4xl rounded-full flex items-center justify-center z-10 cursor-pointer"
        >
          ←
        </button>
      </div>
    </div>
  );
};

export default Hero;

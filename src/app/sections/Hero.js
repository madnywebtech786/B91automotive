"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef } from "react";
import "./style/HeroStyle.css";
import Link from "next/link";

const Hero = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  return (
    <div className="relative w-full h-screen lg:py-0 lg:h-screen">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 30000 }}
        loop
        className="h-full"
      >
        <SwiperSlide>
          <div
            className={`relative w-full h-full flex items-center justify-center p-4 lg:p-20 !pb-0  slide-1`}
          >
            <div className="w-full bg-opacity-50 flex flex-col items-center justify-center gap-3 ">
              <p className="text-white text-sm lg:text-lg font-semibold flex items-center gap-2">
                🔗 EXPERT ENGINE & TRANSMISSION REPAIRS
              </p>

              <h2 className="text-white text-2xl lg:text-4xl font-bold text-center w-3/4">
                KEEP YOUR VEHICLE RUNNING SMOOTHLY
              </h2>
              <p className="text-gray-300 mt-4 max-w-lg text-center">
                From advanced diagnostics to complete repairs, we ensure your
                engine and transmission perform at their best.
              </p>
              <div className="flex items-center mt-6 gap-4">
              <Link href={'/Contact-us'} >

                <button className="cursor-pointer bg-primary text-white px-4 py-3 lg:px-6 lg:py-3 text-sm lg:text-base rounded-lg font-bold">
                  Free Quote
                </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative w-full h-full flex items-center justify-center p-4 lg:p-20 !pb-0  slide-2`}
          >
            <div className="w-full bg-opacity-50 flex flex-col items-center justify-center gap-3 ">
              <p className="text-white text-sm lg:text-lg font-semibold flex items-center gap-2">
                🔗 PROFESSIONAL AUTOBODY & PAINT SERVICES
              </p>

              <h2 className="text-white text-2xl lg:text-4xl font-bold text-center">
                RESTORE YOUR VEHICLE'S SHOWROOM LOOK
              </h2>
              <p className="text-gray-300 mt-4 max-w-lg text-center">
                Accidents happen—we bring your car back to life with flawless
                paintwork and precision repairs.
              </p>
              <div className="flex items-center mt-6 gap-4">
                <Link href={"tel:4038918548"}>
                  <button className="cursor-pointer bg-primary text-white px-4 py-3 lg:px-6 lg:py-3 text-sm lg:text-base rounded-lg font-bold">
                    Call Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative w-full h-full flex items-center justify-center p-4 lg:p-20 !pb-0  slide-3`}
          >
            <div className="w-full bg-opacity-50 flex flex-col items-center justify-center gap-3 ">
              <p className="text-white text-sm lg:text-lg font-semibold flex items-center gap-2">
                🔗 HASSLE-FREE INSURANCE CLAIMS
              </p>

              <h2 className="text-white text-2xl lg:text-4xl font-bold text-center">
                WE HANDLE THE PAPERWORK YOU DRIVE STRESS FREE
              </h2>
              <p className="text-gray-300 mt-4 max-w-lg text-center">
                Dealing with an accident? We assist with insurance claims,
                ensuring a smooth repair process.
              </p>
              <div className="flex items-center mt-6 gap-4">
                <Link href={"tel:4038918548"}>
                  <button className="cursor-pointer bg-primary text-white px-4 py-3 lg:px-6 lg:py-3 text-sm lg:text-base rounded-lg font-bold">
                    Contact Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative w-full h-full flex items-center justify-center p-4 lg:p-20 !pb-0  slide-4`}
          >
            <div className="w-full bg-opacity-50 flex flex-col items-center justify-center gap-3 ">
              <p className="text-white text-sm lg:text-lg font-semibold flex items-center gap-2">
                🔗 NEW & USED AUTO PARTS AVAILABLE
              </p>

              <h2 className="text-white text-2xl lg:text-4xl font-bold text-center">
                AFFORDABLE PARTS FOR ALL MAKES & MODELS
              </h2>
              <p className="text-gray-300 mt-4 max-w-lg text-center">
                Get high-quality OEM and aftermarket parts at competitive
                prices.
              </p>
              <div className="flex items-center mt-6 gap-4">
                <Link href={"/Contact-us"}>
                  <button className="cursor-pointer bg-primary text-white px-4 py-3 lg:px-6 lg:py-3 text-sm lg:text-base rounded-lg font-bold">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}

      <div className="hidden lg:flex absolute top-[40%] right-0  flex-col gap-5 w-40 h-40">
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

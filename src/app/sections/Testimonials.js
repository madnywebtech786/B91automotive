"use client";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TestimonialCard from "../components/TestimonialCard";
export default function Testimonials() {
  const testimonials = [
    {
      title: "Good Services",
      rating: 5,
      quote:
        "Collecting feedback from clients is a critical part of running a successful service business. It helps you understand your customers better.",
      name: "Darlene Robertson",
      role: "Founder & CEO",
      avatar: "/images/avatars/darlene.png",
    },
    {
      title: "Impressive Support",
      rating: 4,
      quote:
        "Ask satisfied clients to provide written or video testimonials that can be featured on your website and social media channels.",
      name: "Darrell Steward",
      role: "UX Designer",
      avatar: "/images/avatars/darrell.png",
    },
    {
      title: "Amazing Results",
      rating: 5,
      quote:
        "Remember that the key to collecting and utilizing customer feedback effectively is to listen carefully to your clients.",
      name: "Ronald Richards",
      role: "Web Developer",
      avatar: "/images/avatars/ronald.png",
    },
    {
      title: "Good Services",
      rating: 5,
      quote:
        "Collecting feedback from clients is a critical part of running a successful service business. It helps you understand your customers better.",
      name: "Darlene Robertson",
      role: "Founder & CEO",
      avatar: "/images/avatars/darlene.png",
    },
    {
      title: "Impressive Support",
      rating: 4,
      quote:
        "Ask satisfied clients to provide written or video testimonials that can be featured on your website and social media channels.",
      name: "Darrell Steward",
      role: "UX Designer",
      avatar: "/images/avatars/darrell.png",
    },
    {
      title: "Amazing Results",
      rating: 5,
      quote:
        "Remember that the key to collecting and utilizing customer feedback effectively is to listen carefully to your clients.",
      name: "Ronald Richards",
      role: "Web Developer",
      avatar: "/images/avatars/ronald.png",
    },
  ];

  return (
    <div className="p-4 py-20 lg:p-20 pb-0 flex flex-col items-end testimonials relative bg-red-50">
      <div className="w-full lg:w-4/5 flex flex-col  items-end relative z-20">
        <div className="flex w-full lg:w-2/3 flex-col">
          <p className="text-red-500 font-semibold uppercase flex items-center  gap-2 mb-3">
            <div className="w-10 h-0.5 bg-red-500"></div>
            Testimoniasl
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            What Client’s say about Our Services
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          draggable
          autoplay={{ delay: 5000 }}
          loop={true}
          className="!h-[350px] mt-10 w-full lg:w-11/12"
          breakpoints={{
            0: {
              slidesPerView: 1, // Show 1 slide on mobile
            },
            768: {
              slidesPerView: 2, // Show 2 slides on tablets
            },
            1024: {
              slidesPerView: 3, // Show 3 slides on larger screens
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                title={testimonial.title}
                name={testimonial.name}
                quote={testimonial.quote}
                role={testimonial.role}
                avatar={testimonial.avatar}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

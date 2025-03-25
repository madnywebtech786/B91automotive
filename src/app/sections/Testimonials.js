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
      title: "Exceptional service and professionalism!",
      rating: 5,
      quote:
        "B91 Automotive exceeded my expectations. The team was knowledgeable ,friendly, and fixed my car quickly. I won’t go anywhere else for repairs!",
      name: "Michael R",
      role: "Happy Client",
    },
    {
      title: "Fast, reliable, and trustworthy.",
      rating: 5,
      quote:
        "I had an urgent issue with my car, and B91 Automotive handled it with speed and efficiency. Their honesty and attention to detail made all the difference!",
      name: "Jessica L",
      role: "Happy Client",
    },
    {
      title: "Best auto service experience I've had!",
      rating: 5,
      quote:
        "From the moment I walked in, I felt valued as a customer. They explained everything clearly and delivered high-quality work. Highly recommend!",
      name: "David S",
      role: "Happy Client",
    },
    {
      title: "Top-notch quality and customer care.",
      rating: 5,
      quote:
        "B91 Automotive went above and beyond to ensure my car was in perfect condition. Their team is professional, and their prices are fair. I’ll definitely be back!",
      name: "Sophia M",
      role: "Happy Client",
    },
  ];

  return (
    <div className="p-4 py-20 lg:p-20 pb-0 flex flex-col items-end testimonials relative bg-red-50" id="testimonials">
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

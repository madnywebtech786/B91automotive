"use client";

import Image from "next/image";
import React from "react";

/**
 * Example usage:
 * <TestimonialCard
 *   title="Good Services"
 *   rating={4}
 *   quote="Ask satisfied clients to provide written or video testimonials that can be featured on your website and social media channels."
 *   name="Darrell Steward"
 *   role="UX Designer"
 *   avatar="/images/darrell.png"
 * />
 */

export default function TestimonialCard({
  title = "Good Services",
  rating = 4,
  quote,
  name,
  role,
  avatar,
}) {
  console.log(quote);
  // Helper function to render star icons
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < count ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-5 h-5 ${
            i < count ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.75.75 0 011.04 0l2.18 2.22c.133.135.312.22.5.22l3.036.242c.772.062 1.087.998.502 1.487l-2.31 1.927a.75.75 0 00-.243.697l.713 2.946c.177.73-.621 1.301-1.265.9l-2.58-1.618a.75.75 0 00-.804 0l-2.58 1.618c-.644.401-1.442-.17-1.265-.9l.712-2.946a.75.75 0 00-.243-.697l-2.31-1.927c-.585-.489-.27-1.425.502-1.487l3.036-.242a.75.75 0 00.5-.22l2.18-2.22z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="relative w-full h-5/6 max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      {/* Top Section: Title + Stars */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
        <div className="flex items-center mt-1">{renderStars(rating)}</div>
        {quote && (
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            “{quote}”
          </p>
        )}
      </div>
      {/* Wave shape at the bottom */}
      <svg
        className="w-full h-10 absolute bottom-0 left-0 text-red-500"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0.00,49.98 C150.00,150.00 349.97,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" />
      </svg>

      {/* Wave & Author Section */}
      <div className="absolute bottom-8 left-4">
        {/* Author Info above the wave */}
        <div className=" flex items-center gap-3">
          <div className="w-14 h-14  border-2 border-white">
            <Image
              src={"/images/slide1.jpg"}
              alt={name}
              width={106}
              height={106}
              className="rounded-full w-full h-full"
            />
          </div>
          <div className="text-primary">
            <p className="font-bold text-sm">{name}</p>
            <p className="text-xs opacity-90">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

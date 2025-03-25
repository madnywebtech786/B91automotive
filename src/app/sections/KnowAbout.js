"use client";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function KnowAbout() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full p-4 lg:p-20 bg-white gap-16 lg:gap-0">
      {/* Left Side - Images */}
      <div className="relative w-full lg:w-1/2 flex flex-col gap-5 h-[500px]">
        <div className="absolute top-10 left-0 lg:left-10">
          <div
            className="absolute top-0 left-0 w-24 h-24 bg-no-repeat bg-cover animate-spin-custom"
            style={{ backgroundImage: "url('/images/screw-1.png')" }}
          />
          <div
            className="absolute top-6 left-22 w-20 h-20 bg-no-repeat bg-cover animate-spin-reverse"
            style={{ backgroundImage: "url('/images/screw-1.png')" }}
          />
        </div>

        <div className="absolute top-5 lg:top-12 right-0  p-2 inline-block aboutimg1 z-20 ">
          <Image
            src="/images/slide1.jpg"
            alt="Mechanic"
            width={400}
            height={500}
            className="rounded-md  border-5 border-white  min-h-[250px]"
          />
        </div>
        <div className="absolute bottom-0 left-0 lg:left-10 p-2 inline-block aboutimg2 ">
          <Image
            src="/images/slide3.jpg"
            alt="Car Repair"
            width={400}
            height={500}
            className="rounded-md relative z-10 min-h-[250px]"
          />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className=" relative w-full lg:w-1/2 p-4 lg:pl-10 h-[500px] flex flex-col justify-center">
        <p className="text-red-500 font-semibold uppercase flex items-center gap-2">
          <div className="w-10 h-0.5 bg-red-500"></div>
          Know About Us
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2">
          Calgaryʼs Trusted Auto Repair & Autobody Experts
        </h2>
        <p className="text-gray-600 mt-4 max-w-lg">
          At <strong> B91 Automotic</strong>, we provide top-rated auto repair
          and autobody services in Calgary, ensuring your vehicle runs smoothly
          and looks its best. Whether you need engine diagnostics, transmission
          repair, collision restoration, or windshield replacement, our team of
          certified professionals delivers high quality, affordable, and
          reliable solutions
        </p>
        <ul className="mt-6 space-y-3 text-gray-700">
          <li className="flex items-center gap-4">
            <Image
              src="/images/icons/check-black.svg"
              alt="Icon"
              width={20}
              height={20}
            />{" "}
            Expert Auto Repair & Maintenance
          </li>
          <li className="flex items-center gap-4">
            <Image
              src="/images/icons/check-black.svg"
              alt="Icon"
              width={20}
              height={20}
            />{" "}
            Precision Autobody & Paintwork
          </li>
          <li className="flex items-center gap-4">
            <Image
              src="/images/icons/check-black.svg"
              alt="Icon"
              width={20}
              height={20}
            />{" "}
            Hassle-Free Insurance Claims
          </li>
          <li className="flex items-center gap-4">
            <Image
              src="/images/icons/check-black.svg"
              alt="Icon"
              width={20}
              height={20}
            />{" "}
            New & Used Auto Parts
          </li>
        </ul>
        <div className="hidden lg:block absolute bottom-0 right-5 bg-red-500/80 p-8 py-12 text-center  experience text-white">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={"/images/icons/experience.svg"}
              alt="icon"
              width={70}
              height={70}
              className="mx-auto"
            />
            <div className="flex flex-col gap-1">
              <p className="text-4xl font-bold ">25+</p>
              <p className=" text-lg">Years of experience</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-6">
          <Link href={"tel:4038918548"}>
            <button className="cursor-pointer bg-red-500 text-white text-sm lg:text-base px-4 lg:px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition">
              Contact Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

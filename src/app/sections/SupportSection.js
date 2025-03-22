import Image from "next/image";
import React from "react";
import "./style/SupportStyle.css";

export default function SupportSection() {
  return (
    <div className="relative z-20 w-full bg-cover bg-center pt-20 pb-20 lg:pb-40 text-white support ">
      <div className="container mb-16 lg:my-16 mx-auto text-center">
        <h2 className="text-3xl lg:text-6xl font-bold w-2/3 mx-auto">
          24/7 customer support any time of the day or night
        </h2>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-primary text-sm lg:text-base px-4 lg:px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition duration-300">
            Free Quote →
          </button>
          <button className="bg-white text-primary text-sm lg:text-base px-4 lg:px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition duration-300">
            Contact Us →
          </button>
        </div>
      </div>
      <div className="mx-auto lg:absolute lg:-bottom-1/5 left-[13%] w-2/3 lg:w-3/4 bg-primary rounded-2xl p-2 lg:p-6 flex flex-col lg:flex-row justify-center items-center text-center">
        <div className="flex flex-col items-center gap-4 px-4 lg:px-16  border-b lg:border-b-0 lg:border-r py-10 lg:py-0 border-dashed border-white">
          <Image
            src="/images/icons/repair.svg"
            alt="Clients"
            width={50}
            height={50}
          />
          <div className="flex flex-col gap-2">
            <p className="text-2xl lg:text-4xl font-extrabold">15k</p>
            <p>Worldwide Clients</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 px-4 lg:px-16 border-b lg:border-b-0 lg:border-r py-10 lg:py-0 border-dashed border-white">
          <Image
            src="/images/icons/repair.svg"
            alt="Branches"
            width={50}
            height={50}
          />
          <div className="flex flex-col gap-2">
            <p className="text-2xl lg:text-4xl font-extrabold">189+</p>
            <p>Worldwide Branches</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 px-4 lg:px-16 border-b lg:border-b-0 lg:border-r py-10 lg:py-0 border-dashed border-white">
          <Image
            src="/images/icons/repair.svg"
            alt="Staffs"
            width={50}
            height={50}
          />
          <div className="flex flex-col gap-2">
            <p className="text-2xl lg:text-4xl font-extrabold">950+</p>
            <p>Expert Company Staffs</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 px-4 lg:px-16 py-10 lg:py-0">
          <Image
            src="/images/icons/repair.svg"
            alt="Delivery"
            width={50}
            height={50}
          />
          <div className="flex flex-col gap-2">
            <p className="text-2xl lg:text-4xl font-extrabold">15k</p>
            <p>Successful Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

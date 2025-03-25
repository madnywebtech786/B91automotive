import Image from "next/image";
import React from "react";
import "./style/SupportStyle.css";
import Link from "next/link";

export default function SupportSection() {
  return (
    <div className="relative z-20 w-full bg-cover bg-center pt-20 pb-20 lg:pb-40 text-white support ">
      <div className="container mb-16 lg:my-16 mx-auto text-center">
        <h2 className="text-2xl lg:text-4xl font-bold w-3/4 mx-auto">
          B91 Automotic – Your One-Stop Auto Shop,! From diagnostics to
          detailing, engine repairs to insurance claims, we’ve got you covered !
        </h2>
        <div className="mt-6 flex justify-center gap-4">
          <Link href={"/Contact-us"}>
            <button className="cursor-pointer bg-primary text-sm lg:text-base px-4 lg:px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition duration-300">
              Free Quote →
            </button>
          </Link>
          <Link href={"tel:4038918548"}>
            <button className="cursor-pointer bg-white text-primary text-sm lg:text-base px-4 lg:px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition duration-300">
              Contact Us →
            </button>
          </Link>
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
            <p className="text-2xl lg:text-4xl font-extrabold">1000</p>
            <p>Happy Customers Served</p>
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
            <p className="text-2xl lg:text-4xl font-extrabold">500+</p>
            <p>Major Auto Services Offered</p>
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
            <p className="text-2xl lg:text-4xl font-extrabold">2000+</p>
            <p>Hours of Work Completed</p>
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
            <p className="text-2xl lg:text-4xl font-extrabold">1800+</p>
            <p>Successful Repairs & Deliveries</p>
          </div>
        </div>
      </div>
    </div>
  );
}

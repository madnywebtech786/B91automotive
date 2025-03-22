"use client";
import React, { useState } from "react";
import TopBar from "../sections/TopBar";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    if (activeAccordion === 1) {
      toggleAccordion(1);
    }
    setIsMobileNavOpen(false); // Close the mobile nav when a link is clicked
  };
  return (
    <div>
      <div className="fixed top-0 left-0 z-50 w-full hidden xl:flex">
        <div className="w-1/5">
          <div className="bg-white border-b border-primary-4 border-r-4 border-primary rounded-br-xl p-5 py-8 flex items-center justify-center">
            <Image
              src={"/images/logo.jpeg"}
              alt="logo"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="w-4/5">
          <div className="h-4/5 w-full bg-green flex flex-col">
            <TopBar />
            <div className="bg-white py-4 px-10 flex justify-between">
              <div className="flex gap-10 items-center">
                <Link
                  href={"/"}
                  className="font-bold text-lg hover:text-primary hover:scale-105 duration-300"
                >
                  Home
                </Link>
                <Link
                  href={"/"}
                  className="font-bold text-lg hover:text-primary hover:scale-105 duration-300"
                >
                  About Us
                </Link>
                <Link
                  href={"/"}
                  className="font-bold text-lg hover:text-primary hover:scale-105 duration-300"
                >
                  Services
                </Link>
                <Link
                  href={"/"}
                  className="font-bold text-lg hover:text-primary hover:scale-105 duration-300"
                >
                  Contact
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src={"/images/icons/chat.svg"}
                  alt="chat icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col gap-1">
                  <p>Need help?</p>
                  <Link
                    href={"tel:+13075550133"}
                    className="text-base font-bold hover:text-primary duration-300"
                  >
                    (307) 555-0133{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:hidden  fixed top-0 left-0 z-50 bg-white w-full">
        <TopBar />
        <div className="flex  justify-between items-center px-2 py-3">
          <Image
            src={"/images/logo.jpeg"}
            alt="B91 Automotive logo"
            width={120}
            height={120}
          />
          <button onClick={toggleMobileNav}>
            <span className="text-2xl text-primary">&#9776;</span>
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 max-h-screen overflow-scroll ${
          isMobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileNav} className="text-2xl text-primary">
            &times;
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col items-center text-black px-4">
          <Image
            src={"/images/logo.jpeg"}
            alt="B91 Automotive logo"
            width={150}
            height={150}
            className="mb-10"
          />
          <Link
            href="/"
            className="text-xl font-medium border-b border-primary w-full text-start py-4"
            onClick={closeMobileNav}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-xl font-medium border-b border-primary w-full text-start py-4"
            onClick={closeMobileNav}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-xl font-medium border-b border-primary w-full text-start py-4"
            onClick={closeMobileNav}
          >
            Our Services
          </Link>
          <Link
            href="/contact-us"
            className="text-xl font-medium w-full text-start py-4"
            onClick={closeMobileNav}
          >
            Contact Us
          </Link>
          <Link
            href="/contact-us"
            className="w-full flex justify-center"
            onClick={closeMobileNav}
          ></Link>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-4 w-full flex justify-center space-x-6 px-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img
              src="/images/icons/FacebookIcon.svg"
              alt="Facebook"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img
              src="/images/icons/XIcon.svg"
              alt="Twitter"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img
              src="/images/icons/InstaIcon.svg"
              alt="Instagram"
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

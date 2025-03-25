"use client";
import React, { useState } from "react";
import TopBar from "../sections/TopBar";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const toggleAccordion = (accordionIndex) => {
    setActiveAccordion((prev) =>
      prev === accordionIndex ? null : accordionIndex
    );
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
          <div className="bg-white border-b-4 border-primary-4 border-r-4 border-primary rounded-br-xl p-4 py-6 flex items-center justify-center">
            <Image
              src={"/images/logo.jpeg"}
              alt="logo"
              width={250}
              height={250}
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
                  href={"/About-us"}
                  className="font-bold text-lg hover:text-primary hover:scale-105 duration-300"
                >
                  About Us
                </Link>
                <div className="relative group menu">
                  <div className="flex items-center">
                    <Link
                      href="#"
                      className="font-bold text-lg flex items-center py-3 "
                    >
                      Services
                      <span className="ml-2 transition-transform transform group-hover:rotate-180">
                        <Image
                          src="/images/icons/ArrowDown.svg"
                          alt="arrow img"
                          width={13}
                          height={13}
                        />
                      </span>
                    </Link>
                  </div>

                  {/* Dropdown Menu */}
                  <div className="dropdown-menu text-sm">
                    <Link
                      href="/Services/engine-transmission-diagnostics-and-repairs"
                      className="block px-4 py-2 hover:bg-primary/30 capitalize rounded-t-md border-b"
                    >
                      Engine & Transmission Diagnostics and Repairs
                    </Link>
                    <Link
                      href="/Services/autobody-paint-services"
                      className="block px-4 py-2 hover:bg-primary/30 capitalize border-b"
                    >
                      Autobody & Paint Services
                    </Link>
                    <Link
                      href="/Services/insurance-claims"
                      className="block px-4 py-2 hover:bg-primary/30 capitalize border-b"
                    >
                      Insurance Claims Assistance
                    </Link>
                    <Link
                      href="/Services/windshield-replacement-repair"
                      className="block px-4 py-2 hover:bg-primary/30 capitalize border-b"
                    >
                      Windshield Replacement & Repair
                    </Link>
                    <Link
                      href="/Services/new-used-automotive-parts"
                      className="block px-4 py-2 hover:bg-primary/30 capitalize border-b"
                    >
                      New & Used Automotive Parts
                    </Link>{" "}
                    <Link
                      href="/Services/new-used-autobody-parts"
                      className="block px-4 py-2 hover:bg-primary/30 capitalize rounded-b-md"
                    >
                      New & Used Autobody Parts
                    </Link>
                  </div>
                </div>
                <Link
                  href={"/#gallery"}
                  className="font-bold text-lg hover:text-primary hover:scale-105 duration-300"
                >
                  Gallery
                </Link>
                <Link
                  href={"/#testimonials"}
                  className="font-bold text-lg hover:text-primary hover:scale-105 duration-300"
                >
                  Testimonials
                </Link>
                <Link
                  href={"/Contact-us"}
                  className="font-bold text-lg hover:text-primary hover:scale-105 duration-300"
                >
                  Contact Us
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
                    href={"tel:+14038918548"}
                    className="text-base font-bold hover:text-primary duration-300"
                  >
                    4038918548
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
            href="/About-us"
            className="text-xl font-medium border-b border-primary w-full text-start py-4"
            onClick={closeMobileNav}
          >
            About Us
          </Link>
          <div className="w-full mobile-menu">
            {/* Planning Accordion */}
            <button
              onClick={() => toggleAccordion(1)}
              className="text-xl font-medium  w-full text-left py-3 border-b border-primary flex justify-between items-center my-2"
            >
              Services
              <Image
                src="/images/icons/ArrowDown.svg"
                alt="arrow"
                width={13}
                height={13}
                className={`transform transition-transform ${
                  activeAccordion === 1 ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeAccordion === 1 ? "max-h-80" : "max-h-0"
              }`}
              style={{
                transitionProperty: "max-height",
              }}
            >
              <div className="flex flex-col bg-primary/10 text-base rounded-lg">
                <Link
                  href="/Services/engine-transmission-diagnostics-and-repairs"
                  className="block px-4 py-3"
                  onClick={closeMobileNav}
                >
                  Engine & Transmission Diagnostics and Repairs
                </Link>
                <Link
                  href="/Services/autobody-paint-services"
                  className="block px-4 py-3"
                  onClick={closeMobileNav}
                >
                  Autobody & Paint Services
                </Link>
                <Link
                  href="/Services/insurance-claims"
                  className="block px-4 py-3"
                  onClick={closeMobileNav}
                >
                  Insurance Claims Assistance
                </Link>
                <Link
                  href="/Services/windshield-replacement-repair"
                  className="block px-4 py-3"
                  onClick={closeMobileNav}
                >
                  Windshield Replacement & Repair
                </Link>
                <Link
                  href="/Services/new-used-automotive-parts"
                  className="block px-4 py-3"
                  onClick={closeMobileNav}
                >
                  New & Used Automotive Parts
                </Link>{" "}
                <Link
                  href="/Services/new-used-autobody-parts"
                  className="block px-4 py-3"
                  onClick={closeMobileNav}
                >
                  New & Used Autobody Parts
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/#gallery"
            className="text-xl font-medium border-b border-primary w-full text-start py-4"
            onClick={closeMobileNav}
          >
            Gallery
          </Link>

          <Link
            href="/testimonials"
            className="text-xl font-medium border-b border-primary w-full text-start py-4"
            onClick={closeMobileNav}
          >
            Testimonials
          </Link>
          <Link
            href="/Contact-us"
            className="text-xl font-medium w-full text-start py-4"
            onClick={closeMobileNav}
          >
            Contact Us
          </Link>
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

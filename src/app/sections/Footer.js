import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-black pt-20 pb-10 flex px-4 md:px-8 lg:px-12 2xl:px-20 text-white z-10 flex-col lg:flex-row gap-8 lg:gap-0">
        <div className="w-full lg:w-1/4 flex flex-col gap-5 items-center lg:items-start">
          <div className="flex justify-center w-3/4">
            <Image
              src={"/images/logo.jpeg"}
              alt="B91 Automotive Logo"
              width={160}
              height={150}
              className="rounded-xl bg-white w-full h-auto"
            />
          </div>
          <div className="w-5/6">
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              ex nam numquam fugit animi sunt, earum aspernatur, dicta
              reprehenderit voluptas itaque voluptatem veritatis ipsam
              perferendis sapiente laudantium vero eos. Consequuntur?
            </p>

            <div className="flex justify-center lg:justify-start  my-5">
              <p className="text-lg font-bold">Follow Us:</p>
              <div className="flex mx-3 gap-1">
                <Link href="#" className="w-max">
                  <Image
                    src={"/images/icons/FacebookWhite.svg"}
                    alt="facebook"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link href="#" className="w-max">
                  <Image
                    src={"/images/icons/InstaWhite.svg"}
                    alt="facebook"
                    width={30}
                    height={30}
                  />
                </Link>

                <Link href="#" className="w-max">
                  <Image
                    src={"/images/icons/Xwhite.svg"}
                    alt="facebook"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col gap-3 items-center lg:items-start">
          <h2 className="text-xl font-bold uppercase ">Useful Link</h2>
          <Link href="/" className="underline-animation-white w-max">
            Home
          </Link>
          <Link href="/about-us" className="underline-animation-white w-max">
            About Us
          </Link>
          <Link href="/services" className="underline-animation-white w-max">
            Our Services
          </Link>
          <Link href="/contact-us" className="underline-animation-white w-max">
            Contact Us
          </Link>
        </div>

        <div className="w-full lg:w-1/4 flex flex-col gap-3 items-center lg:items-start">
          <h2 className="text-xl font-bold uppercase ">Contact Us</h2>
          <div className="flex flex-col gap-3">
            <div className="flex gap-5 items-center flex-col lg:flex-row text-center lg:text-start">
              <div className="bg-white rounded-full p-2">
                <Image
                  src={"/images/icons/PhoneRed.svg"}
                  alt="modern design"
                  width={25}
                  height={25}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold ">Hotline</h3>
                <Link href={"tel:+14034026723"}>
                  <p className="text-xs">+1 (403) 402-6723</p>
                </Link>
              </div>
            </div>
            <div className="flex gap-5 items-center flex-col lg:flex-row text-center lg:text-start">
              <div className="bg-white rounded-full p-2">
                <Image
                  src={"/images/icons/MailRed.svg"}
                  alt="modern design"
                  width={25}
                  height={25}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold ">Official Email</h3>
                <Link href={"mailto:info@example.com"}>
                  <p className="text-xs">info@example.com</p>
                </Link>
              </div>
            </div>

            <div className="flex gap-5 items-center flex-col lg:flex-row text-center lg:text-start">
              <div className="bg-white rounded-full p-2">
                <Image
                  src={"/images/icons/LocationRed.svg"}
                  alt="modern design"
                  width={26}
                  height={26}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold ">Our Location</h3>
                <p className="text-xs w-2/3">6391 Elgin St. Celina, 10299</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col gap-3 items-center lg:items-start">
          <h2 className="text-xl font-bold uppercase ">Gallery</h2>
          <div className="w-2/3 lg:w-full  flex flex-wrap">
            <Image
              src={"/images/slide1.jpg"}
              alt="gallery img 1"
              width={150}
              height={150}
              className="w-1/2 lg:w-1/3 rounded-lg p-1"
            />
            <Image
              src={"/images/slide3.jpg"}
              alt="gallery img 1"
              width={150}
              height={150}
              className="w-1/2 lg:w-1/3 rounded-lg p-1"
            />
            <Image
              src={"/images/slide2.jpg"}
              alt="gallery img 1"
              width={150}
              height={150}
              className="w-1/2 lg:w-1/3 rounded-lg p-1"
            />
            <Image
              src={"/images/slide3.jpg"}
              alt="gallery img 1"
              width={150}
              height={150}
              className="w-1/2 lg:w-1/3 rounded-lg p-1"
            />
            <Image
              src={"/images/slide1.jpg"}
              alt="gallery img 1"
              width={150}
              height={150}
              className="w-1/2 lg:w-1/3 rounded-lg p-1"
            />
            <Image
              src={"/images/slide3.jpg"}
              alt="gallery img 1"
              width={150}
              height={150}
              className="w-1/2 lg:w-1/3 rounded-lg p-1"
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-3 text-center text-secondary text-base">
        Copyright &copy; 2025. All rights reserved.
      </div>
    </>
  );
}

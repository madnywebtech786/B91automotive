import React from "react";
import TopBar from "../sections/TopBar";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className="flex fixed top-0 left-0 z-50 w-full">
        <div className="w-1/5">
          <div className="bg-white border-b-4 border-r-4 border-primary rounded-br-xl p-5 py-8 flex items-center justify-center">
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
                <Link href={"/"} className="font-bold text-lg">
                  Home
                </Link>
                <Link href={"/"} className="font-bold text-lg">
                  About Us
                </Link>
                <Link href={"/"} className="font-bold text-lg">
                  Services
                </Link>
                <Link href={"/"} className="font-bold text-lg">
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
    </div>
  );
}

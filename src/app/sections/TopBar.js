import Image from "next/image";
import React from "react";

export default function TopBar() {
  return (
    <div className=" px-10 bg-black flex justify-between w-full">
      <div className="flex gap-10 p-4">
        <p className="text-white text-base font-bold">info@example.com</p>
        <p className="text-white text-base font-bold">
          6391 Elgin St. Celina, 10299
        </p>
        <p className="text-white text-base font-bold">Sunday - Friday</p>
      </div>
      <div className="bg-white/20 flex gap-5 p-4">
        <Image src={"/global.svg"} alt="icon" width={25} height={25} className="w-6 h-6" />
        <Image src={"/global.svg"} alt="icon" width={25} height={25} className="w-6 h-6" />
        <Image src={"/global.svg"} alt="icon" width={25} height={25} className="w-6 h-6" />
        <Image src={"/global.svg"} alt="icon" width={25} height={25} className="w-6 h-6" />
      </div>
    </div>
  );
}

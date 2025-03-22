import Image from "next/image";
import React from "react";

export default function TopBar() {
  return (
    <div className=" px-10 bg-black flex justify-between w-full">
      <div className="flex gap-10 p-4">
        <p className="text-white text-base font-bold flex items-center gap-3">
          <Image
            src={"/images/icons/MailWhite.svg"}
            alt="email icon"
            width={20}
            height={20}
          />
          info@example.com
        </p>
        <p className="text-white text-base font-bold flex items-center gap-3">
          <Image
            src={"/images/icons/Location.svg"}
            alt="location icon"
            width={23}
            height={23}
          />
          6391 Elgin St. Celina, 10299
        </p>
        <p className="text-white text-base font-bold flex items-center gap-3">
          <Image
            src={"/images/icons/ClockWhite.svg"}
            alt="clock icon"
            width={20}
            height={20}
          />
          Sunday - Friday
        </p>
      </div>
      <div className="bg-white/20 flex gap-5 p-4">
        <Image
          src={"/images/icons/FacebookWhite.svg"}
          alt="icon"
          width={25}
          height={25}
          className="w-6 h-6"
        />
        <Image
          src={"/images/icons/InstaWhite.svg"}
          alt="icon"
          width={25}
          height={25}
          className="w-6 h-6"
        />
        <Image
          src={"/images/icons/XWhite.svg"}
          alt="icon"
          width={25}
          height={25}
          className="w-6 h-6"
        />
      </div>
    </div>
  );
}

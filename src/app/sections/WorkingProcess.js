"use client";
import React from "react";
import Image from "next/image";
export default function WorkingProcess() {
  return (
    <div>
      <div className="flex flex-col items-center text-center py-20 lg:py-40 px-4 lg:px-20 bg-white relative z-10 working-process">
        {/* Process Title */}
        <div className="mb-10">
          <p className="text-red-500 font-semibold uppercase flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-0.5 bg-red-500"></div>
            Our Process
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
            Our Working Process
          </h2>
        </div>

        {/* Content Section */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center w-full">
          {/* Left Side Text */}
          <div className="w-full lg:w-1/3 flex flex-col items-end text-right space-y-16 lg:pr-10">
            <div className="bg-red-500 text-white p-6 rounded-2xl flex items-start gap-4">
              <div>
                <h3 className="text-xl font-bold">Identify Problems</h3>
                <p className=" max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="processIconLeft relative z-20">
                <Image
                  src="/images/icons/identify.svg"
                  alt="Icon"
                  width={70}
                  height={70}
                  className="relative z-20"
                />
              </div>
            </div>
            <div className="bg-red-500 text-white p-6 rounded-2xl flex items-start gap-4">
              <div>
                <h3 className="text-xl font-bold">Start Servicing</h3>
                <p className=" max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="processIconLeft relative z-20">
                <Image
                  src="/images/icons/service.svg"
                  alt="Icon"
                  width={70}
                  height={70}
                  className="relative z-20"
                />
              </div>
            </div>
          </div>

          {/* Rotating Center Image */}
          <div className="w-full lg:w-1/3 p-10 ">
            <div className="mx-auto w-2/3 lg:w-full animate-spin-custom-4">
              <Image
                src="/images/tyre.png"
                alt="Process Image"
                width={400}
                height={400}
                className="w-full rounded-full"
              />
            </div>
          </div>

          {/* Right Side Text */}
          <div className="w-full lg:w-1/3 flex flex-col items-start text-left space-y-16 lg:pl-10">
            <div className="bg-red-500 text-white p-6 rounded-2xl flex items-start gap-4">
              <div className="processIconRight relative z-20">
                <Image
                  src="/images/icons/crash.svg"
                  alt="Icon"
                  width={70}
                  height={70}
                  className="relative z-20"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Trial For Make Sure</h3>
                <p className=" max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="bg-red-500 text-white p-6 rounded-2xl flex items-start gap-4">
              <div className="processIconRight relative z-20">
                <Image
                  src="/images/icons/deliver.svg"
                  alt="Icon"
                  width={70}
                  height={70}
                  className="relative z-20"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Deliver Service</h3>
                <p className=" max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

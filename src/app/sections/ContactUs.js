"use client";

import Image from "next/image";
import React from "react";

export default function ContactSection({singlePage=false}) {
  return (
    <section className={`relative overflow-hidden ${singlePage?'bg-white':'bg-primary'} p-4 py-20 lg:p-20`}>
      {/* Wave background at the top */}

      {/* Main content wrapper */}
      <div className="relative w-full lg:w-7/8 mx-auto p-8 md:p-12 lg:p-16 bg-white rounded-xl shadow-2xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side: Contact Info */}
          <div className="flex flex-col justify-center">
            <p className="text-red-500 font-semibold uppercase flex items-center gap-2 mb-3 text-3xl">
              <div className="w-10 h-0.5 bg-red-500"></div>
              Get in Touch
            </p>

            <p className="text-gray-600 mb-8">
              Have questions or need help? Fill out the form, or reach out using
              one of the methods below. Our team will respond as soon as
              possible!
            </p>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-4">
                <span className="bg-red-100 text-primary p-2 rounded-full">
                  <Image
                    src={"/images/icons/ClockRed.svg"}
                    alt="clock icon"
                    width={25}
                    height={25}
                  />
                </span>
                <div>
                  <p className="font-semibold">Mon - Fri: 9AM - 6PM</p>
                  <p className="text-sm">Business Hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="bg-red-100 text-primary p-2 rounded-full">
                  <Image
                    src={"/images/icons/PhoneRed.svg"}
                    alt="phone icon"
                    width={27}
                    height={27}
                  />
                </span>
                <div>
                  <p className="font-semibold">+1 (555) 123-4567</p>
                  <p className="text-sm">Phone Number</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="bg-red-100 text-primary p-2 rounded-full">
                  <Image
                    src={"/images/icons/MailRed.svg"}
                    alt="mail icon"
                    width={25}
                    height={25}
                  />
                </span>
                <div>
                  <p className="font-semibold">support@example.com</p>
                  <p className="text-sm">Email Address</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="bg-red-100 text-primary p-2 rounded-full">
                  <Image
                    src={"/images/icons/LocationRed.svg"}
                    alt="location icon"
                    width={25}
                    height={25}
                  />
                </span>
                <div>
                  <p className="font-semibold">123 Main St, City, Country</p>
                  <p className="text-sm">Our Location</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Send a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label
                  className="block text-sm font-medium text-gray-600 mb-1"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-600 mb-1"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-600 mb-1"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-indigo-700 text-white font-bold py-2 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import WorkingProcess from "@/app/sections/WorkingProcess";
import Image from "next/image";
import { notFound } from "next/navigation"; // Import Next.js navigation for handling 404


// A static list of services. You can move this to a separate file or fetch it from an API.
const services = [
  {
    id: 1,
    slug: "engine-transmission-diagnostics-and-repairs",
    name: "Engine & Transmission Diagnostics and Repairs",
    desc: "Your vehicle’s engine and transmission are its most critical components, responsible for power, performance, and fuel efficiency. At B91 Automotic, we specialize in advanced diagnostics and expert repairs to ensure your car operates smoothly. Using state-of-the-art scanning tools, we pinpoint issues with precision and provide cost-effective solutions to prevent further damage. Whether it’s a minor engine tune-up or a complete transmission rebuild, our certified technicians are here to help.",
    img: "/images/Engine & Transmission Diagnostics and Repairs.png",
    features: [
      "Comprehensive engine diagnostics and performance tuning",
      "Transmission fluid change, repair, and complete rebuilds",
      "Clutch system repairs, gearbox adjustments, and drivetrain maintenance",
      "Fuel injection system cleaning, ignition repairs, and sensor replacements"
    ],
    additionalInfo: "Ignoring early signs of engine or transmission failure can lead to costly repairs. If you notice strange noises, sluggish acceleration, slipping gears, or the check engine light, bring your vehicle in for a detailed inspection."
  },
  {
    id: 2,
    slug: "autobody-paint-services",
    name: "Autobody & Paint Services",
    desc: "A vehicle’s exterior is just as important as its performance. Whether your car has suffered collision damage, minor dents, or paint fading, our expert autobody and paint specialists can restore it to like-new condition. We use high-quality paints, precise color matching, and professional repair techniques to fix damages and enhance the aesthetic appeal of your vehicle.",
    img: "/images/Autobody & Paint Services.png",
    features: [
      "Full collision repair and frame straightening for accident-damaged vehicles",
      "Removal of scratches, dents, rust spots, and paint imperfections",
      "Professional bumper, fender, and panel replacement",
      "Custom paint jobs, factory color matching, and clear coat protection"
    ],
    additionalInfo: "By choosing B91 Automotic, you can be assured that your car’s structural integrity and appearance are in expert hands. Our services help maintain resale value, prevent rusting, and enhance your vehicle’s overall appeal."
  },
  {
    id: 3,
    slug: "insurance-claims",
    name: "Insurance Claims Assistance",
    desc: "Filing an insurance claim after an accident can be a frustrating and time-consuming process. At B91 Automotic, we streamline the experience by handling all paperwork, negotiations, and repair work on your behalf. Our team works closely with major insurance providers to ensure quick claim approvals and hassle-free repairs.",
    img: "/images/Insurance Claims Assistance.png",
    features: [
      "Complete accident damage assessment and repair estimates",
      "Direct communication with your insurance company to speed up approvals",
      "Repairs using OEM (Original Equipment Manufacturer) and high-quality aftermarket parts",
      "Fast and efficient service, ensuring minimal downtime for your vehicle"
    ],
    additionalInfo: "We understand that dealing with insurance claims can be overwhelming, which is why we make it as stress-free as possible. Our team ensures accurate claim processing, so you never have to worry about unexpected costs or unnecessary delays."
  },
  {
    id: 4,
    slug: "windshield-replacement-repair",
    name: "Windshield Replacement & Repair",
    desc: "A damaged windshield is more than just a cosmetic issue—it’s a serious safety hazard. Even a small crack can weaken your vehicle’s structural integrity and obstruct visibility. At B91 Automotic, we offer fast, affordable, and high-quality windshield repairs and replacements using OEM-grade glass.",
    img: "/images/Windshield Replacement & Repair.png",
    features: [
      "Chip and crack repairs to prevent further damage",
      "Full windshield replacements using OEM and aftermarket glass",
      "Side and rear window replacements for all makes and models",
      "ADAS (Advanced Driver Assistance System) calibration for modern vehicles"
    ],
    additionalInfo: "Driving with a compromised windshield can increase the risk of accidents, airbag malfunction, and structural collapse in a collision. Our quick and efficient repair process restores your windshield’s strength, ensuring a clear and safe driving experience."
  },
  {
    id: 5,
    slug: "new-used-automotive-parts",
    name: "New & Used Automotive Parts",
    desc: "Need affordable replacement parts for your vehicle? We offer a wide selection of new and used auto parts, helping you find high-quality components at competitive prices. Whether you're replacing a damaged engine, upgrading suspension parts, or fixing electrical issues, we provide tested and inspected parts to guarantee reliability and performance.",
    img: "/images/New & Used Automotive Parts.png",
    features: [
      "Engines, transmissions, and drivetrain components",
      "Brakes, suspensions, and exhaust system parts",
      "Alternators, starters, and fuel system parts",
      "Interior and exterior accessories for all vehicle types"
    ],
    additionalInfo: "Buying from B91 Automotic means you get cost-effective solutions without compromising on quality or safety. We help you find the right part for your make and model, ensuring a perfect fit and long-lasting performance."
  },
  {
    id: 6,
    slug: "new-used-autobody-parts",
    name: "New & Used Autobody Parts",
    desc: "Looking to replace autobody parts without breaking the bank? We provide a comprehensive selection of new and used body parts, allowing you to restore your vehicle’s exterior affordably. Whether you need a replacement fender, bumper, or headlights, we stock high-quality OEM and aftermarket options for all major makes and models.",
    img: "/images/New & Used Autobody Parts.png",
    features: [
      "Bumpers, hoods, and fenders to fix exterior damage",
      "Side mirrors, headlights, taillights, and grilles for enhanced safety and style",
      "Doors, quarter panels, and trims to restore your vehicle’s look",
      "Factory color-matching and custom fitting options available"
    ],
    additionalInfo: "By offering both new and used options, we help customers find the best autobody parts within their budget. Our team ensures all parts are fully inspected and in great condition, so you can make your repairs with confidence."
  }

];

export default async function ServicePage({ params }) {
  const { servicename } = await params; // Await the params prop

  // Decode the servicename to handle URL-encoded characters
  const decodedServiceName = decodeURIComponent(servicename);

  // Find the matching service
  const service = services.find((s) => s.slug === decodedServiceName);

  if (!service) {
    notFound(); // Render the 404 page if the service is not found
  }

  return (
    <div>
      <Breadcrumb name={servicename} />

      <div className="p-4 lg:p-20 lg:pb-0">
        <div className="relative mb-20 rounded-2xl shadow-2xl bg-white flex flex-col md:flex-row gap-0 lg:gap-20 overflow-hidden">
          {/* Service Number */}
          <span className="absolute top-1/5 lg:top-0 -left-12 text-[220px] font-bold text-primary opacity-15">
            {service.id < 10 ? `0${service.id}` : service.id}
          </span>

          {/* Content Section */}
          <div className="flex-1 p-6 lg:p-10 lg:py-32">
            <h2 className="text-4xl font-bold mb-4">{service.name}</h2>
            <p className="text-gray-600 text-sm mb-6">{service.desc}</p>

            {/* Key Features List */}
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Image
                    src="/images/icons/check-black.svg"
                    alt="Check Icon"
                    width={15}
                    height={15}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Additional Information */}
            <p className="text-gray-600 text-sm">{service.additionalInfo}</p>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <Image
              src={service.img}
              alt={service.name}
              width={500}
              height={500}
              className="clipImgLeft rounded-2xl w-full h-full min-h-[400px]"
            />
          </div>
        </div>
      </div>

      <WorkingProcess />
    </div>
  );
}

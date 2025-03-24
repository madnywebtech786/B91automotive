import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import WorkingProcess from "@/app/sections/WorkingProcess";
import Image from "next/image";


// A static list of services. You can move this to a separate file or fetch it from an API.
const services = [
  {
    id: 1,
    slug: "engine-transmission-diagnostics-and-repairs",
    name: "Engine & Transmission Diagnostics and Repairs",
    desc: "At our state-of-the-art facility, we provide comprehensive diagnostics and repairs for both engines and transmissions. Our team of expert technicians uses cutting-edge diagnostic equipment to identify even the most elusive issues, ensuring that every component is meticulously inspected. Once the problem is diagnosed, we deliver precise repairs using genuine parts to restore your vehicle’s performance and efficiency. Whether it’s routine maintenance or unexpected breakdowns, we are dedicated to prolonging the life of your vehicle and ensuring optimal performance on every drive. Trust us to keep your engine running smoothly and your transmission shifting seamlessly, so you can drive with confidence.",
    img: "/images/slide1.jpg",
  },
  {
    id: 2,
    slug: "autobody-restoration-and-collision-repair",
    name: "Autobody Restoration & Collision Repair",
    desc: "We pride ourselves on offering exceptional autobody restoration services designed to bring your vehicle back to its pristine condition. Our skilled body shop professionals handle everything from minor dents and scratches to major collision repairs. Using advanced repair techniques and high-quality materials, we ensure that every repair not only meets but exceeds industry standards. Our meticulous attention to detail and commitment to craftsmanship restore both the appearance and structural integrity of your vehicle, enhancing its safety and value. Experience a full transformation that revives your car’s beauty and durability.",
    img: "/images/slide1.jpg",
  },
  {
    id: 3,
    slug: "insurance-claims-assistance-and-repair-coordination",
    name: "Insurance Claims Assistance & Repair Coordination",
    desc: "Navigating insurance claims can be complex and stressful, which is why our dedicated team is here to streamline the entire process. We work directly with your insurance provider to document damages, prepare accurate repair estimates, and expedite claim approvals. By handling the paperwork and negotiations on your behalf, we reduce delays and ensure that your vehicle is restored efficiently. Our transparent process and personalized support give you peace of mind, allowing you to focus on what matters most while we work to get you back on the road swiftly and safely.",
    img: "/images/slide1.jpg",
  },
  {
    id: 4,
    slug: "windshield-replacement-and-chip-repair",
    name: "Windshield Replacement & Chip Repair",
    desc: "Your windshield plays a crucial role in both safety and visibility. Specializing in professional windshield replacement and repair, we use only high-quality, safety-certified glass to ensure a perfect fit and maintain your vehicle’s structural integrity. For minor chips or cracks, our precise repair techniques restore clarity and prevent further damage. Our meticulous approach guarantees that each installation meets strict safety standards, ensuring a secure and seamless result. Rely on our expertise to deliver a solution that safeguards you and enhances your driving experience.",
    img: "/images/slide1.jpg",
  },
  {
    id: 5,
    slug: "premium-new-and-certified-pre-owned-automotive-parts",
    name: "Premium New & Certified Pre-Owned Automotive Parts",
    desc: "Our parts department offers a wide range of premium automotive parts, including both brand new and certified pre-owned options sourced from trusted manufacturers. We understand that high-quality parts are vital for maintaining your vehicle’s performance and longevity. Whether you require original equipment manufacturer (OEM) components or reliable cost-effective alternatives, our knowledgeable team is dedicated to helping you find the perfect match. Every part is rigorously inspected to ensure it meets the highest quality standards, ensuring your vehicle continues to operate at its peak performance.",
    img: "/images/slide1.jpg",
  },
];

export default function ServicePage({ params }) {
  // Extract the service slug from the route parameters.
  const { servicename } = params;
  // Find the service in our static array.
  const service = services.find((s) => s.slug === servicename);

  if (!service) {
    return <p>Service not found.</p>;
  }

  return (
    <div>
      <Breadcrumb name={"Services"} />

      <div className="p-4 lg:p-20 lg:pb-0">
        <div className="relative mb-20 rounded-2xl shadow-2xl bg-white flex flex-col md:flex-row gap-0 lg:gap-20 overflow-hidden">
          {/* Service Number */}
          <span className="absolute top-1/5 lg:top-0 -left-12 text-[220px] font-bold text-primary opacity-15">
            {service.id < 10 ? `0${service.id}` : service.id}
          </span>

          {/* Content Section */}
          <div className="flex-1 p-6 lg:p-10 lg:py-32">
            <h2 className="text-4xl font-bold mb-4">{service.name}</h2>
            <p className="text-gray-600">{service.desc}</p>
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

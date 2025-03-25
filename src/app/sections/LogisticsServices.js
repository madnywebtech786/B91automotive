import Image from "next/image";
import Link from "next/link";

const LogisticsServices = () => {
  const services = [
    {
      title: "Engine & Transmission Diagnostics",
      slug: "engine-transmission-diagnostics-and-repairs",
      description:
        "We offer advanced diagnostics and repairs to keep your engine and transmission running smoothly.",
      icon: "/images/icons/Engine & Transmission.svg",
      bgImage: "/images/slide1.jpg",
      color: "bg-white",
      textColor: "text-black",
    },
    {
      title: "Autobody & Paint Services",
      slug: "autobody-paint-services",
      description:
        "From collision repair to custom paint jobs, we restore your vehicle’s exterior to perfection.",
      icon: "/images/icons/Autobody & Paint.svg",
      bgImage: "/images/slide1.jpg",
      color: "bg-white",
      textColor: "text-black",
    },
    {
      title: "Insurance Claims Assistance",
      slug: "insurance-claims",
      description:
        "We handle insurance paperwork and repairs, ensuring a hassle-free claims process.",
      icon: "/images/icons/Insurance Claims.svg",
      bgImage: "/images/slide1.jpg",
      color: "bg-white",
      textColor: "text-black",
    },
    {
      title: "Windshield Replacement & Repair",
      slug: "windshield-replacement-repair",
      description:
        "Fast, reliable windshield repairs and replacements to keep your vision clear and safe.",
      icon: "/images/icons/Windshield Replacement.svg",
      bgImage: "/images/slide1.jpg",
      color: "bg-white",
      textColor: "text-black",
    },
    {
      title: "New & Used Automotive Parts",
      slug: "new-used-automotive-parts",
      description:
        "High-quality new and used auto parts to keep your vehicle running at its best.",
      icon: "/images/icons/New & Used Automotive.svg",
      bgImage: "/images/slide1.jpg",
      color: "bg-white",
      textColor: "text-black",
    },
    {
      title: "New & Used Autobody Parts",
      slug: "new-used-autobody-parts",
      description:
        "Affordable autobody parts to restore your vehicle’s exterior with OEM-quality options.",
      icon: "/images/icons/New & Used Autobody.svg",
      bgImage: "/images/slide1.jpg",
      color: "bg-white",
      textColor: "text-black",
    },
  ];
  

  return (
    <section className="p-4 lg:p-20 !pb-40 bg-red-50">
      <div className="text-center mb-10">
        <p className="text-red-500 font-semibold uppercase flex items-center justify-center gap-2 mb-3">
          <div className="w-10 h-0.5 bg-red-500"></div>
          Our Services
        </p>
        <h2 className="text-2xl lg:text-4xl font-bold">
          Specialist Logistics Services
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-32 px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full bg-cover bg-center rounded-lg min-h-[300px] group"
            style={{ backgroundImage: `url(${service.bgImage})` }}
          >
            <div
              className={`absolute -bottom-1/3 left-0 right-0 p-5 ${service.color} ${service.textColor} rounded-lg m-4 group-hover:bg-red-500 duration-300`}
            >
              <div className="absolute -top-12 left-4 p-3 w-20 h-20 flex items-center justify-center rounded-full bg-red-500 group-hover:bg-black duration-300">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                />
              </div>
              <div className="group-hover:text-white mt-6 duration-300">
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-sm mt-2">{service.description}</p>
                <Link href={`/Services/${service.slug}`} className="text-sm font-bold mt-4 inline-block">
                  READ MORE →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogisticsServices;

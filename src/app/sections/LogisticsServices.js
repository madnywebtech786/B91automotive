import Image from "next/image";

const LogisticsServices = () => {
  const services = [
    {
      title: "Bicycle Freight",
      description:
        "Bicycle freight services can be provided by specialized logistics.",
      icon: "/images/icons/bicycle.svg",
      bgImage: "/images/slide1.jpg",
      color: "bg-white",
      textColor: "text-black",
    },
    {
      title: "Air Freight",
      description:
        "Air freight offers several advantages over other modes of transportation.",
      icon: "/images/icons/airplane.svg",
      bgImage: "/images/slide1.jpg",
      color: "bg-white",
      textColor: "text-black",
    },
    {
      title: "Road Freight",
      description:
        "Road freight can be carried out by various vehicles flatbed trucks.",
      icon: "/images/icons/truck.svg",
      bgImage: "/images/slide1.jpg",
      color: "bg-white",
      textColor: "text-black",
    },
  ];

  return (
    <section className="p-4 lg:p-20 pb-40 bg-red-50">
      <div className="text-center mb-10">
      <p className="text-red-500 font-semibold uppercase flex items-center justify-center gap-2 mb-3">
          <div className="w-10 h-0.5 bg-red-500"></div>
          Our Services
        </p>
        <h2 className="text-2xl lg:text-4xl font-bold">Specialist Logistics Services</h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-32 lg:gap-6 px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full lg:w-1/3 bg-cover bg-center rounded-lg min-h-[300px] group"
            style={{ backgroundImage: `url(${service.bgImage})` }}
          >
            <div
              className={`absolute -bottom-1/3 left-0 right-0 p-5 ${service.color} ${service.textColor} rounded-lg m-4 group-hover:bg-red-500  duration-300`}
            >
              <div className="absolute -top-12 left-4 p-3 w-20 h-20 flex items-center justify-center rounded-full bg-red-500 group-hover:bg-black  duration-300">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                />
              </div>
              <div className="group-hover:text-white mt-6  duration-300">
                <h3 className="font-bold text-lg ">{service.title}</h3>
                <p className="text-sm mt-2">{service.description}</p>
                <a href="#" className="text-sm font-bold mt-4 inline-block">
                  READ MORE →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogisticsServices;

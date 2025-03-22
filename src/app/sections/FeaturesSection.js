import { motion } from "framer-motion";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div className="flex flex-col md:flex-row  w-full bg-black text-white">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 relative featureSide">
        <Image
          src="/images/slide1.jpg"
          alt="Mechanic Working"
          width={600}
          height={400}
          className="w-full h-full"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 p-4 lg:p-10 py-20">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 flex items-center gap-2">
          <div className="w-10 h-0.5 bg-white"></div>
          Our Features
        </h2>
        <div className="space-y-10">
          <div className="flex items-start gap-4">
            <Image
              src="/images/icons/repair.svg"
              alt="Icon"
              width={50}
              height={50}
              className="bg-primary p-2 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">Trusted & Quality Work</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                the dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="ml-10 flex items-start gap-4">
            <Image
              src="/images/icons/repair.svg"
              alt="Icon"
              width={50}
              height={50}
              className="bg-primary p-2 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">Fast Service Delivery</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                the dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="ml-20 flex items-start gap-4">
            <Image
              src="/images/icons/repair.svg"
              alt="Icon"
              width={50}
              height={50}
              className="bg-primary p-2 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">Money Back Guarantee</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                the dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

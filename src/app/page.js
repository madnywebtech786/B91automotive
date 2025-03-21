import Image from "next/image";
import Hero from "./sections/Hero";
import CarRepairSection from "./sections/CarRepairSection";
import LogisticsServices from "./sections/LogisticsServices";
import SupportSection from "./sections/SupportSection";
import WorkingProcess from "./sections/WorkingProcess";
import FeaturesSection from "./sections/FeaturesSection";
import TestimonialsSection from "./sections/Testimonials";

export default function Home() {
  return (
  <>
  <Hero />
  <CarRepairSection />
  <LogisticsServices />
  <SupportSection />
  <WorkingProcess/>
  <FeaturesSection />
  <TestimonialsSection />
  </>
  );
}

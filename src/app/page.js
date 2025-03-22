import Image from "next/image";
import Hero from "./sections/Hero";
import KnowAbout from "./sections/KnowAbout";
import LogisticsServices from "./sections/LogisticsServices";
import SupportSection from "./sections/SupportSection";
import WorkingProcess from "./sections/WorkingProcess";
import FeaturesSection from "./sections/FeaturesSection";
import TestimonialsSection from "./sections/Testimonials";
import Gallery from "./sections/Gallery";
import ContactSection from "./sections/ContactUs";

export default function Home() {
  return (
  <>
  <Hero />
  <KnowAbout />
  <LogisticsServices />
  <SupportSection />
  <WorkingProcess/>
  <FeaturesSection />
  <TestimonialsSection />
  <Gallery />
  <ContactSection />
  </>
  );
}

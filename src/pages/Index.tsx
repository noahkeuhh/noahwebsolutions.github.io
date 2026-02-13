import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import ServiceDetails from "@/components/ServiceDetails";

import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grain">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <ServiceDetails />
      <Process />
      <Skills />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

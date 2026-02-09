import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grain">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

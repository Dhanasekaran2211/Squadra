import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Works from "@/components/Works";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Works />
      <Technologies />
      <Footer />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import beeMascot from "@/assets/Adobe Express - file (1).png";
import flyingBee from "@/assets/gen1.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-0 py-3" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-foreground space-y-6">
            <p className="text-xl text-golden font-medium">Your Creative Digital Partner</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Designed For Impact,
              <br />
              <span className="text-golden">Build By Teamwork</span>
            </h1>
            <Button 
              onClick={scrollToContact}
              className="bg-golden text-olive-dark hover:bg-golden/90 font-semibold text-lg px-8 py-6 rounded-full group"
            >
              Contact us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Mascot */}
          <div className="flex justify-center md:justify-end">
            <img src={beeMascot} alt="Squadra Bee Mascot" className="w-auto max-w-xs animate-float" style={{height:"600px",width:"400px",objectFit:"cover"}}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

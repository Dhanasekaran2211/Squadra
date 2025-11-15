import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "@/assets/Squadra logo png-04.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm shadow-sm overflowX-none">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
       <button 
  onClick={() => scrollToSection("hero")}
  className="flex items-center justify-center text-2xl font-bold text-olive-dark hover:opacity-80 transition-opacity"
>
  <img 
    src={Image} 
    alt="Squadra"  
    style={{height:"50px",width:"200px",objectFit:"cover"}}
  />
</button>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("hero")} className="text-olive-dark hover:text-golden transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-olive-dark hover:text-golden transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("works")} className="text-olive-dark hover:text-golden transition-colors font-medium">
              Our Works
            </button>
            <button onClick={() => scrollToSection("about")} className="text-olive-dark hover:text-golden transition-colors font-medium">
              About Us
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-golden text-olive-dark hover:bg-golden/90 font-semibold rounded-full px-6">
              Contact us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-olive-dark"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("hero")} className="text-olive-dark hover:text-golden transition-colors font-medium text-left">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-olive-dark hover:text-golden transition-colors font-medium text-left">
              Services
            </button>
            <button onClick={() => scrollToSection("works")} className="text-olive-dark hover:text-golden transition-colors font-medium text-left">
              Our Works
            </button>
            <button onClick={() => scrollToSection("about")} className="text-olive-dark hover:text-golden transition-colors font-medium text-left">
              About Us
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-golden text-olive-dark hover:bg-golden/90 font-semibold rounded-full w-full">
              Contact us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

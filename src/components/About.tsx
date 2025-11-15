import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 px-4" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Fix Your Graphic Design Bottleneck
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your brand designs are too important to be left in the hands of unreliable freelancers or expensive creative agencies. Why not hire an experienced designer who knows you by name and your brand by heart?
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-transparent border-2 border-golden text-golden hover:bg-golden hover:text-olive-dark font-semibold px-8 py-6 rounded-full transition-all"
            >
              Our Plans
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="absolute top-8 right-8 w-32 h-32 bg-golden rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-golden rounded-full blur-2xl opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" 
              alt="Partnership" 
              className="rounded-3xl w-full shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

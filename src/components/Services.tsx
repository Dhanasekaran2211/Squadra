import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80",
  },
  {
    title: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  },
  {
    title: "Branding & Identity Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
  },
  {
    title: "Illustrations",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80",
  },
  {
    title: "Print & Package Designs",
    image: "https://images.unsplash.com/photo-1544816565-aa4fffeb1167?w=800&q=80",
  },
  {
    title: "UI/Ux Design",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-golden transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-golden transition-colors">
                  {service.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

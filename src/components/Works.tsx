import { Card } from "@/components/ui/card";
import tumbletTales from "@/assets/Logo Folio-02.jpg";

const works = [
  {
    title: "Tumbler Tales",
    description: "This logo blends a classic glass of tea with an open book, symbolizing a cozy space for conversation, creativity, and culture.",
    image: tumbletTales
  },
  {
    title: "The Wise Choice",
    description: "A modern brand identity for a creative agency focused on innovative solutions.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
  },
  {
    title: "Nature Illustrations",
    description: "Beautiful landscape and nature-themed illustrations for digital products.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    title: "Brand Package Design",
    description: "Complete packaging solution with eco-friendly materials and design.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  },
];

const Works = () => {
  return (
    <section id="works" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Our Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-golden transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[2/2] overflow-hidden bg-cream">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-golden transition-colors">
                  {work.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {work.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

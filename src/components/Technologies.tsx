const technologies = [
  { name: "Adobe", color: "#FF0000" },
  { name: "Canva", color: "#00C4CC" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Shopify", color: "#96BF48" },
  { name: "WordPress", color: "#21759B" },
  { name: "Squarespace", color: "#000000" },
  { name: "Webflow", color: "#4353FF" },
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "Vue.js", color: "#4FC08D" },
];

const Technologies = () => {
  return (
    <section className="py-24 px-4" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Tech Grid */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
              Tools And Technologies
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 flex items-center justify-center aspect-square hover:border-golden transition-all duration-300 group cursor-pointer"
                >
                  <span 
                    className="text-lg font-bold group-hover:scale-110 transition-transform"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Squadra, innovation is at the core of everything we create. Our team leverages advanced frameworks, cloud technologies, and automation tools to deliver high-performance and scalable digital solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From integrating APIs and building custom dashboards to implementing AI-driven analytics, we craft smarter systems that adapt and grow with technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/assets/Squadra logo png-04.png";
import Logo2 from "@/assets/gen1.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-background border-t border-border py-16 px-4">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-4 gap-12 mb-12 align-items-center">
          {/* Brand */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
  <div className="flex items-center">
    <img 
      src={Logo} 
      alt="logo" 
      className="w-32 md:w-40 h-auto object-contain"
    />
  </div>

  <img 
    src={Logo2} 
    alt="logo" 
    className="w-20 md:w-28 h-auto object-contain animate-float"
  />

            <p className="text-muted-foreground leading-relaxed">
              We Believe in creativity backed by data. Empowering businesses with digital solutions that drive measurable results.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-golden hover:text-golden/80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-golden hover:text-golden/80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-golden hover:text-golden/80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>
              </a>
              <a href="#" className="text-golden hover:text-golden/80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-golden font-bold text-lg mb-4">Quick links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("hero")} className="text-muted-foreground hover:text-golden transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("works")} className="text-muted-foreground hover:text-golden transition-colors">
                  Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-golden transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-golden transition-colors">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-2">
            <h3 className="text-golden font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-golden flex-shrink-0" />
                <a href="mailto:squadra@gmail.com" className="hover:text-golden transition-colors">
                  squadra@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-golden flex-shrink-0" />
                <a href="tel:+919363877639" className="hover:text-golden transition-colors">
                  +91 9363877639
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-golden flex-shrink-0" />
                <span>Coimbatore, Tamilnadu.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            Copyright 2025 <span className="text-golden font-semibold">Squadra Digital</span> @ All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

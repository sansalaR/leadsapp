"use client";
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center shadow-glow transition-transform group-hover:scale-110">
              <Zap className="w-5 h-5 text-accent-foreground" />
              <div className="absolute inset-0 rounded-xl bg-accent-gradient opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
            </div>
            <span className="text-xl font-bold text-foreground">LeadFlow</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {["Features", "How It Works", "Pricing"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="relative text-muted-foreground hover:text-foreground transition-colors font-medium group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gradient group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="font-medium">Log in</Button>
            <Button variant="cta" size="default" className="shadow-glow">
              Get Started Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {["Features", "How It Works", "Pricing"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <Button variant="ghost" className="justify-start">Log in</Button>
                <Button variant="cta">Get Started Free</Button>
                <Button
                    className="bg-pink-500 text-white hover:bg-pink-600"
                    size="default"
                    >
                    Get Started
                    </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

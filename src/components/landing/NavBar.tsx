"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <span className="text-lg font-semibold text-foreground">LeadFlow</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {["Features", "How It Works", "Pricing"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Get started</Button>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {["Features", "How It Works", "Pricing"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <Button variant="ghost" className="justify-start">Log in</Button>
                <Button>Get started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

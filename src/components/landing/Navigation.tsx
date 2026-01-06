import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#pillars", label: "Accompagnement" },
  { href: "#values", label: "Valeurs" },
  { href: "#pricing", label: "Tarifs" },
  { href: "#packs", label: "Packs" },
  { href: "#practical", label: "Infos pratiques" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow py-4 px-4 flex items-center justify-between">
        <a 
          href="#" 
          className={`font-serif text-xl font-semibold transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          Eva Boisrond
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button 
            size="sm" 
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <a href="mailto:bevacoaching@gmail.com">Contact</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-primary-foreground"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-primary-foreground"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-card border-b border-border"
        >
          <div className="container-narrow py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-accent transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
              asChild
            >
              <a href="mailto:bevacoaching@gmail.com">Contact</a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;

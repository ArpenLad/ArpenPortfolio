import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 bg-gray-900/50 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="#" className="text-xl font-bold text-white flex items-center">
            <span className="text-primary mr-1">&lt;</span>
            <span>Jane Doe</span>
            <span className="text-primary ml-1">/&gt;</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
            <Button variant="default" asChild>
              <a href="#" className="bg-primary hover:bg-primary/90">Resume</a>
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu} 
            className="md:hidden text-gray-300 hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden pb-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              onClick={handleLinkClick}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Contact
            </a>
            <Button variant="default" asChild className="bg-primary hover:bg-primary/90 w-full">
              <a href="#" onClick={handleLinkClick}>Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

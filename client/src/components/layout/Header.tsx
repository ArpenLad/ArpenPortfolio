import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Add scroll effect and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Check which section is currently in view
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      const currentPosition = window.scrollY + 200; // Adding offset to improve detection
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (currentPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to determine if a nav link is active
  const isActive = (section: string) => activeSection === section;

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
            <a 
              href="#about" 
              className={`relative transition-colors duration-300 ${isActive('about') ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
            >
              About
              {isActive('about') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transform -translate-y-1"></span>}
            </a>
            <a 
              href="#projects" 
              className={`relative transition-colors duration-300 ${isActive('projects') ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
            >
              Projects
              {isActive('projects') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transform -translate-y-1"></span>}
            </a>
            <a 
              href="#skills" 
              className={`relative transition-colors duration-300 ${isActive('skills') ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
            >
              Skills
              {isActive('skills') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transform -translate-y-1"></span>}
            </a>
            <a 
              href="#contact" 
              className={`relative transition-colors duration-300 ${isActive('contact') ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
            >
              Contact
              {isActive('contact') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transform -translate-y-1"></span>}
            </a>
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
              className={`relative ${isActive('about') ? 'text-white font-medium pl-3 border-l-2 border-primary' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}
              onClick={handleLinkClick}
            >
              About
            </a>
            <a 
              href="#projects" 
              className={`relative ${isActive('projects') ? 'text-white font-medium pl-3 border-l-2 border-primary' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}
              onClick={handleLinkClick}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className={`relative ${isActive('skills') ? 'text-white font-medium pl-3 border-l-2 border-primary' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}
              onClick={handleLinkClick}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className={`relative ${isActive('contact') ? 'text-white font-medium pl-3 border-l-2 border-primary' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}
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

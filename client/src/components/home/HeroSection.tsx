import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-primary font-medium mb-4">Hello, my name is</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Jane Doe</h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-400 mb-6">I build things for the web.</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="px-6 py-6">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" className="px-6 py-6 border-2 border-primary hover:border-primary/80 text-primary hover:text-primary/80">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-xl -rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700" 
                alt="Jane Doe - Software Engineer" 
                className="relative z-10 rounded-xl w-72 md:w-80 lg:w-96 h-auto object-cover shadow-xl" 
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
          <a href="#about" className="text-gray-400 hover:text-primary transition-colors duration-300">
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

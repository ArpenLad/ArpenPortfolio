import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { constants } from "@/lib/constants";

interface ProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  delay: string;
}

function ProjectCard({ 
  title, 
  description, 
  imageSrc, 
  technologies, 
  githubUrl, 
  liveUrl, 
  delay 
}: ProjectProps) {
  return (
    <Card className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 animate-slide-in" style={{ animationDelay: delay }}>
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={`${title} Project`} 
          className="w-full h-full object-cover" 
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-xl">{title}</h3>
          <div className="flex space-x-2">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={`${title} GitHub repository`}
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={`${title} live demo`}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-700 rounded-full">{tech}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work. Each project is unique and solves a specific problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {constants.projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              {...project}
              delay={`${0.2 + (index * 0.2)}s`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-2 border-primary text-primary hover:text-primary/80 hover:border-primary/80">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 font-medium"
            >
              <span>View All Projects</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

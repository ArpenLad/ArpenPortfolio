import { Link } from "wouter";
import aboutData from '@/data/about.json';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#" className="text-xl font-bold text-white flex items-center">
              <span className="text-primary mr-1">&lt;</span>
              <span>Arpen Lad</span>
              <span className="text-primary ml-1">/&gt;</span>
            </Link>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href={aboutData.contact.social.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href={aboutData.contact.social.linkedin}  
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            {/* <a 
              href="https://twitter.com/your-handle" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a> */}
            <a 
              href="mailto:jane.doe@example.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Arpen Lad. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

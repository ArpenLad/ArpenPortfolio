import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const availableFor = [
    "Freelance Projects",
    "Full-time Positions",
    "Consulting",
    "Speaking Engagements"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-in">
            <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border-gray-600 text-white focus:ring-primary"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border-gray-600 text-white focus:ring-primary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-gray-700 border-gray-600 text-white focus:ring-primary resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>

            <div className="space-y-8 animate-slide-in" style={{ animationDelay: "0.4s" }}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary mt-1 mr-3">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <p className="text-gray-300">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary mt-1 mr-3">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <a href="mailto:jane.doe@example.com" className="text-gray-300 hover:text-white transition-colors">
                        jane.doe@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary mt-1 mr-3">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <a href="tel:+14155551234" className="text-gray-300 hover:text-white transition-colors">
                        +1 (415) 555-1234
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/your-username" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a 
                    href="https://linkedin.com/in/your-profile" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                  <a 
                    href="https://twitter.com/your-handle" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a 
                    href="https://instagram.com/your-profile" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>

              <Card className="bg-gray-900">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Available For</h3>
                  <ul className="space-y-2">
                    {availableFor.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-check text-primary mr-2"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

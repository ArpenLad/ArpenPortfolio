export default function AboutSection() {
  const recentTech = [
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "TypeScript",
    "GraphQL",
    "Tailwind CSS"
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src="https://pixabay.com/get/g71044edc5622dccaadaa7539b1b74bb87bcfac94a748e86546b1af36e21b7137a2ac2d8e04b4174c054f6427b6ccfd79a683e2ec62da39d4583774ad82ddab5e_1280.jpg" 
              alt="Jane working at her desk" 
              className="rounded-lg shadow-xl mx-auto w-full max-w-lg" 
            />
          </div>
          
          <div className="md:w-1/2 animate-slide-in" style={{ animationDelay: "0.4s" }}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold inline-block mb-2">About Me</h2>
              <div className="h-1 w-20 bg-primary rounded"></div>
            </div>
            
            <div className="text-gray-300 space-y-4">
              <p>
                Hello! I'm Jane, a software engineer based in San Francisco, CA. I enjoy creating things that live on the internet, 
                whether that be websites, applications, or anything in between. My goal is to always build products that provide 
                pixel-perfect, performant experiences.
              </p>
              <p>
                After graduating with a degree in Computer Science from UC Berkeley, I joined the engineering team at TechCorp where 
                I work on a wide variety of interesting and meaningful projects on a daily basis.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              
              <div className="grid grid-cols-2 gap-2 max-w-md">
                {recentTech.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-caret-right text-primary mr-2"></i>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

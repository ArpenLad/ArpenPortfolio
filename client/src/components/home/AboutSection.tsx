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
            <div className="relative bg-gradient-to-tr from-primary/20 to-primary/50 p-1 rounded-lg shadow-xl max-w-lg mx-auto">
              <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center">
                  <span className="text-6xl text-white font-bold">JD</span>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-1">Jane Doe</h3>
                  <p className="text-gray-300">Software Engineer</p>
                </div>
              </div>
            </div>
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

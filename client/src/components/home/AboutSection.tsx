import aboutData from "@/data/about.json";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div
            className="w-full max-w-3xl animate-slide-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold inline-block mb-2 text-white">
                About Me
              </h2>
              <div className="h-1 w-20 bg-primary rounded mx-auto"></div>
            </div>

            <div className="text-gray-300 space-y-4">
              {aboutData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p>
                Here are a few technologies I've been working with recently:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-2xl mx-auto">
                {aboutData.recentTech.map((tech, index) => (
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

import { Card, CardContent } from "@/components/ui/card";
import skillsData from "@/data/skills.json";

interface SkillItemProps {
  name: string;
  percentage: number;
}

function SkillItem({ name, percentage }: SkillItemProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-300">{name}</span>
      <div className="w-32 h-2 bg-gray-700 rounded-full">
        <div 
          className="h-2 bg-primary rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function SkillCategory({ 
  title, 
  icon, 
  skills,
  delay
}: { 
  title: string; 
  icon: string; 
  skills: SkillItemProps[];
  delay: string;
}) {
  return (
    <Card className="bg-gray-800 shadow-lg animate-slide-in" style={{ animationDelay: delay }}>
      <CardContent className="p-6">
        <div className="text-primary text-3xl mb-4">
          <i className={icon}></i>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <div className="space-y-2">
          {skills.map((skill, index) => (
            <SkillItem key={index} name={skill.name} percentage={skill.percentage} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl font-bold mb-2 text-white">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here's a snapshot of my technical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={`${0.2 + (index * 0.2)}s`}
            />
          ))}
        </div>

        <div className="mt-16 animate-slide-in" style={{ animationDelay: "0.8s" }}>
          <h3 className="text-xl font-semibold mb-6 text-center text-white">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillsData.allTechnologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-primary/20 hover:text-white transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

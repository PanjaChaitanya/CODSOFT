import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress"; // Assuming you're using a Progress component

const skills = [
  { 
    name: "Web Development", 
    level: 90, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  { 
    name: "UI/UX Design", 
    level: 60, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  { 
    name: "React", 
    level: 75, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  { 
    name: "Node.js", 
    level: 70, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  { 
    name: "JavaScript", 
    level: 85, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  { 
    name: "Mongo DB", 
    level: 75, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-light-gray hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={skill.logo} 
                  alt={`${skill.name} logo`} 
                  className="w-8 h-8"
                />
                <h3 className="text-xl font-semibold text-secondary">{skill.name}</h3>
              </div>
              <div className="space-y-2">
                <motion.div
                  initial={{ width: 0 }} // Start the progress bar at 0%
                  whileInView={{ width: `${skill.level}%` }} // Animate it to the target level
                  transition={{ duration: 2, ease: "easeOut" }} // Control the speed and easing of the animation
                  className="h-2 bg-primary rounded-full"
                />
                <p className="text-sm text-gray-600 text-right">{skill.level}%</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

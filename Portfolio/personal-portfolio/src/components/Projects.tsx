import { motion } from "framer-motion";

const projects = [
  {
    title: "Quiz-Spot",
    description: "A web application built with React and Bootstrap,Play the quiz for react and social and it will display the result card",
    image: "./quizspot.png",
    projectlive:"https://chaitanya-quiz-app.vercel.app/"
  },
  {
    title: "Weather App",
    description: "Weather App responsive design  and api implementation to fetch the wethaer details based on geo location",
    image: "./weatherProject.png",
    projectlive:"https://panjachaitanya.github.io/WeatherApplication/"
  },
  {
    title: "Color Font Picker",
    description: "Built with HTML, Css and Javascript ,where you can add you text with different styling fonts  and color and Use by downloading the image",
    image: "./colorfontpicker.png",
    projectlive: "https://chaitanya-color-font-picker.vercel.app/"
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: -50 }} // Start invisible and above
              whileInView={{ opacity: 1, y: 0 }} // Animate to visible and drop down
              transition={{
                duration: 2, // Animation duration
                delay: index * 1, // Stagger effect
                ease: "easeOut", // Smooth easing
              }}
              viewport={{
                once: true, // Ensures the animation runs only once
                amount: 0.3, // Triggers when 30% of the card is visible
              }}
              className="rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <button className="relative inline-block mt-4 text-black font-semibold py-2 px-4 rounded-md overflow-hidden bg-transparent border-2 border-primary group">
                  <span className="absolute inset-0 w-full h-full bg-primary transform origin-bottom-left scale-x-0 scale-y-0 transition-all duration-300 group-hover:scale-x-100 group-hover:scale-y-100 group-hover:origin-top-right"></span>
                  <span className="relative z-10"><a href={project.projectlive} target="_blank">View Project</a></span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

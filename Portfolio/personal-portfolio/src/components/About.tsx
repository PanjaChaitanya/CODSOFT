import { motion } from "framer-motion";
import Particles from "react-tsparticles";

export const About = () => {
  // Function to handle resume download
  const handleDownload = () => {
    const resumeUrl = "/path/to/your/resume.pdf"; // Path to the resume PDF
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Chaitanya_Panja_Resume.pdf"; // You can change the filename here
    link.click();
  };

  return (
    <section id="about" className="py-20 relative bg-gray-100">
      {/* Particles Background */}
      <Particles
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1, // Keep the particles behind the content
          },
          particles: {
            number: {
              value: 100, // Increase the number of particles for more effect
              density: {
                enable: true,
                value_area: 800, // The area for the particles to spread across
              },
            },
            color: {
              value: "#A5B4FC", // Light color for particles
            },
            shape: {
              type: "circle", // Particle shape
            },
            opacity: {
              value: 0.5, // Light opacity for particles
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
              },
            },
            size: {
              value: 3, // Particle size
              random: true, // Random sizes for particles
            },
            links: {
              enable: false, // Disable the links between particles
            },
            move: {
              enable: true,
              speed: 0.5, // Speed of particle movement
              direction: "none", // Particles move randomly
              random: true, // Random movement for particles
              outMode: "out", // Particles exit the screen when they reach the edge
              straight: false, // Particles move in random directions
            },
          },
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto">
              <img
                src="./mypic.jpg"
                alt="Chaitanya Pannja"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-secondary">About Me</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hi, I'm Chaitanya Panja, a passionate developer with a keen eye for creating
              beautiful and functional web experiences. With expertise in modern web technologies,
              I bring ideas to life through clean code and intuitive design.
            </p>
            <motion.button
              onClick={handleDownload} // Trigger the resume download
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }} // Button scale on hover
              whileTap={{ scale: 0.95 }} // Button tap effect (slightly smaller on click)
            >
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

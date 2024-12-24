import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PageTransition } from "./PageTransition";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    setIsMenuOpen(false);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setIsTransitioning(false);
      if (href) {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isTransitioning && <PageTransition />}
      </AnimatePresence>
      
      <motion.header 
        className="fixed top-0 left-0 right-0 bg-white z-40 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">C</span>
            </div>
            <h1 className="text-xl font-bold text-secondary">Chaitanya Panja</h1>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white shadow-lg p-4' : 'hidden'} md:relative md:flex md:shadow-none md:p-0 md:gap-8`}>
            <a href="#about" onClick={handleNavClick} className="block py-2 md:py-0 text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#skills" onClick={handleNavClick} className="block py-2 md:py-0 text-gray-600 hover:text-primary transition-colors">Skills</a>
            <a href="#projects" onClick={handleNavClick} className="block py-2 md:py-0 text-gray-600 hover:text-primary transition-colors">Projects</a>
            <a href="#contact" onClick={handleNavClick} className="block py-2 md:py-0 text-gray-600 hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </motion.header>
    </>
  );
};
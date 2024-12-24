import { motion } from "framer-motion";

export const PageTransition = () => {
  return (
    <>
      {/* Top Left to Bottom Right Curtain */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-teal-200 z-50"
        initial={{ scaleX: 0, rotate: 45, transformOrigin: "top left" }}
        animate={{
          scaleX: [0, 1, 1, 0],
          x: ["-100%", "0%", "100%"],
          y: ["-100%", "0%", "100%"],
        }}
        exit={{ scaleX: 0, x: "100%", y: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", times: [0, 0.4, 0.6, 1] }}
      />

      {/* Top Right to Bottom Left Curtain */}
      <motion.div
        className="fixed top-0 right-0 w-full h-full bg-pink-600 z-50"
        initial={{ scaleX: 0, rotate: -45, transformOrigin: "top right" }}
        animate={{
          scaleX: [0, 1, 1, 0],
          x: ["100%", "0%", "-100%"],
          y: ["-100%", "0%", "100%"],
        }}
        exit={{ scaleX: 0, x: "-100%", y: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", times: [0, 0.4, 0.6, 1] }}
      />
    </>
  );
};

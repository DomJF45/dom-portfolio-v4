import { motion, AnimatePresence } from "framer-motion";
import { useGreeting } from "../../hooks/useGreeting";

export const Intro = () => {
  const [greeting, idx] = useGreeting();
  return (
    <>
      <AnimatePresence key={idx} mode="wait">
        <motion.h1
          className="text-5xl text-primary w-max z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {greeting}!
        </motion.h1>
      </AnimatePresence>
      <motion.h1 className="text-9xl font-semibold w-max h-max z-20 mt-0 pt-0">
        <motion.span
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ display: "inline-block" }}
        >
          I'm Dom<span className="text-secondary">.</span>
        </motion.span>
      </motion.h1>
      <motion.h1
        className="text-5xl z-99 w-max z-20 mt-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        I'm a{" "}
        <span className="bg-accent font-bold text-primary px-4 py-1 rounded-lg">
          Full Stack Developer
        </span>
      </motion.h1>
    </>
  );
};

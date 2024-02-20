import { motion } from "framer-motion";
import { Greeting } from "../../components/shapes/Greeting";

export const Intro = () => {
  return (
    <>
      <Greeting />
      <motion.h1 className="sm:text-9xl font-semibold w-max z-20 mt-0 pt-0">
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
        className="sm:text-5xl z-99 w-max z-20 mt-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        I'm a{" "}
        <span
          className="bg-transparent backdrop-blur-lg  font-bold text-primary px-4 py-1 rounded-lg"
          style={{
            display: "inline-block",
            backdropFilter: "blur(8px)", // Adjust the blur value as needed
            position: "relative",
          }}
        >
          Full Stack Developer
        </span>
      </motion.h1>
    </>
  );
};

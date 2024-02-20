import { AnimatePresence, motion } from "framer-motion";
import { SKILLS } from "../../constants";

const container = {
  hidden: {
    opacity: 1,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.5,
      when: "beforeChildren",
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Skills = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.h1
        className="font-bold"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        What I like to use
      </motion.h1>
      <motion.div
        className="mt-4 grid grid-cols-4 w-max gap-4 z-20"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {SKILLS.map((lang) => (
          <motion.div
            key={lang.title}
            className="bg-nav h-[65px] w-[100px] rounded-lg flex flex-row items-center justify-center"
            variants={item}
          >
            <img className="w-[40px]" src={lang.icon} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

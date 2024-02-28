import { AnimatePresence, motion } from "framer-motion";
import { useGreeting } from "../../hooks/useGreeting";

export const Greeting = () => {
  const [greeting, idx] = useGreeting();

  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={idx}
        className=" text-2xl sm:text-5xl text-primary w-max z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {greeting}!
      </motion.h1>
    </AnimatePresence>
  );
};

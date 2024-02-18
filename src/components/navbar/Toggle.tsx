import { motion, useAnimate } from "framer-motion";
import { useDarkMode } from "../../hooks/useDarkMode";

export const Toggle = () => {
  const toggleTheme = useDarkMode();
  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    await animate(
      scope.current,
      {
        rotate: "10deg",
        y: -10,
        scale: 1.3,
      },
      { duration: 0.5, type: "spring" }
    );
    await animate(
      scope.current,
      {
        rotate: "0deg",
        y: 0,
        scale: 1,
      },
      { duration: 0.5, type: "spring" }
    );
  };

  const handleClick = async () => {
    toggleTheme();
    await handleAnimate();
  };

  return (
    <motion.div
      ref={scope}
      className="h-[20px] w-[20px] bg-secondary mr-2 cursor-pointer rounded"
      onClick={() => handleClick()}
      initial={{ scale: 1 }}
    />
  );
};

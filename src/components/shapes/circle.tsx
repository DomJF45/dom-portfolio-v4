import { motion } from "framer-motion";

export const Circle = () => {
  return (
    <motion.div className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[100px] h-[100px] rounded-full" />
  );
};

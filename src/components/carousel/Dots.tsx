import type { DotsProps } from "./types";
import { SPRING_OPTIONS } from "./constants";
import { motion } from "framer-motion";

const Dots = ({ imgList, imgIndex, setImgIndex }: DotsProps) => {
  return (
    <div className="mt-4 flex w-full items-center justify-center gap-2 p-2">
      {imgList.map((_, index) => (
        <motion.button
          key={index}
          onClick={() => setImgIndex(index)}
          className={`h-2 w-2 rounded-full transition-colors  transition-ease ${
            index === imgIndex ? "bg-primary" : "bg-neutral-500"
          }`}
          animate={{ scale: index === imgIndex ? 1.2 : 0.85 }}
          transition={SPRING_OPTIONS}
        />
      ))}
    </div>
  );
};

export default Dots;

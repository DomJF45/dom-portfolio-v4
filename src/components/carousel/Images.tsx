import { useContext } from "react";
import { motion } from "framer-motion";
import { SPRING_OPTIONS } from "./constants";
import { CarouselContext } from "./CarouselContext";

type SIZES = "sm" | "md" | "lg";

interface ImagesProps {
  size?: SIZES;
}

const Images = ({ size = "sm" }: ImagesProps) => {
  const { imgList, imgIndex } = useContext(CarouselContext);

  const baseStyle =
    "aspect-video w-[100%] shrink-0 rounded-md bg-neutral-800 object-cover px-2 py-2";
  const sizes = {
    sm: "sm:w-[400px]",
    md: "sm:w-[600px]",
    lg: "sm:w-[100%]",
  };

  return (
    <>
      {imgList.map((proj, index) => (
        <motion.div
          key={index}
          style={{
            backgroundImage: `url(${proj.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: imgIndex === index ? 0.95 : 0.85,
          }}
          transition={SPRING_OPTIONS}
          className={`${baseStyle} ${sizes[size]}`}
        />
      ))}
    </>
  );
};

export default Images;

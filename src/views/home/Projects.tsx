import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { PROJECT_URLS } from "../../constants";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      // TODO: do stuff...
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((prev) => {
          if (prev === PROJECT_URLS.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }
    }, AUTO_DELAY);

    return () => {
      clearInterval(intervalRef);
    };
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < PROJECT_URLS.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative flex flex-col gap-3">
      <motion.div
        className="flex items-center cursor-grab active:cursor-grabbing"
        drag="x"
        onDragEnd={onDragEnd}
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      <AnimatePresence mode="wait" key={imgIndex}>
        <motion.button
          className="absolute top-0 left-0 h-1/6 min-w-1/4 w-max bg-primary rounded flex items-center px-2 text-sm self-end group"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 1 }}
        >
          <p className="font-bold group-hover:underline">
            {PROJECT_URLS[imgIndex].title}
          </p>
        </motion.button>
      </AnimatePresence>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

interface ImgsProps {
  imgIndex: number;
}

const Images = ({ imgIndex }: ImgsProps) => {
  return (
    <>
      {PROJECT_URLS.map((proj, index) => (
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
          className="aspect-video w-[100%] sm:w-[400px] shrink-0 rounded-md bg-neutral-800 object-cover px-2 py-2"
        ></motion.div>
      ))}
    </>
  );
};

interface DotsProps extends ImgsProps {
  setImgIndex: Dispatch<SetStateAction<number>>;
}

const Dots = ({ imgIndex, setImgIndex }: DotsProps) => {
  return (
    <div className="mt-4 flex w-full items-center justify-center gap-2 p-2">
      {PROJECT_URLS.map((_, index) => (
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

import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { CarouselContext } from "./CarouselContext";
import { AUTO_DELAY, DRAG_BUFFER, SPRING_OPTIONS } from "./constants";
import type { CarouselProps } from "./types";
import Dots from "./Dots";

const SwipeCarousel = ({ imgList, children }: CarouselProps) => {
  const [imgIndex, setImgIndex] = useState<number>(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      // TODO: do stuff...
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((prev) => {
          if (prev === imgList.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }
    }, AUTO_DELAY);

    return () => {
      clearInterval(intervalRef);
    };
  }, [dragX, imgList.length]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgList.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <CarouselContext.Provider value={{ imgList: imgList, imgIndex: imgIndex }}>
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
          {children}
        </motion.div>
        <AnimatePresence mode="wait" key={imgIndex}>
          <motion.button
            className="absolute top-0 left-0 h-1/6 min-w-1/4 w-max bg-primary rounded flex items-center px-2 text-sm self-end group text-white/85"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 1 }}
          >
            <p className="font-bold group-hover:underline">
              {imgList[imgIndex].title}
            </p>
          </motion.button>
        </AnimatePresence>
        <Dots imgList={imgList} imgIndex={imgIndex} setImgIndex={setImgIndex} />
      </div>
    </CarouselContext.Provider>
  );
};

export default SwipeCarousel;

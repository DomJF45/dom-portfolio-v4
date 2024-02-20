import { motion } from "framer-motion";
import { ABOUT_ME, DOM_AVATAR, LINKS, NAME, OCCUPATION } from "../../constants";
import { PiArrowUpRight } from "react-icons/pi";
import { Greeting } from "../../components/shapes/Greeting";
import { SwipeCarousel } from "./Projects";

const container = {
  hidden: {
    opacity: 1,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
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

export const About = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center justify-between gap-4 w-full">
        <div className="flex flex-row items-center gap-4 w-full ">
          <motion.div
            className={`rounded-[100%] h-[60px] w-[60px] bg-center bg-cover`}
            style={{ backgroundImage: `url(${DOM_AVATAR})` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />
          <motion.div
            className="flex flex-col"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="font-bold" variants={item}>
              {NAME}
            </motion.p>
            <motion.p className="text-text-alt" variants={item}>
              {OCCUPATION}
            </motion.p>
          </motion.div>
        </div>
        <div className="flex flex-row sm:hidden mr-3">
          <Greeting />
        </div>
      </div>
      <div className="flex flex-col overflow-x-hidden sm:hidden">
        <SwipeCarousel />
      </div>
      <motion.div
        className="flex flex-col gap-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {ABOUT_ME.map((p) => (
          <motion.div variants={item} key={p.title}>
            <p className="font-bold">{p.title}</p>
            <p className="text-text-alt ">{p.content}</p>
          </motion.div>
        ))}
        <motion.div variants={item}>
          <p className="font-bold">Connect</p>
          <div className="text-text-alt">
            {LINKS.map((li) => (
              <motion.div
                variants={item}
                className="grid grid-cols-5 gap-3"
                key={li.title}
              >
                <p className="col-span-1">{li.title}:</p>
                <a
                  className="col-span-4 inline-flex items-center hover:underline"
                  href={li.link}
                >
                  {li.at}
                  <PiArrowUpRight className="text-sm" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

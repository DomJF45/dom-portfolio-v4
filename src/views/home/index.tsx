import { motion } from "framer-motion";
import { Intro } from "./Intro";
import { WaterGrid } from "../../components/shapes/Grid";
import { About } from "./About";
import { GoPin } from "react-icons/go";
import { PROJECT_LIST } from "../../constants";
import { Images, SwipeCarousel } from "../../components/carousel";

const PINNED_PROJECTS = PROJECT_LIST.filter((proj) => proj.pinned);

const Home = () => {
  return (
    <div className="flex flex-col w-full sm:flex-row h-full sm:pt-4">
      <motion.div className="hidden sm:flex flex-col justify-between relative w-full">
        <div className="flex flex-col">
          <Intro />
          <div className="hidden sm:block absolute top-0 right-0 z-10">
            <WaterGrid />
          </div>
        </div>
        <motion.div
          className="flex flex-col gap-2 w-[400px] overflow-hidden z-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h1 className="inline-flex font-bold items-center gap-1">
            Pinned Projects{" "}
            <span className="text-xs">
              <GoPin />
            </span>
          </h1>
          <SwipeCarousel imgList={PINNED_PROJECTS}>
            <Images />
          </SwipeCarousel>
        </motion.div>
      </motion.div>
      <motion.div className="w-full h-full flex flex-col relative sm:w-2/4 sm:pl-5">
        <div className="flex flex-row">
          <div
            className="hidden sm:block h-full"
            style={{
              background: "hsl(var(--color-text) / .20)",
              width: "4px",
              marginRight: "50px",
              borderRadius: "10px",
            }}
          />
          <About />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

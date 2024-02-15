import "./App.css";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useGreeting } from "./hooks/useGreeting";
import { Navbar } from "./components/navbar/Navbar";

const langs = [
  {
    title: "React",
    icon: "/logos/react.png",
  },
  {
    title: "GO",
    icon: "/logos/go.png",
  },
  {
    title: "Typescript",
    icon: "/logos/typescript.png",
  },
  {
    title: "Javascript",
    icon: "/logos/javascript.png",
  },
  {
    title: "Node.JS",
    icon: "/logos/nodejs.png",
  },
  {
    title: "Express",
    icon: "/logos/express.png",
  },
];

function App() {
  const [greeting, idx] = useGreeting();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], ["0%", "50%"]);

  return (
    <>
      <Navbar />
      <motion.div
        className="px-20 py-5 flex flex-col gap-5 relative overflow-scroll h-[100vh] w-full"
        style={{ y }}
      >
        <div className="flex flex-row justify-between h-full w-full">
          <motion.div className="flex flex-col">
            <AnimatePresence key={idx} mode="wait">
              <motion.h1
                className="text-7xl text-[#b5838d]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                {greeting}
              </motion.h1>
            </AnimatePresence>
            <motion.h1 className="text-8xl">
              <motion.span
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ display: "inline-block" }}
              >
                I'm Dominick
              </motion.span>
            </motion.h1>
            <motion.h1
              className="text-7xl text-[#b5838d]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{ y: y }}
            >
              a Software Engineer
            </motion.h1>

            <motion.p className="mt-4">
              I create full stack web applications
            </motion.p>
            <motion.p className="mt-4">Tools:</motion.p>
            <div className="flex flex-row gap-4">
              {langs.map((lang) => (
                <div
                  key={lang.title}
                  className="bg-[#38363410] h-[65px] w-[100px] rounded-lg flex flex-row items-center justify-center"
                >
                  <img className="w-[40px]" src={lang.icon} />
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="flex flex-row h-[80vh] relative"></motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default App;

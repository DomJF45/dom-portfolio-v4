import "./App.css";
import { motion } from "framer-motion";
import { Navbar } from "./components/navbar/Navbar";
import { Intro } from "./views/home/Intro";
import { About } from "./views/home/About";
import { WaterGrid } from "./components/shapes/Grid";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  useDarkMode();
  return (
    <>
      <motion.div className="px-20 py-5 flex flex-col gap-5 relative h-screen">
        <div className="flex flex-col justify-between h-full w-full sm:flex-row">
          <motion.div className="flex flex-col relative w-full">
            <Intro />
            <div className="absolute top-0 right-0 z-10">
              <WaterGrid />
            </div>
          </motion.div>

          <motion.div className="flex flex-col relative justify-start w-2/4 pl-5">
            <div className="flex flex-row h-full">
              <div
                style={{
                  background: "hsl(var(--color-primary))",
                  width: "4px",
                  height: "100%",
                  marginRight: "50px",
                  borderRadius: "10px",
                }}
              />
              <About />
            </div>
          </motion.div>
        </div>
        <Navbar />
      </motion.div>
    </>
  );
}

export default App;

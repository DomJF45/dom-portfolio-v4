import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { PROJECT_LIST } from "../../constants";
import { useNavigate } from "react-router-dom";
import { TechTile } from "../../components/tags/TechTile";

const list = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const stackList = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-5">
        <div className="flex flex-col w-full sm:w-1/2 gap-4">
          <h1 className="font-bold mb-4 font-bold">Projects</h1>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 self-center w-full gap-8"
            variants={list}
            initial="hidden"
            animate="visible"
          >
            {PROJECT_LIST.map((proj) => (
              <div className="flex flex-col gap-2">
                <div className="sm:hidden flex items-center w-full justify-between">
                  <h1 className="font-bold">{proj.title}</h1>
                  <motion.div
                    className="flex items-center gap-2"
                    variants={stackList}
                    initial="hidden"
                    animate="visible"
                  >
                    {proj.stack.map((lang, index) => (
                      <TechTile lang={lang} key={index} />
                    ))}
                  </motion.div>
                </div>
                <Image project={proj} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

interface ImageProps {
  project: {
    id: string;
    img: string;
    title: string;
    bio: string;
    pinned?: boolean;
    stack: {
      title: string;
      logo: string;
    }[];
  };
}

const Image = ({ project }: ImageProps) => {
  const [bio, animateBio] = useAnimate();
  const [tag, animateTag] = useAnimate();
  const [stack, animateStack] = useAnimate();
  const navigate = useNavigate();

  const handleAnimate = async () => {
    animateBio(bio.current, { opacity: 1, y: 0 });
    animateTag(tag.current, { y: 0, opacity: 1 });
    animateStack(stack.current, { opacity: 1, x: 0 });
  };

  const handleEndAnimate = async () => {
    animateBio(bio.current, { opacity: 0, y: 20 });
    animateTag(tag.current, { opacity: 0, y: -20 });
    animateStack(stack.current, { opacity: 0, x: -20 });
  };

  return (
    <motion.div
      className="relative bg-slate-400 w-full rounded aspect-video cursor-pointer flex justify-center border-text shadow-md"
      style={{
        backgroundImage: `url(${project.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      variants={item}
      whileHover={{
        scale: 1.1,
      }}
      onHoverStart={() => handleAnimate()}
      onHoverEnd={() => handleEndAnimate()}
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <AnimatePresence mode="wait" key={project.title}>
        <motion.button
          ref={tag}
          className="absolute top-[-10px] left-[-10px] h-1/6 min-w-1/4 w-max bg-primary rounded flex items-center px-2 text-sm self-end group text-white/85"
          initial={{ y: 20, opacity: 0 }}
        >
          <p className="font-bold group-hover:underline">{project.title}</p>
        </motion.button>
      </AnimatePresence>
      <motion.div
        ref={bio}
        className="absolute bg-nav bottom-[-10px] left-[-10px] w-[90%] rounded text-sm rounded px-2 py-1 backdrop-blur-sm shadow text-xs"
        initial={{ opacity: 0, y: 20 }}
      >
        <p className="font-bold">{project.bio}</p>
      </motion.div>
      <motion.div
        ref={stack}
        className="absolute bottom-0 top-[-10px] right-[-10px] h-full flex flex-col gap-1"
        initial={{ opacity: 0, x: -20 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <AnimatePresence presenceAffectsLayout key={project.title}>
          {project.stack.map((lang, index) => (
            <TechTile key={index} lang={lang} />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

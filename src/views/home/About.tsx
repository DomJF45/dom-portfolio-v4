import { motion } from "framer-motion";
import {
  ABOUT_ME,
  DOM_AVATAR,
  LINKS,
  NAME,
  OCCUPATION,
  PROJECT_LIST,
} from "../../constants";
import { PiArrowUpRight } from "react-icons/pi";
import { Greeting } from "../../components/shapes/Greeting";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PiXBold } from "react-icons/pi";
import { SwipeCarousel, Images } from "../../components/carousel";
import { TechTile } from "../../components/tags/TechTile";

const PINNED_PROJECTS = PROJECT_LIST.filter((proj) => proj.pinned);

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
          <AvModal />{" "}
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
        <SwipeCarousel imgList={PINNED_PROJECTS}>
          <Images />
        </SwipeCarousel>
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
            {typeof p.content === "string" ? (
              <p className="text-text-alt ">{p.content}</p>
            ) : (
              <motion.div
                className="flex items-center gap-3 mt-2"
                transition={{ staggerChildren: 0.2 }}
                variants={container}
              >
                {p.content.map((lang) => (
                  <TechTile lang={lang} key={lang.title} size="xl" />
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
        <motion.div variants={item} className="mb-[40px]">
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
                  target="_blank"
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

const AvModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <motion.div
        className={`rounded-[100%] h-[60px] w-[60px] bg-center bg-cover z-30 cursor-pointer`}
        style={{ backgroundImage: `url(${DOM_AVATAR})` }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.2, borderRadius: "8px" }}
        onClick={openModal}
      />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={"relative z-20"} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" onClick={closeModal} />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden p-6 text-left align-middle shadow-xl transition-all">
                  <PiXBold
                    className="absolute top-0 right-0 text-neutral-300 text-2xl hover:brightness-75 cursor-pointer"
                    onClick={closeModal}
                  />
                  <img src={DOM_AVATAR} className="w-full rounded-2xl" />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

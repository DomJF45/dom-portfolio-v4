import { useState } from "react";
import { motion } from "framer-motion";
import { Toggle } from "./Toggle";

const tabs = ["Home", "Projects", "Blog", "Contact"];

export const Navbar = () => {
  const [selected, setSelected] = useState<string>(tabs[0]);

  return (
    <div className="flex flex-row sticky bottom-10 rounded-lg justify-center items-center bottom-0">
      <div className="flex flex-row px-2 bg-[#12121208] w-max py-2 w-full rounded-lg">
        <div className="flex flex-row gap-5 items-center">
          {tabs.map((tab, index) => (
            <Item
              key={index}
              active={selected === tab}
              onClick={() => setSelected(tab)}
            >
              {tab}
            </Item>
          ))}
          <Toggle />
        </div>
      </div>
    </div>
  );
};

interface ItemProps extends React.HTMLProps<HTMLAnchorElement> {
  active?: boolean;
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ active = false, children, ...rest }) => {
  const baseStyle =
    "cursor-pointer rounded px-2 py-1 transition-colors relative font-semibold ";
  const activeStyle = `text-white`;
  const inactiveStyle = `bg-none`;
  return (
    <a
      className={`${baseStyle} + ${active ? activeStyle : inactiveStyle}`}
      {...rest}
    >
      <span className="relative z-10">{children}</span>
      {active && (
        <motion.span
          layoutId="pill-tab"
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-0 bg-primary rounded"
        ></motion.span>
      )}
    </a>
  );
};

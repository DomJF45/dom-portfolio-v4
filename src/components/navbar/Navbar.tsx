import { useState } from "react";
import { motion } from "framer-motion";
import { Toggle } from "./Toggle";
import { TABS } from "../../constants";
import { MoreMenu } from "./Menu";

export const Navbar = () => {
  const [selected, setSelected] = useState<string>(TABS[0]);

  return (
    <div className="flex flex-row sticky bottom-3 rounded-lg justify-center items-center bottom-0">
      <div className="flex flex-row px-2 bg-nav w-max py-2 w-full rounded-lg backdrop-blur-md">
        <div className="flex flex-row gap-5 items-center">
          {TABS.map((tab, index) => (
            <Item
              key={index}
              active={selected === tab}
              onClick={() => setSelected(tab)}
            >
              {tab}
            </Item>
          ))}
          <MoreMenu />
          <Toggle />
        </div>
      </div>
    </div>
  );
};

interface ItemProps extends React.HTMLProps<HTMLAnchorElement> {
  active?: boolean;
  addStyle?: string;
  children: React.ReactNode;
}

export const Item: React.FC<ItemProps> = ({
  active = false,
  addStyle = "",
  children,
  ...rest
}) => {
  const baseStyle =
    "cursor-pointer rounded px-2 py-1 transition-colors relative font-semibold ";
  const activeStyle = `text-white`;
  const inactiveStyle = `bg-none`;
  return (
    <a
      className={[
        `${baseStyle} + ${active ? activeStyle : inactiveStyle} `,
        addStyle,
      ].join(" ")}
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

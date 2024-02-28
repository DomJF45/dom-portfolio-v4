import { useState } from "react";
import { motion } from "framer-motion";
import { Toggle } from "./Toggle";
import { TABS } from "../../constants";
import { MoreMenu } from "./Menu";
import { Link, useLocation } from "react-router-dom";

const resolvePath = (url: string): string[] => {
  return url.split("/");
};

export const Navbar = () => {
  const location = useLocation();
  const url: string = `/${resolvePath(location.pathname)[1]}`;
  const currentPath: { title: string; link: string } =
    TABS.find((tab) => url === tab.link) ?? TABS[0];

  const [selected, setSelected] = useState<string>(
    currentPath.title ?? TABS[0].title
  );

  return (
    <div className="flex flex-row fixed bottom-3 rounded-lg justify-center items-center bottom-0 left-0 right-0">
      <div className="flex flex-row px-2 bg-nav w-max py-2 w-full rounded-lg backdrop-blur-md z-50">
        <div className="flex flex-row gap-5 items-center">
          {TABS.map((tab, index) => (
            <Item
              key={index}
              active={selected === tab.title}
              link={`${tab.link}`}
              onClick={() => setSelected(tab.title)}
            >
              {tab.title}
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
  link: string;
  children: React.ReactNode;
}

export const Item: React.FC<ItemProps> = ({
  active = false,
  addStyle = "",
  link,
  children,
  ...rest
}) => {
  const baseStyle =
    "cursor-pointer rounded px-2 py-1 transition-colors relative font-semibold ";
  const activeStyle = `text-white/90`;
  const inactiveStyle = `bg-none`;
  return (
    <Link to={link}>
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
    </Link>
  );
};

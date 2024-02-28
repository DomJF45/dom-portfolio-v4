import { motion } from "framer-motion";

type SIZES = "sm" | "md" | "lg" | "xl";
type VARIANTS = "primary" | "secondary";

interface TechTileProps {
  size?: SIZES;
  variant?: VARIANTS;
  lang: {
    title: string;
    logo: string;
  };
  ignoreAnimate?: boolean;
}

const stackItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const TechTile = ({
  lang,
  size = "sm",
  variant = "primary",
  ignoreAnimate = false,
}: TechTileProps) => {
  const baseStyle = "rounded flex justify-center items-center";
  const variants = {
    primary: "bg-nav shadow",
    secondary: "border border-2 border-nav",
  };
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-14 h-14",
  };

  const styles = `${baseStyle} ${variants[variant]} ${sizes[size]}`;

  return (
    <motion.div
      className={styles}
      variants={ignoreAnimate ? {} : stackItem}
      whileHover={{ y: -5 }}
    >
      <img src={lang.logo} className="w-2/3" />
    </motion.div>
  );
};

import { HTMLProps } from "react";

interface TagProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}
export const Tag: React.FC<TagProps> = ({ children, ...rest }) => {
  return (
    <div
      className={"inline-flex rounded w-max px-2 py-1 bg-slate-300 text-sm"}
      {...rest}
    >
      {children}
    </div>
  );
};

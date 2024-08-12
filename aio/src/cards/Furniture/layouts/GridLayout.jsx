import { twMerge } from "tailwind-merge";

export const GridLayout = ({ className, children }) => {
  const mergedClass = twMerge(
    "flex flex-row gap-x-6 gap-y-12 grid-cols-productCol grid-flow-row-dense product__auto-row ",
    className
  );
  return <section className={mergedClass}>{children}</section>;
};

import { twMerge } from "tailwind-merge";

export const GridLayout = ({ className, children }) => {
  const mergedClass = twMerge(
    "grid gap-x-3 gap-y-12 grid-cols-productCol grid-flow-row-dense product__auto-row ",
    className
  );
  return <section className={mergedClass}>{children}</section>;
};

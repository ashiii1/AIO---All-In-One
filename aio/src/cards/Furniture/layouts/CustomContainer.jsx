import { twMerge } from "tailwind-merge";

export const CustomContainer = ({ id, className, children }) => {
  const containerMerged = twMerge(
    "flex mx-auto max-w-[95%] sm:max-w-[90%]",
    className
  );

  return (
    <div id={id} className={containerMerged}>
      {children}
    </div>
  );
};

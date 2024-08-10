import { twMerge } from "tailwind-merge";

export const Overlay = ({ children, overlayClass }) => {
  const overlayMerged = twMerge(
    "absolute top-0 left-0 px-6 xs:px-4 pt-6 text-xl text-center z-[230] overflow-hidden fixed w-full  h-32 bg-primary-black/[0.85]",
    overlayClass
  );

  return <div className={overlayMerged}>{children}</div>;
};

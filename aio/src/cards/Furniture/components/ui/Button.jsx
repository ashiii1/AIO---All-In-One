import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const LinkEl = ({ link, role, label, className, ...props }) => {
  const mergedClass = twMerge(
    "mt-8 self-start inline-block rounded-md bg-primary-100 px-7 py-[0.5rem] text-center text-lg font-semibold text-secondary-400 transition-all  ease-in hover:shadow-2xl",
    className
  );

  return (
    <Link
      to={link}
      role={role}
      // replace={true}
      {...props}
      className={mergedClass}
    >
      {label}
    </Link>
  );
};

export const ButtonEl = ({ className, type = null, label, ...props }) => {
  const twMerged = twMerge(
    "mt-8 rounded-[0.3rem] bg-primary-100 px-8 py-3 text-2xl font-semibold text-secondary-400 disabled:bg-secondary-200 md:w-full",
    className
  );

  return (
    <button type={type} className={twMerged} {...props}>
      {label}
    </button>
  );
};

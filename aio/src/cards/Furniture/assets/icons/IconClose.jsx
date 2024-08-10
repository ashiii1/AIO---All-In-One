import { twMerge } from "tailwind-merge";
const IconClose = ({ styleCloseIcon, currentColor, ...IconProps }) => {
  const mergedClass = twMerge("cursor-pointer", styleCloseIcon);
  return (
    <svg
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      className={mergedClass}
      {...IconProps}
    >
      <path
        d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
        fill={currentColor}
        fillRule="evenodd"
        opacity=".201"
      />
    </svg>
  );
};

export default IconClose;

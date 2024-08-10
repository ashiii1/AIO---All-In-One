import { twMerge } from "tailwind-merge";

const IconHamburger = ({
  currenColor = "#FFF",
  styleHamburgerIcon,
  ...iconProps
}) => {
  const mergedClass = twMerge("cursor-pointer", styleHamburgerIcon);

  return (
    <svg
      width="20"
      height="14"
      xmlns="http://www.w3.org/2000/svg"
      className={mergedClass}
      {...iconProps}
    >
      <path
        d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
        fill={currenColor}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default IconHamburger;

const IconRight = ({ ...iconProps }) => {
  return (
    <svg
      width="14"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      {...iconProps}
    >
      <path
        d="M1 0l12 12L1 24"
        stroke="currentColor"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default IconRight;

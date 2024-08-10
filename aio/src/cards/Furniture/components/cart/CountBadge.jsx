const CountBadge = ({ Qty, icon }) => {
  return (
    <span className="flex items-center relative sm:mr-1">
      {icon}
      <sup className="z-50 absolute left-5 bg-primary-black m-0 w-6 h-6 border-white border-2 rounded-full flex justify-center items-center font-primary text-sm font-medium text-primary-white">
        {Qty}
      </sup>
    </span>
  );
};

export default CountBadge;

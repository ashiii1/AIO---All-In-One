import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const CartQuantity = ({
  incrementQuantity,
  decrementQuantity,
  quantity,
  styleQuantity,
}) => {
  const mergedStyleQuantity = twMerge(
    "text-base sm:text-sm py-0 px-2",
    styleQuantity
  );

  return (
    <div
      className="flex p-0 items-center justify-between border-[1px] border-primary-black text-primary-black
    "
    >
      <button
        onClick={decrementQuantity}
        className=" text-lg border-r-[1px] border-primary-black px-2  h-8 self-center flex items-center justify-center"
      >
        <AiOutlineMinus />
      </button>
      <p className={mergedStyleQuantity}>{quantity}</p>
      <button
        onClick={incrementQuantity}
        className=" text-xl border-l-[1px] border-primary-black  px-2  h-8  self-center flex items-center justify-center"
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default CartQuantity;

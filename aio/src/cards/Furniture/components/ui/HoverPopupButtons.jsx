import { FaRegEye, FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import { useStateContext } from "../../contexts/StateContext";

const hoverPopupButtons = (currentProduct) => {
  const { handleAddToCart, handleAddToWishlist, qty } = useStateContext();

  // replace width with w-28 if you have more than one buttons
  return (
    <div className="w-28 absolute -top-[170%] flex px-4 py-2 mx-auto justify-between bg-primary-white">
      <button
        role="button"
        disabled={currentProduct.inCart}
        title={`${
          currentProduct.inCart
            ? "product is already in the cart"
            : "add to cart"
        }`}
        onClick={() => handleAddToCart(currentProduct, qty)}
      >
        <FaShoppingBasket
          fontWeight="100"
          className="font-thin text-base text-primary-darkGray"
        />
      </button>

      <button
        role="button"
        disabled={currentProduct.inWishlist}
        title="add to wish list"
        onClick={() => handleAddToWishlist(currentProduct, qty)}
      >
        {/* if the product is in wish-list, make Icon filled heart */}
        {/* {currentProduct.inWishlist ? (
          <FaHeart
            fontWeight="100"
            size="20"
            className="font-thin text-base text-primary-darkgray"
          />
        ) : ( */}
        <FaRegHeart
          fontWeight="100"
          size="16"
          className="font-thin text-base text-primary-darkGray"
        />
        {/* )} */}
      </button>

      <button
        role="button"
        title="views"
        onClick={() => console.log("loved it!")}
      >
        <FaRegEye
          fontWeight="100"
          size="20"
          className="font-thin text-base text-primary-darkGray "
        />
      </button>
    </div>
  );
};

export default hoverPopupButtons;

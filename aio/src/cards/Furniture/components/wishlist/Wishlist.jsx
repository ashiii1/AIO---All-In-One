import { AiFillCloseSquare } from "react-icons/ai";

import { useStateContext } from "../../contexts/StateContext";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  const {
    showWishlist,
    handleShowWishlist,
    handleAddToCart,
    handleRemoveFromWishlist,
    wishlistItems,
  } = useStateContext();

  console.log("Wishlist", wishlistItems);

  return (
    <article
      className={`${
        showWishlist ? "translate-x-0 sm:w-full" : "-translate-x-[10000rem]"
      } ${
        wishlistItems.length < 1 ? "min-w-[30rem] xs:min-w-full" : ""
      } sm:w-full space-y-9 shadow-black shadow-sm overflow-y-scroll px-6 pt-7 pb-10 sm:px-3 sm:py-4 sm:pb-8 z-50 absolute right-0 top-0 bg-[var(--color-light-gray)] text-primary-black`}
    >
      <header className="flex items-center gap-8 sm:gap-3 justify-between">
        <p className="text-lg xs:text-[1rem]">
          Your wish-list items ({wishlistItems.length})
        </p>
        <button data-message="close the cart items side-bar">
          <AiFillCloseSquare
            fontSize="22px"
            className="font-thin"
            role="button"
            aria-description="icon to close the cart items side-bar"
            onClick={handleShowWishlist}
          />
        </button>
      </header>
      <div>
        {/* Cart-item list */}
        <WishlistItem
          wishlistProducts={wishlistItems}
          handleAddToCart={handleAddToCart}
          handleRemoveWishlist={handleRemoveFromWishlist}
          handleShowWishlist={handleShowWishlist}
        />
      </div>
    </article>
  );
};

export default Wishlist;

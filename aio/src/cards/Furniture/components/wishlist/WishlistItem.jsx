import { NavLinkList } from "../navbar/NavList";
import { NavLink } from "react-router-dom";
import CurrencyFormatter from "../../utils/currencyFormatter";
import { AiOutlineDelete } from "react-icons/ai";

const WishlistItem = ({
  wishlistProducts,
  handleRemoveWishlist,
  handleShowWishlist,
  handleAddToCart,
}) => {
  return (
    <div className="space-y-4">
      {/* check if the cart is empty , tell them to go shopping*/}
      {wishlistProducts.length < 1 && (
        <div className="flex flex-col gap-6 justify-center items-center text-[1rem]">
          <h2 className=""> your wish-list is empty</h2>
          <NavLinkList
            title="go back to shopping"
            link="/furnituree/shopping"
            onClick={handleShowWishlist}
            className="inline-block px-3 py-2 text-primary-white self-center items-start bg-primary-black"
          ></NavLinkList>
        </div>
      )}

      {/* if it's not empty, render it out. */}
      {wishlistProducts.length >= 1 &&
        wishlistProducts.map((wishlistItem) => {
          const { id, imageUrl, name, price, quantity } = wishlistItem;

          return (
            <div
              key={id}
              className="font-normal
                bg-primary-white py-6 px-6 sm:py-3 sm:px-3 hover:shadow-md hover:shadow-primary-dark-gray gap-y-7 gap-x-5 sm:gap-x-3   justify-items-start grid grid-cols-[7.7em,minmax(max-content,max-content),minmax(max-content,100%)] xs:grid-cols-[6.7em,minmax(max-content,max-content),minmax(max-content,100%)] grid-rows-[repeat(2,min-content)]"
            >
              <img
                src={imageUrl}
                alt="cart product"
                className="bg-primary-black max-w-full col-[1/2] row-[1/3] h-full object-cover w-full"
              />
              <NavLink
                title={name}
                to={`/shopping/${wishlistItem.id}`}
                className="text-[1rem] sm:text-sm  p-0 place-items-start  col-[2/3] max-w-[18ch] sm:max-w-[11ch] break-keep whitespace-nowrap xs:overflow-hidden xs:text-ellipsis capitalize"
                onClick={() => handleShowWishlist(false)}
              >
                {name}
              </NavLink>
              <p className="text-[1rem] sm:text-sm  col-[3/4] self-start place-self-end ">
                {CurrencyFormatter("en-US", price)}
              </p>

              <button
                className="self-end mr-auto bg-primary-darkGray text-primary-white w-full max-w-[5rem] p-1"
                onClick={() => handleAddToCart(wishlistItem, quantity)}
              >
                Add to cart
              </button>
              <button
                className="self-end ml-auto"
                onClick={() => handleRemoveWishlist(wishlistItem)}
              >
                <AiOutlineDelete fontSize="17px" fontWeight="100" />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default WishlistItem;

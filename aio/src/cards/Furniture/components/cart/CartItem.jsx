import { NavLink } from "react-router-dom";

import { NavLinkList } from "../navbar/NavList";
import CurrencyFormatter from "../../utils/currencyFormatter";

import { AiOutlineDelete } from "react-icons/ai";
import CartQuantity from "../cart/CartQuantity";
// import CartQuantity from "./CartQuantity";

const CartItem = ({
  cartProducts,
  handleRemove,
  handleShowCart,
  handleCartQuantity,
}) => {
  return (
    <div className="space-y-4">
      {/* check if the cart is empty, tell them to go shopping*/}
      {cartProducts.length < 1 && (
        <div className="flex flex-col gap-6 justify-center items-center text-[1rem]">
          <h2> your shopping bug is empty</h2>
          <NavLinkList
            title="go back to shopping"
            link="/furnituree/shopping"
            onClick={handleShowCart}
            className="inline-block px-3 py-2 text-primary-white self-center items-start bg-primary-black"
          ></NavLinkList>
        </div>
      )}

      {/* if it's not empty, render it out. */}
      {cartProducts.length >= 1 &&
        cartProducts.map((cartItem) => {
          const { id, imageUrl, name, price, quantity } = cartItem;

          return (
            <div
              key={id}
              className="font-normal bg-primary-white py-6 px-6 sm:py-3 sm:px-3 hover:shadow-md hover:shadow-primary-dark-gray gap-y-7 gap-x-5 sm:gap-x-3 justify-items-start grid grid-cols-[7.7em,minmax(max-content,max-content),minmax(max-content,100%)] xs:grid-cols-[6.7em,minmax(max-content,max-content),minmax(max-content,100%)] grid-rows-[repeat(2,min-content)]"
            >
              <img
                src={imageUrl}
                alt="cart product"
                className="bg-primary-black max-w-full col-[1/2] row-[1/3] h-full object-cover w-full"
              />
              <NavLink
                title={name}
                to={`/furnituree/shopping/${cartItem.id}`}
                onClick={() => handleShowCart(false)}
                className="text-[1rem] sm:text-sm place-items-start col-[2/3] max-w-[18ch] sm:max-w-[10ch] break-keep whitespace-nowrap xs:overflow-hidden xs:text-ellipsis capitalize"
              >
                {name}
              </NavLink>
              <p className="text-[1rem] sm:text-sm  col-[3/4] self-start place-self-end ">
                {CurrencyFormatter("en-US", price)}
              </p>
              <CartQuantity
                incrementQuantity={() => handleCartQuantity(id, "inc")}
                decrementQuantity={() => handleCartQuantity(id, "dec")}
                quantity={quantity}
              />
              <button
                className="self-end ml-auto"
                onClick={() => handleRemove(cartItem, quantity)}
              >
                <AiOutlineDelete fontSize="17px" fontWeight="100" />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default CartItem;

import { useStateContext } from "../../contexts/StateContext";
import CurrencyFormatter from "../../utils/currencyFormatter";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const {
    showCart,
    handleShowCart,
    totalQty,
    qty,
    cartItems,
    totalPrice,
    handleRemoveFromCart,
    handleCartQuantity,
    wishlistItems,
  } = useStateContext();

  console.log("cart-items", cartItems);
  console.log("Wishlist", wishlistItems);

  return (
    <article
      className={`${
        showCart
          ? "translate-x-0 transition-transform duration-200 ease-linear sm:w-full"
          : "-translate-x-[10000rem]"
      } space-y-9 shadow-black shadow-sm overflow-y-scroll px-6 pb-10 pt-7 sm:px-3 sm:py-4 z-50 absolute right-0 top-0 h-screen bg-[var(--color-light-gray)] text-primary-black text-sm  font-normal`}
    >
      <header className="flex items-center gap-8 sm:gap-3 justify-between">
        <p className="text-lg xs:text-[1rem]">
          Your shopping cart items ({totalQty})
        </p>
        <button data-message="close the cart items side-bar">
          <AiFillCloseSquare
            fontSize="22px"
            className="font-thin"
            role="button"
            aria-description="icon to close the cart items side-bar"
            onClick={handleShowCart}
          />
        </button>
      </header>
      <div>
        {/* Cart-item list */}
        <CartItem
          cartProducts={cartItems}
          quantity={qty}
          handleRemove={handleRemoveFromCart}
          handleShowCart={handleShowCart}
          handleCartQuantity={handleCartQuantity}
        />
      </div>
      {totalPrice >= 1 && (
        <>
          {/* divider line */}
          <div className="flex border-[0.8px]  border-primary-black border-dashed"></div>

          <div className="mt-auto grid gap-y-3 gap-x-4 w-full grid-cols-[repeat(2,minmax(max-content,1fr))] grid-rows-[min-content,min-content]">
            <p className="text-lg col-[1/2] row-[1/2]">
              Total Price for {totalQty} {`${totalQty > 1 ? "Items" : "Item"}`}
            </p>
            <Link
              title="buy now"
              // link="/NotFound"
              to="/furnituree/payment/checkout"
              className="block px-6 py-3 sm:px-4 sm:py-2  rounded-sm  hover:shadow-sm hover:shadow-primary-darkGray hover:bg-primary-darkGray  transition ease-out text-center text-2xl justify-items-center ml-auto self-center col-start-2 col-end-3 row-[1/3]   text-primary-white bg-primary-black "
            >
              buy now
            </Link>
            <p className="flex text-2xl sm:text-2xl text-primary-black col-[1/2] row-[2/3] justify-self-start">
              {CurrencyFormatter("en-US", totalPrice)}
            </p>
          </div>
        </>
      )}
    </article>
  );
};

export default Cart;

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import useToggle from "../../hooks/useToggle";
import { NavList } from "./Navbar";
import { NavHashList, NavLinkList } from "./NavList";
import CountBadge from "../cart/CountBadge";
import SearchInput from "../search/SearchInput";
import SearchPopup from "../search/SearchPopup";

import Logo from "../ui/Logo";
import IconClose from "../../assets/icons/IconClose";
import IconHamburger from "../../assets/icons/IconHamburger";
import { useStateContext } from "../../contexts/StateContext";

// nav__list for shopping pages
const NavListShop = ({ className }) => {
  const classMerged = twMerge("navv__link--shop sm:hidden", className);

  return (
    <ul className="navv__list sm:hidden flex gap-6 justify-center items-center ">
      <li>
        <NavLinkList
          link="/furnituree"
          title="home"
          className={classMerged}
        ></NavLinkList>
      </li>

      <li>
        <NavLinkList
          link="/furnituree/shopping"
          title="shop"
          className={classMerged}
        ></NavLinkList>
      </li>
      <li>
        <NavHashList
          href="#about"
          title="about"
          className={classMerged}
        ></NavHashList>
      </li>
      <li>
        <NavHashList
          href="#contact"
          title="contact"
          className={classMerged}
        ></NavHashList>
      </li>
    </ul>
  );
};

export const ShopsNavbar = () => {
  const {
    totalQty,
    handleShowCart,
    wishlistItems,
    handleShowWishlist,
    handleSearch,
    searchItem,
  } = useStateContext();

  const { isToggled, handleIsToggled } = useToggle();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Mainn Navigation"
        className="navv flex items-center justify-between gap-6 relative"
      >
        <Logo
          styleLink="sm:hidden text-3xl shrink-0 mr-20 md:mr-10 sm:mr-3 xs:mr-2 text-primary-darkGray"
          currentColor="hsl(0, 0%, 63%)"
        />
        {/* shopping nav-list  */}
        {/* <NavListShop className="max-w-[6em]  text-primary-darkGray  " /> */}

        {/* <!-- Mobile-navigation --> */}
        <nav
          className={`${
            isToggled
              ? "sm:flex  sm:fixed sm:z-[200] sm:px-8 sm:py-12"
              : "sm:hidden"
          }  navv-mobile gap-x-4`}
        >
          <IconClose
            onClick={() => handleIsToggled()}
            styleCloseIcon="sm:mr-auto"
            data-message="icon to close mobile navv"
          />
          {/* // nav-list */}
          <NavList
            className="text-primary-black"
            handleIsToggled={handleIsToggled}
          />
          <div className="overlayy basis-0 text-[#fff] "></div>
        </nav>

        <nav
          className={`${
            isToggled ? "sm:hidden" : "sm:flex "
          }  hidden  sm:gap-x-10`}
          id="hamburger-menu"
        >
          <IconHamburger
            onClick={() => handleIsToggled()}
            currenColor="hsl(0, 0%, 63%)"
          />

          <Logo currentColor="hsl(0, 0%, 63%)" />
        </nav>
        {/* mobile nav end */}

        {/* search Component */}
        <SearchInput searchItem={searchItem} handleSearch={handleSearch} />
        <SearchPopup
          toggle={showPopup}
          handleClosePopup={() => setShowPopup((prev) => !prev)}
        />

        <ul
          className={`${
            isToggled ? "sm:hidden" : "sm:flex"
          } flex gap-[0.75rem] md:gap-2 sm:gap-1 max-w-[9.33em] justify-between items-center text-primary-darkGray text-3xl`}
        >
          <li>
            <AiOutlineSearch
              onClick={() => setShowPopup((prev) => !prev)}
              className=" sm:text-[1.65rem] lg:flex md:items-center hidden font-thin  shrink-0 hover:cursor-pointer"
            />
          </li>
          <li>
            <AiOutlineUser className=" sm:text-[1.65rem] font-thin  shrink-0 hover:cursor-pointer" />
          </li>
          <li className="sm:mr-2 cursor-pointer" onClick={handleShowWishlist}>
            <CountBadge
              Qty={wishlistItems.length}
              icon={
                <AiOutlineHeart
                  className="sm:text-[1.65rem] shrink-0 "
                  title="wish-list"
                />
              }
            />
          </li>
          <li onClick={handleShowCart} className="cursor-pointer">
            <CountBadge
              Qty={totalQty}
              icon={
                <AiOutlineShoppingCart
                  className="sm:text-[1.65rem] shrink-0 "
                  title="cart-items"
                />
              }
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

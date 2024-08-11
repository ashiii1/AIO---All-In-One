import { twMerge } from "tailwind-merge";

import { NavHashList, NavLinkList } from "./NavList";
import Logo from "../ui/Logo";
import useToggle from "../../hooks/useToggle";

import IconClose from "../../assets/icons/IconClose";
import IconHamburger from "../../assets/icons/IconHamburger";

// nav__list for home pages
export const NavList = ({ className, handleIsToggled }) => {
  const classMerged = twMerge("navv-list ", className);

  return (
    <ul className="navv__list flex gap-6">
      <li>
        <NavLinkList
          link="/furnituree"
          title="home"
          className={classMerged}
          onClick={handleIsToggled}
        ></NavLinkList>
      </li>
      <li>
        <NavLinkList
          link="/furnituree/shopping"
          title="shop"
          className={classMerged}
          onClick={handleIsToggled}
        ></NavLinkList>
      </li>


     
  



      <li>
        <NavHashList
          href="#about"
          title="about"
          className={classMerged}
          onClick={handleIsToggled}
        ></NavHashList>
      </li>
      <li>
        <NavHashList
          href="#about"
          title="contact"
          className={classMerged}
          onClick={handleIsToggled}
        ></NavHashList>
      </li>
    </ul>
  );
};

export const Navbar = ({ className }) => {
  const { isToggled, handleIsToggled } = useToggle();

  return (
    <>
      {/* <!-- the  left section of the desktop design --> */}
      <nav className={`${className} navv navv-desktop items-center hidee-mobile`}>
        <Logo styleLink="mr-10" />

        <NavList />
      </nav>

      {/* <!-- Mobile-navigation --> */}
      <nav
        className={`${
          isToggled
            ? "showw-mobile sm:fixed sm:justify-between sm:z-[200]"
            : "hidee-mobile"
        }  navv-mobile gap-x-4`}
      >
        <IconClose
          onClick={() => handleIsToggled()}
          data-message="icon to close mobile navv"
        />
        {/* // nav-list */}
        <NavList
          className="text-primary-black"
          handleIsToggled={handleIsToggled}
        />
        <div className="overlayy"></div>
      </nav>

      <nav
        className={`${isToggled ? "hidee-mobile" : "showw-mobile"}  hidee `}
        id="hamburger-menu"
      >
        <IconHamburger
          onClick={() => handleIsToggled()}
          styleHamburgerIcon="mr-[30%]"
          currenColor="hsl(0, 0%, 100%)"
        />
        <Logo />
      </nav>
    </>
  );
};

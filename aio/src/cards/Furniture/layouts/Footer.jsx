import { twMerge } from "tailwind-merge";

import aboutDark from "../assets/images/image-about-dark.jpg";
import aboutLight from "../assets/images/image-about-light.jpg";

// <!-- Footer section -->
const Footer = ({ className }) => {
  const mergedClass = twMerge("aboutt", className);

  return (
    <footer className={mergedClass} id="about">
      <div className="aboutt__image--1">
        <img
          src={aboutDark}
          alt=""
          className="aboutt__image--inner aboutt__inner-image--1"
        />
      </div>
      <article className="aboutt__us">
        <h2 className="headingg headingg--secondary">About our furniture</h2>
        <p className="descriptionn">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </article>
      <div className="aboutt__image--2">
        <img
          src={aboutLight}
          alt=""
          className="aboutt__image--inner aboutt__inner-image--2"
        />
      </div>
      {/* <div className="attribution col-[1/span-full] w-full  ">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="ml-1"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Matusalab</a>.
        </div> */}
    </footer>
  );

  // return (
  //   <footer className="footer">
  //     <div className="footer__inner flex">
  //       {/* <!-- <header className="footer__header flex"> --> */}
  //       <a href="#" className="logo--footer-link">
  //         <img src="./images/logo.svg" alt="" className="logo--footer" />
  //       </a>
  //       <div className="footer__social-section flex">
  //         <a href="" className="social--link">
  //           <img
  //             src="./images/icon-facebook.svg"
  //             alt="icon-facebook"
  //             className="social--image"
  //           />
  //         </a>
  //         <a href="" className="social--link">
  //           <img
  //             src="./images/icon-twitter.svg"
  //             alt="icon-twitter"
  //             className="social--image"
  //           />{" "}
  //         </a>
  //         <a href="" className="social--link">
  //           <img
  //             src="./images/icon-pinterest.svg"
  //             alt="icon-pinterest"
  //             className="social--image"
  //           />
  //         </a>
  //         <a href="" className="social--link">
  //           <img
  //             src="./images/icon-instagram.svg"
  //             alt="icon-instagram"
  //             className="social--image"
  //           />
  //         </a>
  //       </div>
  //       {/* <!-- </header> -->
  //   <!-- <div className="divider flex"> --> */}
  //       <nav role="footer-navigation" className="nav nav-desktop--footer flex">
  //         <ul className="nav__list nav__list--footer flex">
  //           <li>
  //             <a href="#about" className="nav__link nav__link--footer">
  //               About
  //             </a>
  //           </li>
  //           <li>
  //             <a href="" className="nav__link nav__link--footer">
  //               Careers
  //             </a>
  //           </li>
  //           <li>
  //             <a href="" className="nav__link nav__link--footer">
  //               Events
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#products" className="nav__link nav__link--footer">
  //               Products
  //             </a>
  //           </li>
  //           <li>
  //             <a href="" className="nav__link nav__link--footer">
  //               Support
  //             </a>
  //           </li>
  //         </ul>
  //       </nav>
  //       <p className="footer__copy-right">
  //         © 2023 Loopstudios.
  //         <span className="copy-break">All rights reserved.</span>
  //       </p>
  //       {/* <!-- </div> --> */}
  //     </div>
  //   </footer>
  // );
};

export default Footer;

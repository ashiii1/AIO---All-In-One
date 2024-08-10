import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { twMerge } from "tailwind-merge";

export const NavLinkList = ({ title, link, className, ...props }) => {
  const twMergeLinkClass = twMerge("navv__link ", className);

  return (
    <NavLink to={link} className={twMergeLinkClass} {...props}>
      {title}
    </NavLink>
  );
};

export const NavHashList = ({ title, href, className, ...props }) => {
  const twMergeHashList = twMerge("navv__link", className);

  return (
    <AnchorLink href={href} className={twMergeHashList} {...props}>
      {title}
    </AnchorLink>
  );
};

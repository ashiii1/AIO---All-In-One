import { NavLink } from "react-router-dom";

import LogoImage from "../../assets/images/Logo";

const Logo = ({ styleLink, currentColor }) => {
  return (
    <NavLink to="/" className={styleLink} data-message="room furniture Logo">
      <LogoImage className="h-min w-16 min-w-14" currentColors={currentColor} />
    </NavLink>
  );
};

export default Logo;

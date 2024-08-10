import { Link, NavLink } from "react-router-dom"
import {FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaTwitter, FaTiktok} from 'react-icons/fa'

const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer text-center bg-purple-700 text-light container-fluid  py-3 ">
      <div className="text-center flex md:flex-row justify-between flex-col-reverse bg-purple-600 text-light container-fluid pt-3 items-center ">
      <h3 className="text-1xl">Copyright &copy; {today.getFullYear()}</h3>
       {/* Social Icons */}
      <div className="socialLinks md:mr-7">
       <ul className="icons flex">
        <li className="text-4xl md:mx-4 hover:-translate-y-3 duration-300">
          <Link to="https://instagram.com" aria-hidden="true" target="_blank" rel="noopener noreferrer">
           <FaInstagramSquare/>
         </Link>
        </li>
        <li className="text-4xl md:mx-4 hover:-translate-y-3 duration-300 ">
          <Link to="https://www.facebook.com" aria-hidden="true" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare></FaFacebookSquare>
          </Link>
        </li>
        <li className="text-4xl md:mx-4 hover:-translate-y-3 duration-300">
          <Link to="https://www.linkedin.com" aria-hidden="true"  target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </Link>
        </li>
        <li className="text-4xl md:mx-4 hover:-translate-y-3 duration-300">
          <Link to="https://twitter.com" aria-hidden="true" target="_blank" rel="noopener noreferrer">
            <FaTwitter/>
          </Link>
        </li>
        <li className="text-4xl md:mx-4 hover:-translate-y-3 duration-300"><Link to="https://tiktok.com" aria-hidden="true" rel="noopener noreferrer" target="_blank">
         <FaTiktok/>
        </Link></li>
       </ul>
     </div>
    
      </div>
    </footer>
  );
};

export default Footer;

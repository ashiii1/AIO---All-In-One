import hero1 from "../assets/images/desktop-image-hero-1.jpg";
import hero2 from "../assets/images/desktop-image-hero-2.jpg";
import hero3 from "../assets/images/desktop-image-hero-3.jpg";
import hero1Mobile from "../assets/images/mobile-image-hero-1.jpg";
import hero2Mobile from "../assets/images/mobile-image-hero-2.jpg";
import hero3Mobile from "../assets/images/mobile-image-hero-3.jpg";

const slidesImages = [
  {
    heading: "Discover innovative ways to decorate ",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    imgUrl: { desktop: hero1, mobile: hero1Mobile },
  },
  {
    heading: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    imgUrl: { desktop: hero2, mobile: hero2Mobile },
  },
  {
    heading: "Manufactured with the best materials",
    description:
      " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    imgUrl: { desktop: hero3, mobile: hero3Mobile },
  },
];

const CarousalList = () => slidesImages;

export default CarousalList;

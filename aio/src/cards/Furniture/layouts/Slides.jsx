import { NavLink } from "react-router-dom";

import { useStateContext } from "../contexts/StateContext";

import IconArrow from "../assets/icons/IconArrow";
import IconRight from "../assets/icons/IconRight";
import IconLeft from "../assets/icons/IconLeft";

const Slides = () => {
  const { slideIndex, slidesDetail, handleNext, handlePrev } =
    useStateContext();

  // Display products slides
  return (
    <>
      <section className="product__detailsss">
        <h2 className="headingg headingg--primary">
          {slidesDetail[slideIndex].heading}
        </h2>
        <p className="descriptionn product__descriptionn">
          {slidesDetail[slideIndex].description}
        </p>
        <NavLink to="/furnituree/shopping" className="ctaa-primary">
          Shop now
          <IconArrow />
        </NavLink>
      </section>
      {/* wrapper for the next and prev buttons of the slide  --> */}
      <div className="btnn__wrapper--desktopp ">
        <button
          className="btnn"
          onClick={handlePrev}
          data-message="go back to the previous slide"
        >
          <IconLeft />
        </button>
        <button
          className="btnn"
          onClick={handleNext}
          data-message="go to the next slide"
        >
          <IconRight />
        </button>
      </div>
    </>
  );
};

export default Slides;

import React from "react";
import brandImage1 from "../../assets/Images/loreal_logo.jpg";
import brandImage2 from "../../assets/Images/lakme_logo.jpg";
import brandImage4 from "../../assets/Images/maybelline_logo.png";
import brandImage5 from "../../assets/Images/mamaearth-logo.jpg";
import brandImage6 from "../../assets/Images/wow-logo.png";
import brandImage7 from "../../assets/Images/Wishper_logo.png";
import offerImage1 from "../../assets/Images/makeupmania1.jpg";
import offerImage2 from "../../assets/Images/makeupmania2.jpg";
import musthavesImg from "../../assets/Images/buymoresavemore.jpg";
import newlaunches from "../../assets/Images/newlaunches.jpg";
import offerImage3 from "../../assets/Images/makeupmania3.jpg";
import offerImage4 from "../../assets/Images/makeupmania4.jpg";
import offerImage5 from "../../assets/Images/eye-iconic.PNG";
import offerImage6 from "../../assets/Images/kaybeauty.PNG";
import pinkFriday from "../../assets/Images/1.png";
import pinkFriday2 from "../../assets/Images/summerbeautystore.png";
import { Link } from "react-router-dom";
import "./HomePage.css";
import {
  Categories,
  Footer,
  Carousel,
  SubHeader,
  Searchbar,
} from "../../components/index";
import { useContext, useEffect } from "react";
import { StateContext } from "../../Context";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
  const { state, dispatch } = useContext(StateContext);
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/categories", { method: "GET" });
        const data = await res.json();
        dispatch({ type: "SET_CATEGORIES", payload: data.categories });
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <SubHeader />
      {isMobile && <Searchbar />}
      <Carousel />
      <h5 className="sub-heading">Categories for you</h5>
      <Categories />
      <h5 className="sub-heading">Offers you wont miss!</h5>
      <div className="offers-section">
        <Link to="/productlistingpage">
          {" "}
          <img
            className="offer-img"
            src={offerImage1}
            alt="offer-img-1"
            onClick={(e) =>
              dispatch(
                { type: "SET_TAG", payload: "sugar" },
                dispatch({ type: "SET_TAG", payload: null })
              )
            }
          />{" "}
        </Link>
        <Link to="/productlistingpage">
          <img
            className="offer-img"
            src={offerImage2}
            alt="offer-img-2"
            onClick={(e) => dispatch({ type: "SET_TAG", payload: "MyGlamm" })}
          />
        </Link>
      </div>
      <h5 className="sub-heading">Our new launches!</h5>
      <Link to="/productlistingpage">
        {" "}
        <img
          className="mustHave"
          src={newlaunches}
          onClick={(e) => dispatch({ type: "SET_TAG", payload: "NewLaunches" })}
        />
      </Link>
      <h5 className="sub-heading">Your summer store is here!</h5>
      <div className="offers-section">
        <Link to="/productlistingpage">
          {" "}
          <img
            className="offer-img"
            src={offerImage3}
            alt="offer-img-1"
            onClick={(e) => dispatch({ type: "SET_TAG", payload: "biotique" })}
          />
        </Link>
        <Link to="/productlistingpage">
          {" "}
          <img
            className="offer-img"
            src={offerImage4}
            alt="offer-img-2"
            onClick={(e) => dispatch({ type: "SET_TAG", payload: "kama" })}
          />
        </Link>
      </div>

      <h5 className="sub-heading">Eye-conic brands</h5>
      <div className="offers-section">
        <Link to="/productlistingpage">
          {" "}
          <img
            className="offer-img"
            src={offerImage5}
            alt="offer-img-1"
            onClick={(e) =>
              dispatch(
                { type: "SET_TAG", payload: "ManishMalhotraLipstick" },
                dispatch({ type: "SET_TAG", payload: null })
              )
            }
          />
        </Link>
        <Link to="/productlistingpage">
          {" "}
          <img
            className="offer-img"
            src={offerImage6}
            alt="offer-img-2"
            onClick={(e) => dispatch({ type: "SET_TAG", payload: "KayBeauty" })}
          />
        </Link>
      </div>
      <h5 className="sub-heading">Save more and buy more now!</h5>
      <Link to="/productlistingpage">
        {" "}
        <img
          className="mustHave"
          src={musthavesImg}
          onClick={(e) =>
            dispatch({ type: "SET_TAG", payload: "BuyMoreSaveMore" })
          }
        />
      </Link>
      <h5 className="sub-heading">Season sale!</h5>
      <div className="offers-section">
        <Link to="/productlistingpage">
          {" "}
          <img
            className="offer-img"
            src={pinkFriday}
            alt="offer-img-1"
            onClick={(e) =>
              dispatch({ type: "SET_TAG", payload: "PinkFriday" })
            }
          />
        </Link>
        <Link to="/productlistingpage">
          {" "}
          <img
            className="offer-img"
            src={pinkFriday2}
            alt="offer-img-2"
            onClick={(e) =>
              dispatch(
                { type: "SET_TAG", payload: "SummerBeautyStore" },
                dispatch({ type: "SET_TAG", payload: null })
              )
            }
          />
        </Link>
      </div>
      <h3 className="sub-heading">Featured Top Brands</h3>
      <div className="brands-section">
        <Link to="/productlistingpage">
          <img
            className="brand-img"
            src={brandImage1}
            alt="brand-img"
            onClick={(e) =>
              dispatch(
                { type: "SET_BRAND", payload: "L'Oreal" },
                dispatch({ type: "SET_SUB_CATEGORY", payload: null })
              )
            }
          />
        </Link>
        <Link to="/productlistingpage">
          <img
            className="brand-img"
            src={brandImage2}
            alt="brand-img"
            onClick={(e) =>
              dispatch(
                { type: "SET_BRAND", payload: "Lakme" },
                dispatch({ type: "SET_SUB_CATEGORY", payload: null })
              )
            }
          />
        </Link>
        <Link to="/productlistingpage">
          <img
            className="brand-img"
            src={brandImage4}
            alt="brand-img"
            onClick={(e) =>
              dispatch(
                { type: "SET_BRAND", payload: "Maybelline" },
                dispatch({ type: "SET_SUB_CATEGORY", payload: null })
              )
            }
          />
        </Link>
        <Link to="/productlistingpage">
          <img
            className="brand-img"
            src={brandImage7}
            alt="brand-img"
            onClick={(e) =>
              dispatch(
                { type: "SET_BRAND", payload: "Whisper" },
                dispatch({ type: "SET_SUB_CATEGORY", payload: null })
              )
            }
          />
        </Link>
        <Link to="/productlistingpage">
          <img
            className="brand-img"
            src={brandImage5}
            alt="brand-img"
            onClick={(e) =>
              dispatch(
                { type: "SET_BRAND", payload: "Mamaearth" },
                dispatch({ type: "SET_SUB_CATEGORY", payload: null })
              )
            }
          />
        </Link>
        <Link to="/productlistingpage">
          <img
            className="brand-img"
            src={brandImage6}
            alt="brand-img"
            onClick={(e) =>
              dispatch(
                { type: "SET_BRAND", payload: "Wow" },
                dispatch({ type: "SET_SUB_CATEGORY", payload: null })
              )
            }
          />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export { HomePage };

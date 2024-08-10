import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import Confetti from "../components/Confetti.jsx";

function Products({ products }) {
  useEffect(() => {
    Confetti();
  }, []);

  return (
    <>
      <article
        id="thanks"
        className=" mt-[140px] md:mt-[110px] border-0 shadow-xl"
      >
        <div className="container">
          <div className="flex flex-col justify-center shadow-xl">
            <h2 className="text-5xl mb-10">Thank you for your order!</h2>
            <p className="text-3xl mb-5">
              Check your email inbox for the receipt.
            </p>
            <p className="text-3xl mb-14">
              If you have any questions, please email us: <br />
              <a className="email" href="mailto:order@example.com">
                order@example.com
              </a>
            </p>
            <Link to="/">
              <button
                type="button"
                width="300px"
                className="p-4 mb-[200px] bg-yellow-400 text-3xl border-0 shadow-xl active:mt-1 active:ml-1"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export default Products;

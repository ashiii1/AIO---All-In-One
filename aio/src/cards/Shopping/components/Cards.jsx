import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ item, category }) => {

  return (
  
    <article className=" border-3 border-gray-300 ">
      <div className="card flex flex-col m-2 p-4 justify-items-end align-align-items-center">
            <Link to={`/${category}/${item.id}`}>
              <img
                src={item.images[0]}
                className="overflow-hidden my-2 border-black border-solid"
                width="50px"
                height="50px"
                alt={item.id}
              />
            </Link>
            <Link to={`/${category}/${item.id}`}>
              <h3 className="card-title font-medium font-sans p-1">{item.title}</h3>
            </Link>
        <p className="card-text ">
        <span className="font-bold">Price:</span>  £{item.price}
        </p>
        {/* <p className="card-text">
          <b>Category:</b> {item.category}
        </p> */}
        <p className="card-text">
          <b>Brand:</b> {item.brand}
        </p>
        {/* <p className="card-text">{item.description}</p> */}
      </div>
    </article>

  );
};

export default Cards;

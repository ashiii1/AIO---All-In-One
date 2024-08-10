import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item, category }) => {
  return (
    <article className="">
      <div className="card flex bg-slate-50 flex-col m-3 p-3 justify-items-end align-items-center border-0 shadow-xl">
        <Link to={`/shopping/${category}/${item.id}`}>
          <img
            src={item.thumbnail}
            className="overflow-hidden my-2 border-black border-solid w-80 h-80 object-cover"
            width="320px"
            height="320px"
            alt={item.id}
          />
        </Link>
        <Link to={`/shopping/${category}/${item.id}`}>
          <h3 className="card-title font-medium font-sans pt-1">
            {item.title}
          </h3>
        </Link>
        <p className="text-2xl font-bold text-red-500 pb-1">£{item.price}</p>
        <p className="card-text">
          <span className="font-bold">Brand:</span> {item.brand}
        </p>
      </div>
    </article>
  );
};

export default Card;

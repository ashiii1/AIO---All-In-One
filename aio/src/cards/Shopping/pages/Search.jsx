import React from "react";
import Card from "../components/Card";

const Search = ({ categories, products }) => {
  return (
    <article className=" flex flex-col justify-center mt-[140px] md:mt-[110px]">
      <h2 className="text-3xl font-bold mb-4">Search</h2>
      <hr className="mb-8" />
      <div className="container flex flex-wrap justify-center">
        {products.map((item) => (
          <Card key={item.id} item={item} category={item.category} />
        ))}
      </div>
    </article>
  );
};

export default Search;

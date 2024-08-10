import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Category = ({ products }) => {
  const { id } = useParams();

  return (
    <>
      <article className="mt-[140px] md:mt-[110px]">
        <div className="flex justify-center">
          <h2 className="text-4xl p-2">{id.toUpperCase()}</h2>
        </div>
        <hr />
        <div className=" flex flex-wrap justify-center gap-2 mt-2">
          {products
            .filter((item) => item.category === id)
            .map((item) => (
              <Card key={item.id} item={item} category={id} />
            ))}
        </div>
      </article>
    </>
  );
};

export default Category;

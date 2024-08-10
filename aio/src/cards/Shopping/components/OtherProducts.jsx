import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const OtherProducts = ({ products, product }) => {
  return (
    <>
      <section className="text-center">
        <div className="flex justify-center">
          <h2 className="text-4xl p-2">You may also like</h2>
        </div>
        <hr />
        <div className="flex flex-wrap justify-center gap-2 mt-2 ">
          {products
            .filter(
              (item) =>
                item.category === product.category && item.id !== product.id
            )
            .map((item) => (
              <Card key={item.id} item={item} category={product.category} />
            ))}
        </div>
      </section>
    </>
  );
};

export default OtherProducts;

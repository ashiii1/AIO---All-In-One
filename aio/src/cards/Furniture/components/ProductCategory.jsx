import { NavLink } from "react-router-dom";

import { useStateContext } from "../contexts/StateContext";
import { SHOP_DATA } from "../data/CategoriesData";

const ProductCategory = () => {
  const { searchItem } = useStateContext();

  return (
    <>
      {searchItem == "" && (
        <section
          className={`mt-12 grid grid-cols-categoryCol grid-rows-categoryRow justify-between gap-4 overflow-x-scroll`}
        >
          {SHOP_DATA.map((data) => {
            return (
              <NavLink
                key={data.title}
                to={`./product-category/${data.title}`}
                className={
                  data.className +
                  " " +
                  "lg:relative lg:col-span-2 lg:row-span-full lg:min-w-[10rem] "
                }
              >
                <figure className="w-full h-full">
                  <img
                    src={data.backgroundImage}
                    alt={`${data.title} category`}
                    className="z-10 object-cover block  w-full h-full"
                  />
                </figure>
                <figcaption className="category__figcaption drop-shadow-sm shadow-black">
                  {data.title} <br /> Furnitures
                  <span className=" text-base">({data.items.length})</span>
                </figcaption>
                <div className="overlayy--inner"></div>
              </NavLink>
            );
          })}
        </section>
      )}
    </>
  );
};

export default ProductCategory;

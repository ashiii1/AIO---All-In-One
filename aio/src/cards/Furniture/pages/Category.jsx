import { useParams } from "react-router-dom";

import { SHOP_DATA } from "../data/CategoriesData";
import ProductList from "../components/ProductList";
import ProductItem from "../components/ui/ProductItem";
import { GridLayout } from "../layouts/GridLayout";

const CategoryPreview = () => {
  const { category } = useParams();
  // console.log("category-title:", category);
  const CategoryTitle = `${category.toLowerCase()}`;

  const data = SHOP_DATA.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  let product = [];
  for (const title in data) {
    if (title === CategoryTitle) {
      product.push(data[title]);
    }
  }

  return (
    <ProductList
      headingTitle={`${CategoryTitle} Furnitures`}
      headingClass="headingg-collection font-normal xs:text-2xl xs:text-3xl"
      // route={`./${productDetail.id}`}
    >
      <GridLayout className="grid grid-cols-8 lg:grid-cols-6 justify-items-center lg:justify-center">
        <ProductItem searchItem={product[0]} />
      </GridLayout>
    </ProductList>
  );
};

export default CategoryPreview;

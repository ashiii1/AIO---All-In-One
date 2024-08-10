import { SHOP_DATA } from "./CategoriesData";

const categorizedItem = SHOP_DATA.reduce((acc, category) => {
  const { title, items } = category;
  acc[title.toLowerCase()] = items;
  return acc;
}, {});

const data = categorizedItem;

// all products inside available categories
// kitchens category will be added soon
const allProducts = [
  ...data["living room"],
  ...data["bed room"],
  ...data["kid's"],
  ...data["dining room"],
  ...data["office"],
  ...data["entry way"],
];

// console.log(allProducts);
const ShoppingProduct = () => allProducts;

export default ShoppingProduct;

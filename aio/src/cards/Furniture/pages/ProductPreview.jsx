import { useParams } from "react-router-dom";

import { useStateContext } from "../contexts/StateContext";
import ProductPreviewView from "../components/ui/ProductPreviewView";

const ProductPreview = () => {
  const { productInfo } = useStateContext();

  const { productid } = useParams();

  const filteredCategory = productInfo.filter((productId) => {
    return productId.id === productid;
  });

  // console.log("products in products-preview ", filteredCategory);
  const productsDetail = filteredCategory[0];

  // productsDetail for the categorized product
  return <ProductPreviewView productDetail={productsDetail} route="../" />;
};

export default ProductPreview;

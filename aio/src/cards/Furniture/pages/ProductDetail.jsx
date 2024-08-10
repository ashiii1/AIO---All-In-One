import { useOutletContext } from "react-router-dom";
import ProductPreviewView from "../components/ui/ProductPreviewView";

const ProductDetail = () => {
  const data = useOutletContext();
  const { filteredProduct } = data;

  {
    /* our product collections section */
  }
  return <ProductPreviewView productDetail={filteredProduct} route=".." />;
};

export default ProductDetail;

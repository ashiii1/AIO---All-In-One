import styles from "./ProductList.module.css";
import ProductCard from "../productCard/ProductCard";

const ProductList = ({ data }) => {
  return (
    <div className={styles.product_list}>
      {data?.map((item) => (
        <ProductCard item={item} key={item.id}/>
      ))}
    </div>
  );
}

export default ProductList;


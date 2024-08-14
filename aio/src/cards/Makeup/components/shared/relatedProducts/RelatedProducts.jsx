import React from "react";
import styles from "./RelatedProducts.module.css";
import Container from "../contentContainer/Container";
import ProductList from "../productList/ProductList";

const RelatedProducts = ({ data }) => {

  return (
    <section className={styles.related_section}>
      <Container>
        <h2 className={styles.related_sectionTitle}>You might also like</h2>
        <ProductList data={data} />
      </Container>
    </section>
  );
}

export default RelatedProducts;
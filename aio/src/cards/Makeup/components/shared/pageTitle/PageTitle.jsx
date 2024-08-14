import React from "react";
import styles from "./PageTitle.module.css";
import Container from "../contentContainer/Container";

const PageTitle = ({ title }) => {
  return (
    <Container>
      <div className={styles.page_title}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </Container>
  );
}

export default PageTitle;
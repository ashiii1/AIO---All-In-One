import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./ProductDetail.module.css";
import { RiStarFill } from "@remixicon/react";
import Helmet from "../../components/shared/helmet/Helmet";
import PageTitle from "../../components/shared/pageTitle/PageTitle";
import Container from "../../components/shared/contentContainer/Container";
import products from "../../data/products";
import ReviewsForm from "../../components/shared/reviewsForm/ReviewsForm";
import RelatedProducts from "../../components/shared/relatedProducts/RelatedProducts";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(item => item.id === id);
  const [comments, setComments] = useState(product.reviews);
  const [tab, setTab] = useState('desc');
  const dispatch = useDispatch();
  const relatedProducts = products.filter((item) => item.category === product.category);
  const widthValue = product.avgRating / 5 * 100;

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: product.id,
      image: product.imgUrl,
      productName: product.productName,
      price: product.price,
    }));

    toast.success(`${product.productName} added successfully`)
  };

  const addReview = (name, commentText, rate) => {
    const reviewObj = {
      name: name,
      text: commentText,
      rating: rate
    };
    setComments([reviewObj, ...comments]);
  }

  useEffect(() => {
    setComments(product.reviews)
  }, [product.reviews])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={`${product.productName}`}>
      <PageTitle title={`Details ${product.productName}`} />
      <section className={styles.product_detailSection}>
        <Container>
          <div className={styles.product_details}>
            <div className={styles.product_detailImg}>
              <img src={product.imgUrl} alt={product.productName} />
            </div>
            <div className={styles.product_detailInfo}>
              <h3 className={styles.product_detailName}>{product.productName}</h3>
              <div className={styles.product_detailRate}>
                <div className={styles.rate_outer}>
                  <div className={styles.rate_inner} style={{width: `${widthValue}%`}}></div>
                </div>
                <span className={styles.rate_number}>({product.avgRating} ratings)</span>
              </div>
              <p className={styles.product_detailPrice}>${product.price}</p>
              <p className={styles.product_detailDesc}>{product.shortDesc}</p>
              <div className={styles.product_detailCategory}>
                <p className={styles.product_detailCat}>Category:</p>
                <span className={styles.product_detailCatName}>{product.category}</span>
              </div>
              <motion.button whileTap={{scale: 1.2}} type="button" className={styles.add_btn} onClick={addToCart}>Add to Cart</motion.button>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div>
            <div className={styles.tab_box}>
              <h6 className={`${tab === 'desc' ? styles.active_tab : ''}`} onClick={() => setTab('desc')}>Description</h6>
              <h6 className={`${tab === 'rev' ? styles.active_tab : ''}`} onClick={() => setTab('rev')}>Reviews ({comments.length})</h6>
            </div>
            <div className={styles.tab_content}>
              {
                tab === 'desc' ? (
                  <p className={styles.tab_desc}>{product.description}</p>
                ) :
                (
                  <div className={styles.reviews}>
                    <ul className={styles.reviews_list}>
                      {
                        comments?.map((review, index) => (
                          <li key={index} className={styles.reviews_item}>
                            <h5 className={styles.reviews_name}>{review.name}</h5>
                            <span className={styles.reviews_rate}><RiStarFill/> {review.rating}</span>
                            <p className={styles.reviews_text}>{review.text}</p>
                          </li>
                        ))
                      }
                    </ul>
                    <div className={styles.reviews_form}>
                      <h4 className={styles.reviews_formTitle}>Leave your experience</h4>
                      <ReviewsForm addReview={addReview}/>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </Container>
      </section>
      <RelatedProducts data={relatedProducts}/>
    </Helmet>
  );
}

export default ProductDetail;
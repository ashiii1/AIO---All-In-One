import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./NewArrivals.module.css";
import products from "../../../data/products";
import ProductCard from "../productCard/ProductCard";
import Container from "../contentContainer/Container";

const NewArrivalss = () => {
  const newProducts = products.filter(item => item.newArrival === true);

  return (
    <section className={styles.newArrival_section}>
      <Container>
        <h2 className="section_title">New Arrivals</h2>
        <div className={styles.swiper}>
          <div className={styles.swiper_wrapper}>
            <Swiper
              loop={true}
              breakpoints={{
                375: {
                  slidesPerView: 1.4,
                  spaceBetween: 10,
                  centeredSlides: true,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              modules={[Navigation]}
            >
              {newProducts.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <ProductCard item={item} badge={true} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </Container>
    </section>
  );
}

export default NewArrivalss;
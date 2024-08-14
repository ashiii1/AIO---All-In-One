import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Banner.module.css";
import Container from "../contentContainer/Container";
import ShopButton from "../shopButton/ShopButton";
import imageBanner1 from "../../../assets/images/banner-1.jpg";
import imageBanner2 from "../../../assets/images/banner-2.jpg";
import imageBanner3 from "../../../assets/images/banner-3.jpg";
import imageBanner4 from "../../../assets/images/banner-4.jpg";

const Banner = () => {
  const bannerData = [
    {
      img: imageBanner1,
      title: 'Final Offer',
      span: '50%',
      subtitle: 'Sale for all furniture items'
    },
    {
      img: imageBanner2,
      title: 'Your first order',
      span: '15OFF',
      subtitle: 'use the code: '
    },
    {
      img: imageBanner3,
      title: 'Get 10% off',
      span: '',
      subtitle: 'Subscribe to our newsletter'
    },
    {
      img: imageBanner4,
      title: 'Final Offer',
      span: '50%',
      subtitle: 'Sale for all furniture items'
    }
  ];

  return (
      <section className={styles.banner_section}>
        <Swiper
          loop={true}
          pagination={{
            //el: "swiper-pagination",
            type: 'bullets',
            clickable: true,
            bulletClass: "swiper-custom-bullet",
            bulletActiveClass: "swiper-custom-bullet-active",
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + 0 + (index + 1) + '</span>';
          }
          }}
          modules={[Pagination]}
        >
          {
            bannerData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.slider}>
                  <div 
                    className={styles.slider_item}
                    style={{
                      background: `linear-gradient(rgb(0, 13, 107, 0.5), rgb(0, 13, 107, 0.5)), url(${item.img})`,
                      width: '100%',
                      height: '750px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <Container>
                      <div className={styles.slider_item_content}>
                        <h1 className={styles.slider_title}>{item.title}</h1>
                        <h2 className={styles.slider_subtitle}>{item.subtitle} <span>{item.span}</span></h2>
                        <ShopButton text={'Shop Now'}/>
                      </div>
                    </Container>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
  );
}

export default Banner;
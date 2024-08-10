import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination } from 'swiper/core';
// import 'swiper/swiper.min.css';
// import 'swiper/components/pagination/pagination.min.css';

const SocialNetworksCarousel = () => {
  return (
    <section className="container text-center mt-8 py-5 my-2 my-md-4 my-lg-5">
      <Slide direction="up">
      <h2 className="h1 mb-4">We Have Social Networks</h2>
      <p className="fs-lg text-muted pb-2 mb-5">
        Follow us and keep up to date with the freshest news!
      </p>
      </Slide>
      <Swiper
        slidesPerView={2}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        breakpoints={{
          500: { slidesPerView: 3 },
          650: { slidesPerView: 4 },
          900: { slidesPerView: 5 },
          1100: { slidesPerView: 6 },
        }}
      >
        <SwiperSlide>
          <div className="position-relative text-center border-end mx-n1">
            {" "}
            <Zoom>
              <Link
                to="#"
                className="btn btn-icon btn-secondary btn-facebook btn-lg stretched-link"
              >
                <i className="bx bxl-facebook"></i>
              </Link>{" "}
            </Zoom>
            <div className="pt-4">
              <h6 className="mb-1">Facebook</h6>
              {/* <p className="fs-sm text-muted mb-0">silicon</p> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="position-relative text-center border-end mx-n1">
            <Zoom>
              <Link
                to="#"
                className="btn btn-icon btn-secondary btn-instagram btn-lg stretched-link"
              >
                <i className="bx bxl-instagram"></i>
              </Link>
            </Zoom>
            <div className="pt-4">
              <h6 className="mb-1">Instagram</h6>
              {/* <p className="fs-sm text-muted mb-0">@silicon</p> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="position-relative text-center border-end mx-n1">
            {" "}
            <Zoom>
              <Link
                to="#"
                className="btn btn-icon btn-secondary btn-twitter btn-lg stretched-link"
              >
                <i className="bx bxl-twitter"></i>
              </Link>
            </Zoom>
            <div className="pt-4">
              <h6 className="mb-1">Twitter</h6>
              {/* <p className="fs-sm text-muted mb-0">@silicon</p> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="position-relative text-center border-end mx-n1">
            <Zoom>
              <Link
                to="#"
                className="btn btn-icon btn-secondary btn-linkedin btn-lg stretched-link"
              >
                <i className="bx bxl-linkedin"></i>
              </Link>
            </Zoom>
            <div className="pt-4">
              <h6 className="mb-1">LinkedIn</h6>
              {/* <p className="fs-sm text-muted mb-0">Silicon Inc.</p> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="position-relative text-center border-end mx-n1">
            <Zoom>
              <Link
                to="#"
                className="btn btn-icon btn-secondary btn-youtube btn-lg stretched-link"
              >
                <i className="bx bxl-youtube"></i>
              </Link>
            </Zoom>
            <div className="pt-4">
              <h6 className="mb-1">YouTube</h6>
              {/* <p className="fs-sm text-muted mb-0">Silicon</p> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="position-relative text-center border-end mx-n1">
            <Zoom>
              <Link
                to="#"
                className="btn btn-icon btn-secondary btn-dribbble btn-lg stretched-link"
              >
                <i className="bx bxl-dribbble"></i>
              </Link>
            </Zoom>
            <div className="pt-4">
              <h6 className="mb-1">Dribbble</h6>
              {/* <p className="fs-sm text-muted mb-0">Silicon</p> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-pagination position-relative bottom-0 pt-3 mt-4"></div>
    </section>
  );
};

export default SocialNetworksCarousel;

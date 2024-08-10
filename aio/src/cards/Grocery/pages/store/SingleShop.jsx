import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

import Grocerylogo from "../../images/Grocerylogo.png";
import product1 from "../../images/category-baby-care.jpg";
import product2 from "../../images/category-atta-rice-dal.jpg";
import product3 from "../../images/category-bakery-biscuits.jpg";
import product4 from "../../images/category-chicken-meat-fish.jpg";
import product5 from "../../images/category-cleaning-essentials.jpg";
import product6 from "../../images/category-dairy-bread-eggs.jpg";
import product7 from "../../images/category-instant-food.jpg";
import product8 from "../../images/category-pet-care.jpg";
import product9 from "../../images/category-snack-munchies.jpg";
import product10 from "../../images/category-tea-coffee-drinks.jpg";
import graphics from "../../images/store-graphics.svg";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
const SingleShop = () => {
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  return (
    <div>
      <div>
        {loaderStatus ? (
          <div className="loader-container">
            {/* <PulseLoader loading={loaderStatus} size={50} color="#0aad0a" /> */}
            <MagnifyingGlass
              visible={true}
              height="100"
              width="100"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperclassName="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#0aad0a"
            />
          </div>
        ) : (
          <>
           <>
        <ScrollToTop/>
        </>
            <>
              {/* section*/}
              <div className="mt-4">
                <div className="container">
                  {/* row */}
                  <div className="row">
                    {/* col */}
                    <div className="col-12">
                      {/* breadcrumb */}
                      {/* <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                          <li className="breadcrumb-item">
                            <Link to="#!">Home</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="#!">Stores</Link>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            E-Grocery Super Market
                          </li>
                        </ol>
                      </nav> */}
                    </div>
                  </div>
                </div>
              </div>
            </>
            <>
              {/* section */}
              <section className="mb-lg-14 mb-8 mt-8">
                <div className="container">
                  {/* row */}
                  <div className="row">
                    <div className="col-12 col-lg-3 col-md-4 mb-4 mb-md-0">
                      <div className="d-flex flex-column">
                        <div>
                          {/* img */}
                          {/* img */}
                          <img
                            src={Grocerylogo}
                            style={{
                              width: 200,
                              marginBottom: 10,
                              marginLeft: "-15px",
                            }}
                            alt="eCommerce HTML Template"
                          />
                        </div>
                        {/* heading */}
                        <div className="mt-4">
                          <h1 className="mb-1 h4">E-Grocery Super Market</h1>
                          <div className="small text-muted">
                            <span>Everyday store prices </span>
                          </div>
                          <div>
                            <span>
                              <small>
                                <Link to="#!">100% satisfaction guarantee</Link>
                              </small>
                            </span>
                          </div>
                          {/* rating */}
                          <div className="mt-2">
                            {/* rating */}
                            <small className="text-warning">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-half" />
                            </small>
                            <span className="ms-2">5.0</span>
                            {/* text */}
                            <span className="text-muted ms-1">
                              (3,400 reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      {/* nav */}
                      <ul className="nav flex-column nav-pills nav-pills-dark">
                        {/* nav item */}
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            aria-current="page"
                            to="#"
                          >
                            <i className="feather-icon icon-shopping-bag me-2" />
                            Shop
                          </Link>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <Link className="nav-link" to="#">
                            <i className="fas fa-gift me-2" />
                            Deals
                          </Link>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <Link className="nav-link" to="#">
                            <i className="fas fa-map-pin me-2" />
                            Buy It Again
                          </Link>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <Link className="nav-link" to="#">
                            <i className="fas fa-star me-2" />
                            Reviews
                          </Link>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <Link className="nav-link" to="#">
                            <i className="fas fa-book me-2" />
                            Recipes
                          </Link>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <Link className="nav-link" to="#">
                            <i className="fas fa-phone-alt me-2" />
                            Contact
                          </Link>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <Link className="nav-link" to="#">
                            <i className="fas fa-clipboard me-2" />
                            Policy
                          </Link>
                        </li>
                      </ul>
                      <hr />
                      <div>
                        <ul className="nav flex-column nav-links">
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Produce
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Dairy &amp; Eggs
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Beverages
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Meat &amp; Seafood
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Snacks &amp; Candy
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Frozen
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Bakery
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Prepared Foods
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Alcohol
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Dry Goods &amp; Pasta
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Condiments &amp; Sauces
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Canned Goods &amp; Soups
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Breakfast
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Household
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Baking Essentials
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Oils, Vinegars, &amp; Spices
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Health Care
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Personal Care
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Kitchen Supplies
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Floral
                            </Link>
                          </li>
                          {/* nav item */}
                          <li className="nav-item">
                            <Link to="#!" className="nav-link">
                              Party &amp; Gift Supplies
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-9 col-md-8">
                      <div className="mb-8 bg-light rounded-3 d-lg-flex justify-content-lg-between">
                        <div className="align-self-center p-8">
                          <div className="mb-3">
                            <h5 className="mb-0 fw-bold">
                              E-Grocery Super Market
                            </h5>
                            <p className="mb-0 text-muted">
                              Whatever the occasion, we have got you covered.
                            </p>
                          </div>
                          <div className="position-relative">
                            <input
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="Search E-Grocery Super Market"
                            />
                            <span className="position-absolute end-0 top-0 mt-2 me-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={14}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-search"
                              >
                                <circle cx={11} cy={11} r={8} />
                                <line x1={21} y1={21} x2="16.65" y2="16.65" />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="py-4">
                          {/* img */}
                          <img
                            src={graphics}
                            alt="stores"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="d-md-flex justify-content-between mb-3 align-items-center">
                        <div>
                          <p className="mb-3 mb-md-0">24 Products found</p>
                        </div>
                        <div className="d-flex justify-content-md-between align-items-center">
                          <div className="me-2">
                            {/* select option */}
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Show: 50</option>
                              <option value={10}>10</option>
                              <option value={20}>20</option>
                              <option value={30}>30</option>
                            </select>
                          </div>
                          <div>
                            {/* select option */}
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Sort by: Featured</option>
                              <option value="Low to High">
                                Price: Low to High
                              </option>
                              <option value="High to Low">
                                Price: High to Low
                              </option>
                              <option value="Release Date">Release Date</option>
                              <option value="Avg. Rating">Avg. Rating</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* row */}
                      <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {/* badge */}
                                <div className="position-absolute top-0 start-0">
                                  <span className="badge bg-danger">Sale</span>
                                </div>
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={product1}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* btn action */}
                                <div className="card-product-action">
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i
                                      className="bi bi-eye"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Quick View"
                                    />
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Wishlist"
                                  >
                                    {/* <i className="bi bi-heart" /> */}
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Compare"
                                  >
                                    <i className="bi bi-arrow-left-right" />
                                  </Link>
                                </div>
                              </div>
                              <div className="text-small mb-1">
                                <Link
                                  to="#!"
                                  className="text-decoration-none text-muted"
                                >
                                  <small>Snack &amp; Munchies</small>
                                </Link>
                              </div>
                              <h2 className="fs-6">
                                <Link
                                  to="#!"
                                  className="text-inherit text-decoration-none"
                                >
                                  Haldirams Sev Bhujia
                                </Link>
                              </h2>
                              <div>
                                {/* rating */}
                                <small className="text-warning">
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">
                                  4.5(149)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$18</span>
                                  <span className="text-decoration-line-through text-muted">
                                    $24
                                  </span>
                                </div>
                                <div>
                                  {/* btn */}
                                  <Link
                                    to="#!"
                                    className="btn btn-primary btn-sm"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-plus"
                                    >
                                      <line x1={12} y1={5} x2={12} y2={19} />
                                      <line x1={5} y1={12} x2={19} y2={12} />
                                    </svg>
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {/* badge */}
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={product2}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* btn action */}
                                <div className="card-product-action">
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i
                                      className="bi bi-eye"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Quick View"
                                    />
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Wishlist"
                                  >
                                    {/* <i className="bi bi-heart" /> */}
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Compare"
                                  >
                                    <i className="bi bi-arrow-left-right" />
                                  </Link>
                                </div>
                              </div>
                              <div className="text-small mb-1">
                                <Link
                                  to="#!"
                                  className="text-decoration-none text-muted"
                                >
                                  <small>Bakery &amp; Biscuits</small>
                                </Link>
                              </div>
                              <h2 className="fs-6">
                                <Link
                                  to="#!"
                                  className="text-inherit text-decoration-none"
                                >
                                  NutriChoice Digestive
                                </Link>
                              </h2>
                              <div className="text-warning">
                                <small>
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">
                                  4.5 (25)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$24</span>
                                </div>
                                <div>
                                  {/* btn */}
                                  <Link
                                    to="#!"
                                    className="btn btn-primary btn-sm"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-plus"
                                    >
                                      <line x1={12} y1={5} x2={12} y2={19} />
                                      <line x1={5} y1={12} x2={19} y2={12} />
                                    </svg>
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {/* badge */}
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={product3}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* btn action */}
                                <div className="card-product-action">
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i
                                      className="bi bi-eye"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Quick View"
                                    />
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Wishlist"
                                  >
                                    {/* <i className="bi bi-heart" /> */}
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Compare"
                                  >
                                    <i className="bi bi-arrow-left-right" />
                                  </Link>
                                </div>
                              </div>
                              <div className="text-small mb-1">
                                <Link
                                  to="#!"
                                  className="text-decoration-none text-muted"
                                >
                                  <small>Bakery &amp; Biscuits</small>
                                </Link>
                              </div>
                              <h2 className="fs-6">
                                <Link
                                  to="#!"
                                  className="text-inherit text-decoration-none"
                                >
                                  Cadbury 5 Star Chocolate
                                </Link>
                              </h2>
                              <div className="text-warning">
                                <small>
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">
                                  5 (469)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$32</span>
                                  <span className="text-decoration-line-through text-muted">
                                    $35
                                  </span>
                                </div>
                                <div>
                                  {/* btn */}
                                  <Link
                                    to="#!"
                                    className="btn btn-primary btn-sm"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-plus"
                                    >
                                      <line x1={12} y1={5} x2={12} y2={19} />
                                      <line x1={5} y1={12} x2={19} y2={12} />
                                    </svg>
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {/* badge */}
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={product4}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* btn action */}
                                <div className="card-product-action">
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i
                                      className="bi bi-eye"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Quick View"
                                    />
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Wishlist"
                                  >
                                    {/* <i className="bi bi-heart" /> */}
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Compare"
                                  >
                                    <i className="bi bi-arrow-left-right" />
                                  </Link>
                                </div>
                              </div>
                              <div className="text-small mb-1">
                                <Link
                                  to="#!"
                                  className="text-decoration-none text-muted"
                                >
                                  <small>Snack &amp; Munchies</small>
                                </Link>
                              </div>
                              <h2 className="fs-6">
                                <Link
                                  to="#!"
                                  className="text-inherit text-decoration-none"
                                >
                                  Onion Flavour Potato
                                </Link>
                              </h2>
                              <div className="text-warning">
                                <small>
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                  <i className="bi bi-star" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">
                                  3.5 (456)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$3</span>
                                  <span className="text-decoration-line-through text-muted">
                                    $5
                                  </span>
                                </div>
                                <div>
                                  {/* btn */}
                                  <Link
                                    to="#!"
                                    className="btn btn-primary btn-sm"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-plus"
                                    >
                                      <line x1={12} y1={5} x2={12} y2={19} />
                                      <line x1={5} y1={12} x2={19} y2={12} />
                                    </svg>
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {/* badge */}
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={product5}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* btn action */}
                                <div className="card-product-action">
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i
                                      className="bi bi-eye"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Quick View"
                                    />
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Wishlist"
                                  >
                                    {/* <i className="bi bi-heart" /> */}
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Compare"
                                  >
                                    <i className="bi bi-arrow-left-right" />
                                  </Link>
                                </div>
                              </div>
                              <div className="text-small mb-1">
                                <Link
                                  to="#!"
                                  className="text-decoration-none text-muted"
                                >
                                  <small>Instant Food</small>
                                </Link>
                              </div>
                              <h2 className="fs-6">
                                <Link
                                  to="#!"
                                  className="text-inherit text-decoration-none"
                                >
                                  Salted Instant Popcorn
                                </Link>
                              </h2>
                              <div className="text-warning">
                                <small>
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">
                                  4.5 (39)
                                </span>
                              </div>
                              <div className="d-flex justify-content-between mt-4">
                                <div>
                                  <span className="text-dark">$13</span>
                                  <span className="text-decoration-line-through text-muted">
                                    $18
                                  </span>
                                </div>
                                <div>
                                  {/* btn */}
                                  <Link
                                    to="#!"
                                    className="btn btn-primary btn-sm"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-plus"
                                    >
                                      <line x1={12} y1={5} x2={12} y2={19} />
                                      <line x1={5} y1={12} x2={19} y2={12} />
                                    </svg>
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {/* badge */}
                                <div className="position-absolute top-0 start-0">
                                  <span className="badge bg-danger">Sale</span>
                                </div>
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={product6}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* btn action */}
                                <div className="card-product-action">
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i
                                      className="bi bi-eye"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Quick View"
                                    />
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Wishlist"
                                  >
                                    {/* <i className="bi bi-heart" /> */}
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Compare"
                                  >
                                    <i className="bi bi-arrow-left-right" />
                                  </Link>
                                </div>
                              </div>
                              <div className="text-small mb-1">
                                <Link
                                  to="#!"
                                  className="text-decoration-none text-muted"
                                >
                                  <small>Dairy, Bread &amp; Eggs</small>
                                </Link>
                              </div>
                              <h2 className="fs-6">
                                <Link
                                  to="#!"
                                  className="text-inherit text-decoration-none"
                                >
                                  Blueberry Greek Yogurt
                                </Link>
                              </h2>
                              <div>
                                {/* rating */}
                                <small className="text-warning">
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">
                                  4.5 (189)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$18</span>
                                  <span className="text-decoration-line-through text-muted">
                                    $24
                                  </span>
                                </div>
                                <div>
                                  {/* btn */}
                                  <Link
                                    to="#!"
                                    className="btn btn-primary btn-sm"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-plus"
                                    >
                                      <line x1={12} y1={5} x2={12} y2={19} />
                                      <line x1={5} y1={12} x2={19} y2={12} />
                                    </svg>
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {/* badge */}
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={product7}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* btn action */}
                                <div className="card-product-action">
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i
                                      className="bi bi-eye"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Quick View"
                                    />
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Wishlist"
                                  >
                                    {/* <i className="bi bi-heart" /> */}
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Compare"
                                  >
                                    <i className="bi bi-arrow-left-right" />
                                  </Link>
                                </div>
                              </div>
                              <div className="text-small mb-1">
                                <Link
                                  to="#!"
                                  className="text-decoration-none text-muted"
                                >
                                  <small>Dairy, Bread &amp; Eggs</small>
                                </Link>
                              </div>
                              <h2 className="fs-6">
                                <Link
                                  to="#!"
                                  className="text-inherit text-decoration-none"
                                >
                                  Britannia Cheese Slices
                                </Link>
                              </h2>
                              <div className="text-warning">
                                <small>
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">
                                  5 (345)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$24</span>
                                </div>
                                <div>
                                  {/* btn */}
                                  <Link
                                    to="#!"
                                    className="btn btn-primary btn-sm"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-plus"
                                    >
                                      <line x1={12} y1={5} x2={12} y2={19} />
                                      <line x1={5} y1={12} x2={19} y2={12} />
                                    </svg>
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {/* badge */}
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={product8}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* btn action */}
                                <div className="card-product-action">
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i
                                      className="bi bi-eye"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Quick View"
                                    />
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Wishlist"
                                  >
                                    {/* <i className="bi bi-heart" /> */}
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Compare"
                                  >
                                    <i className="bi bi-arrow-left-right" />
                                  </Link>
                                </div>
                              </div>
                              <div className="text-small mb-1">
                                <Link
                                  to="#!"
                                  className="text-decoration-none text-muted"
                                >
                                  <small>Instant Food</small>
                                </Link>
                              </div>
                              <h2 className="fs-6">
                                <Link
                                  to="#!"
                                  className="text-inherit text-decoration-none"
                                >
                                  Kelloggs Original Cereals
                                </Link>
                              </h2>
                              <div className="text-warning">
                                <small>
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">4 (90)</span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$32</span>
                                  <span className="text-decoration-line-through text-muted">
                                    $35
                                  </span>
                                </div>
                                <div>
                                  {/* btn */}
                                  <Link
                                    to="#!"
                                    className="btn btn-primary btn-sm"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-plus"
                                    >
                                      <line x1={12} y1={5} x2={12} y2={19} />
                                      <line x1={5} y1={12} x2={19} y2={12} />
                                    </svg>
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {/* badge */}
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={product9}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* btn action */}
                                <div className="card-product-action">
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i
                                      className="bi bi-eye"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Quick View"
                                    />
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Wishlist"
                                  >
                                    {/* <i className="bi bi-heart" /> */}
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Compare"
                                  >
                                    <i className="bi bi-arrow-left-right" />
                                  </Link>
                                </div>
                              </div>
                              <div className="text-small mb-1">
                                <Link
                                  to="#!"
                                  className="text-decoration-none text-muted"
                                >
                                  <small>Snack &amp; Munchies</small>
                                </Link>
                              </div>
                              <h2 className="fs-6">
                                <Link
                                  to="#!"
                                  className="text-inherit text-decoration-none"
                                >
                                  Slurrp Millet Chocolate
                                </Link>
                              </h2>
                              <div className="text-warning">
                                <small>
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">
                                  4.5 (67)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$3</span>
                                  <span className="text-decoration-line-through text-muted">
                                    $5
                                  </span>
                                </div>
                                <div>
                                  {/* btn */}
                                  <Link
                                    to="#!"
                                    className="btn btn-primary btn-sm"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-plus"
                                    >
                                      <line x1={12} y1={5} x2={12} y2={19} />
                                      <line x1={5} y1={12} x2={19} y2={12} />
                                    </svg>
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {/* badge */}
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={product10}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* btn action */}
                                <div className="card-product-action">
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i
                                      className="bi bi-eye"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Quick View"
                                    />
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Wishlist"
                                  >
                                    {/* <i className="bi bi-heart" /> */}
                                  </Link>
                                  <Link
                                    to="#!"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Compare"
                                  >
                                    <i className="bi bi-arrow-left-right" />
                                  </Link>
                                </div>
                              </div>
                              <div className="text-small mb-1">
                                <Link
                                  to="#!"
                                  className="text-decoration-none text-muted"
                                >
                                  <small>Dairy, Bread &amp; Eggs</small>
                                </Link>
                              </div>
                              <h2 className="fs-6">
                                <Link
                                  to="#!"
                                  className="text-inherit text-decoration-none"
                                >
                                  Amul Butter - 500 g
                                </Link>
                              </h2>
                              <div className="text-warning">
                                <small>
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                  <i className="bi bi-star" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">
                                  3.5 (89)
                                </span>
                              </div>
                              <div className="d-flex justify-content-between mt-4">
                                <div>
                                  <span className="text-dark">$13</span>
                                  <span className="text-decoration-line-through text-muted">
                                    $18
                                  </span>
                                </div>
                                <div>
                                  {/* btn */}
                                  <Link
                                    to="#!"
                                    className="btn btn-primary btn-sm"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-plus"
                                    >
                                      <line x1={12} y1={5} x2={12} y2={19} />
                                      <line x1={5} y1={12} x2={19} y2={12} />
                                    </svg>
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* row */}
                      <div className="row mt-8">
                        <div className="col">
                          {/* nav */}
                          <nav>
                            <ul className="pagination">
                              <li className="page-item disabled">
                                <Link
                                  className="page-link mx-1 rounded-3"
                                  to="#"
                                  aria-label="Previous"
                                >
                                  <i className="fa fa-chevron-left" />
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link
                                  className="page-link mx-1 rounded-3 active"
                                  to="#"
                                >
                                  1
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link
                                  className="page-link mx-1 rounded-3 text-body"
                                  to="#"
                                >
                                  2
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link
                                  className="page-link mx-1 rounded-3 text-body"
                                  to="#"
                                >
                                  ...
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link
                                  className="page-link mx-1 rounded-3 text-body"
                                  to="#"
                                >
                                  12
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link
                                  className="page-link mx-1 rounded-3 text-body"
                                  to="#"
                                  aria-label="Next"
                                >
                                  <i className="fa fa-chevron-right" />
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleShop;

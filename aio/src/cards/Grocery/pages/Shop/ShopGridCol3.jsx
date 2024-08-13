import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { MagnifyingGlass } from "react-loader-spinner";
import assortment from "../../images/assortment-citrus-fruits.png";
import productimg1 from "../../images/product-img-1.jpg";
import productimg2 from "../../images/product-img-2.jpg";
import productimg3 from "../../images/product-img-3.jpg";
import productimg4 from "../../images/product-img-4.jpg";
import productimg5 from "../../images/product-img-5.jpg";
import productimg6 from "../../images/product-img-6.jpg";
import { MagnifyingGlass } from "react-loader-spinner";

const dropdownData = [
  {
    title: "Dairy, Bread & Eggs",
    items: [
      "Milk",
      "Milk Drinks",
      "Curd & Yogurt",
      "Eggs",
      "Bread",
      "Buns & Bakery",
      "Butter & More",
      "Cheese",
      "Paneer & Tofu",
      "Cream & Whitener",
      "Condensed Milk",
      "Vegan Drinks",
    ],
  },
  {
    title: "Snacks & Munchies",
    items: [
      "Chips & Crisps",
      "Nachos",
      "Popcorn",
      "Bhujia & Mixtures",
      "Namkeen Snacks",
      "Healthy Snacks",
      "Cakes & Rolls",
      "Energy Bars",
      "Papad & Fryums",
      "Rusks & Wafers",
    ],
  },
  {
    title: "Fruits & Vegetables",
    items: [
      "Fresh Vegetables",
      "Herbs & Seasonings",
      "Fresh Fruits",
      "Organic Fruits & Vegetables",
      "Cuts & Sprouts",
      "Exotic Fruits & Veggies",
      "Flower Bouquets, Bunches",
    ],
  },
  {
    title: "Cold Drinks & Juices",
    items: [
      "Soft Drinks",
      "Fruit Juices",
      "Coldpress",
      "Energy Drinks",
      "Water & Ice Cubes",
      "Soda & Mixers",
      "Concentrates & Syrups",
      "Detox & Energy Drinks",
      "Juice Collection",
    ],
  },
];

const ShopGridCol3 = () => {
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1000);
  }, []);

  function Dropdown() {
    const [openDropdowns, setOpenDropdowns] = useState([]);

    const toggleDropdown = (index) => {
      if (openDropdowns.includes(index)) {
        setOpenDropdowns(openDropdowns.filter((item) => item !== index));
      } else {
        setOpenDropdowns([...openDropdowns, index]);
      }
    };
    // loading
    // const [loaderStatus, setLoaderStatus] = useState(true);
    // useEffect(() => {
    //   setTimeout(() => {
    //     setLoaderStatus(false);
    //   }, 1500);
    // }, []);

    return (
      //   <div>
      //     {loaderStatus ? (
      //       <div className="loader-container">
      //         {/* <PulseLoader loading={loaderStatus} size={50} color="#0aad0a" /> */}
      //         <MagnifyingGlass
      //           visible={true}
      //           height="100"
      //           width="100"
      //           ariaLabel="magnifying-glass-loading"
      //           wrapperStyle={{}}
      //           wrapperclassName="magnifying-glass-wrapper"
      //           glassColor="#c0efff"
      //           color="#0aad0a"
      //         />
      //       </div>
      //     ) : (
      <>
        <div>
          <div className="container">
            <div className="row fixed-side">
              {/* Vertical Dropdowns Column */}
              <h5 className="mb-3 mt-8">Categories</h5>
              <div className="col-md-3">
                {dropdownData.map((dropdown, index) => (
                  <ul className="nav flex-column" key={index}>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="#"
                        onClick={() => toggleDropdown(index)}
                        aria-expanded={
                          openDropdowns.includes(index) ? "true" : "false"
                        }
                        aria-controls={`categoryFlush${index + 1}`}
                      >
                        {dropdown.title} <i className="fa fa-chevron-down" />
                      </Link>
                      <div
                        className={`collapse ${
                          openDropdowns.includes(index) ? "show" : ""
                        }`}
                        id={`categoryFlush${index + 1}`}
                      >
                        <div>
                          <ul className="nav flex-column ms-3">
                            {dropdown.items.map((item, itemIndex) => (
                              <li className="nav-item" key={itemIndex}>
                                <Link className="nav-link" to="#">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                ))}
                <div className="py-4">
                  <h5 className="mb-3">Stores</h5>
                  <div className="my-4">
                    {/* input */}
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search by store"
                    />
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="eGrocery"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="eGrocery">
                      E-Grocery
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="DealShare"
                    />
                    <label className="form-check-label" htmlFor="DealShare">
                      DealShare
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="Dmart"
                    />
                    <label className="form-check-label" htmlFor="Dmart">
                      DMart
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="Blinkit"
                    />
                    <label className="form-check-label" htmlFor="Blinkit">
                      Blinkit
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="BigBasket"
                    />
                    <label className="form-check-label" htmlFor="BigBasket">
                      BigBasket
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="StoreFront"
                    />
                    <label className="form-check-label" htmlFor="StoreFront">
                      StoreFront
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="Spencers"
                    />
                    <label className="form-check-label" htmlFor="Spencers">
                      Spencers
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="onlineGrocery"
                    />
                    <label className="form-check-label" htmlFor="onlineGrocery">
                      Online Grocery
                    </label>
                  </div>
                </div>
                <div className="py-4">
                  {/* price */}
                  <h5 className="mb-3">Price</h5>
                  <div>
                    {/* range */}
                    <div id="priceRange" className="mb-3" />
                    <small className="text-muted">Price:</small>{" "}
                    <span id="priceRange-value" className="small" />
                  </div>
                </div>
                {/* rating */}
                <div className="py-4">
                  <h5 className="mb-3">Rating</h5>
                  <div>
                    {/* form check */}
                    <div className="form-check mb-2">
                      {/* input */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="ratingFive"
                      />
                      <label className="form-check-label" htmlFor="ratingFive">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning " />
                        <i className="bi bi-star-fill text-warning " />
                        <i className="bi bi-star-fill text-warning " />
                        <i className="bi bi-star-fill text-warning " />
                      </label>
                    </div>
                    {/* form check */}
                    <div className="form-check mb-2">
                      {/* input */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="ratingFour"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="ratingFour">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning " />
                        <i className="bi bi-star-fill text-warning " />
                        <i className="bi bi-star-fill text-warning " />
                        <i className="bi bi-star text-warning" />
                      </label>
                    </div>
                    {/* form check */}
                    <div className="form-check mb-2">
                      {/* input */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="ratingThree"
                      />
                      <label className="form-check-label" htmlFor="ratingThree">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning " />
                        <i className="bi bi-star-fill text-warning " />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                      </label>
                    </div>
                    {/* form check */}
                    <div className="form-check mb-2">
                      {/* input */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="ratingTwo"
                      />
                      <label className="form-check-label" htmlFor="ratingTwo">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                      </label>
                    </div>
                    {/* form check */}
                    <div className="form-check mb-2">
                      {/* input */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="ratingOne"
                      />
                      <label className="form-check-label" htmlFor="ratingOne">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                      </label>
                    </div>
                  </div>
                </div>
                </div>
              <div className="col-lg-9 col-md-8">
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
                      {/* card */}
                      <div className="card mb-4 bg-light border-0">
                        {/* card body */}
                        <div className="card-body p-9">
                          <h1 className="mb-0">Snacks &amp; Munchies</h1>
                        </div>
                      </div>
                      {/* list icon */}
                      <div className="d-md-flex justify-content-between align-items-center">
                        <div>
                          <p className="mb-3 mb-md-0">
                            {" "}
                            <span className="text-dark">24 </span> Products
                            found{" "}
                          </p>
                        </div>
                        {/* icon */}
                        <div className="d-flex justify-content-between align-items-center">
                          <Link to="/ShopListCol" className="text-muted me-3">
                            <i className="bi bi-list-ul" />
                          </Link>
                          <Link to="/ShopGridCol3" className=" me-3 active">
                            <i className="bi bi-grid" />
                          </Link>
                          <Link to="/Shop" className="me-3 text-muted">
                            <i className="bi bi-grid-3x3-gap" />
                          </Link>
                          {/* select option */}
                          <div className="me-2">
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
                          {/* select option */}
                          <div>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Sort by: Featured</option>
                              <option value="Low to High">
                                Price: Low to High
                              </option>
                              <option value="High to Low">
                                {" "}
                                Price: High to Low
                              </option>
                              <option value="Release Date">
                                {" "}
                                Release Date
                              </option>
                              <option value="Avg. Rating"> Avg. Rating</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* row */}
                      <div className="row g-4 row-cols-xl-3 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                        {/* col */}
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              {/* badge */}
                              <div className="text-center position-relative ">
                                <div className=" position-absolute top-0 start-0">
                                  <span className="badge bg-danger">Sale</span>
                                </div>
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={productimg4}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* action btn */}
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
                                    to="shop-wishlist.html"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Wishlist"
                                  >
                                    <i className="bi bi-heart" />
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
                              {/* heading */}
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
                                {/* rating */}{" "}
                                <small className="text-warning">
                                  {" "}
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                </small>{" "}
                                <span className="text-muted small">
                                  4.5(149)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$18</span>{" "}
                                  <span className="text-decoration-line-through text-muted">
                                    $24
                                  </span>
                                </div>
                                {/* btn */}
                                <div>
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
                                    </svg>{" "}
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col */}
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                <div className=" position-absolute top-0 start-0">
                                  <span className="badge bg-success">14%</span>
                                </div>
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={productimg5}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* action btn */}
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
                                    <i className="bi bi-heart" />
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
                              {/* heading */}
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
                                  NutriChoice Digestive{" "}
                                </Link>
                              </h2>
                              <div className="text-warning">
                                {/* rating */}
                                <small>
                                  {" "}
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                </small>{" "}
                                <span className="text-muted small">
                                  4.5 (25)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$24</span>
                                </div>
                                {/* btn */}
                                <div>
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
                                    </svg>{" "}
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col */}
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {" "}
                                <Link to="#!">
                                  <img
                                    src={productimg1}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* action btn */}
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
                                    <i className="bi bi-heart" />
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
                              {/* heading */}
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
                                {/* rating */}
                                <small>
                                  {" "}
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                </small>{" "}
                                <span className="text-muted small">
                                  5 (469)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$32</span>{" "}
                                  <span className="text-decoration-line-through text-muted">
                                    $35
                                  </span>
                                </div>
                                {/* btn */}
                                <div>
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
                                    </svg>{" "}
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col */}
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                <div className=" position-absolute top-0">
                                  <span className="badge bg-danger">hot</span>
                                </div>
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={productimg3}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* action btn */}
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
                                    <i className="bi bi-heart" />
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
                              {/* heading */}
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
                                {/* rating */}
                                <small>
                                  {" "}
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                  <i className="bi bi-star" />
                                </small>{" "}
                                <span className="text-muted small">
                                  3.5 (456)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$3</span>{" "}
                                  <span className="text-decoration-line-through text-muted">
                                    $5
                                  </span>
                                </div>
                                {/* btn */}
                                <div>
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
                                    </svg>{" "}
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col */}
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {" "}
                                <Link to="#!">
                                  <img
                                    src={productimg6}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* action btn */}
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
                                    <i className="bi bi-heart" />
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
                              {/* heading */}
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
                                  Salted Instant Popcorn{" "}
                                </Link>
                              </h2>
                              <div className="text-warning">
                                {/* rating */}
                                <small>
                                  {" "}
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                </small>{" "}
                                <span className="text-muted small">
                                  4.5 (39)
                                </span>
                              </div>
                              <div className="d-flex justify-content-between mt-4">
                                <div>
                                  <span className="text-dark">$13</span>{" "}
                                  <span className="text-decoration-line-through text-muted">
                                    $18
                                  </span>
                                </div>
                                {/* btn */}
                                <div>
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
                                    </svg>{" "}
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col */}
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              {/* badge */}
                              <div className="text-center position-relative ">
                                <div className=" position-absolute top-0 start-0">
                                  <span className="badge bg-danger">Sale</span>
                                </div>
                                <Link to="#!">
                                  {/* img */}
                                  <img
                                    src={productimg2}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* action btn */}
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
                                    to="shop-wishlist.html"
                                    className="btn-action"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Wishlist"
                                  >
                                    <i className="bi bi-heart" />
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
                              {/* heading */}
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
                                {/* rating */}{" "}
                                <small className="text-warning">
                                  {" "}
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                </small>{" "}
                                <span className="text-muted small">
                                  4.5 (189)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$18</span>{" "}
                                  <span className="text-decoration-line-through text-muted">
                                    $24
                                  </span>
                                </div>
                                {/* btn */}
                                <div>
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
                                    </svg>{" "}
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col */}
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {" "}
                                <Link to="#!">
                                  <img
                                    src={productimg3}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* action btn */}
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
                                    <i className="bi bi-heart" />
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
                              {/* heading */}
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
                                {/* rating */}
                                <small>
                                  {" "}
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                </small>{" "}
                                <span className="text-muted small">
                                  5 (345)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$24</span>
                                </div>
                                {/* btn */}
                                <div>
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
                                    </svg>{" "}
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col */}
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {" "}
                                <Link to="#!">
                                  <img
                                    src={productimg4}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* action btn */}
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
                                    <i className="bi bi-heart" />
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
                              {/* heading */}
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
                                {/* rating */}
                                <small>
                                  {" "}
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                </small>{" "}
                                <span className="text-muted small">4 (90)</span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$32</span>{" "}
                                  <span className="text-decoration-line-through text-muted">
                                    $35
                                  </span>
                                </div>
                                {/* btn */}
                                <div>
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
                                    </svg>{" "}
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col */}
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {" "}
                                <Link to="#!">
                                  <img
                                    src={productimg5}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* action btn */}
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
                                    <i className="bi bi-heart" />
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
                              {/* heading */}
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
                                  Slurrp Millet Chocolate{" "}
                                </Link>
                              </h2>
                              <div className="text-warning">
                                {/* rating */}
                                <small>
                                  {" "}
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                </small>{" "}
                                <span className="text-muted small">
                                  4.5 (67)
                                </span>
                              </div>
                              {/* price */}
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                  <span className="text-dark">$3</span>{" "}
                                  <span className="text-decoration-line-through text-muted">
                                    $5
                                  </span>
                                </div>
                                {/* btn */}
                                <div>
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
                                    </svg>{" "}
                                    Add
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col */}
                        <div className="col">
                          {/* card */}
                          <div className="card card-product">
                            <div className="card-body">
                              <div className="text-center position-relative">
                                {" "}
                                <Link to="#!">
                                  <img
                                    src={productimg6}
                                    alt="Grocery Ecommerce Template"
                                    className="mb-3 img-fluid"
                                  />
                                </Link>
                                {/* action btn */}
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
                                    <i className="bi bi-heart" />
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
                              {/* heading */}
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
                                {/* rating */}
                                <small>
                                  {" "}
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-half" />
                                  <i className="bi bi-star" />
                                </small>{" "}
                                <span className="text-muted small">
                                  3.5 (89)
                                </span>
                              </div>
                              <div className="d-flex justify-content-between mt-4">
                                <div>
                                  <span className="text-dark">$13</span>{" "}
                                  <span className="text-decoration-line-through text-muted">
                                    $18
                                  </span>
                                </div>
                                {/* btn */}
                                <div>
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
                                    </svg>{" "}
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
                                  className="page-link  mx-1 rounded-3 "
                                  to="#"
                                  aria-label="Previous"
                                >
                                  <i className="fa fa-chevron-left" />
                                </Link>
                              </li>
                              <li className="page-item ">
                                <Link
                                  className="page-link  mx-1 rounded-3 active"
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
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  //       </div>
  //     );
  //   }

  return <Dropdown />;
};

export default ShopGridCol3;
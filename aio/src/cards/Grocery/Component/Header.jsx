import React, { useState } from "react";
import Grocerylogo from "../images/Grocerylogo.png";
import menubanner from "../images/menu-banner.jpg";
import productimage1 from '../images/product-img-1.jpg'
import productimage2 from '../images/product-img-2.jpg'
import productimage3 from '../images/product-img-3.jpg'
import productimage4 from '../images/product-img-4.jpg'
import productimage5 from '../images/product-img-5.jpg'
import { Link } from "react-router-dom";

const Header = () => {


  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <>
        <div className="border-bottom pb-5">
          <div className="bg-light py-1">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-12 d-flex " style={{ alignItems: 'center' }}>
                  <span> Super Value Deals - Save more with coupons</span>
                </div>
                <div className="col-md-2 col-xxl-1 text-end d-none d-lg-block" style={{ marginLeft: '20px' }}>
                  <div className="list-inline">
                    <div className="list-inline-item">
                      <Link
                        to="/grocery/ShopWishList"
                        className="text-muted position-relative"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-heart"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                          5
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </Link>
                    </div>
                    <div className="list-inline-item">
                      <Link
                        to="#!"
                        className="text-muted"
                        data-bs-toggle="modal"
                        data-bs-target="#userModal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </Link>
                    </div>
                    <div className="list-inline-item">
                      <Link
                        className="text-muted position-relative "
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        to="#offcanvasExample"
                        role="button"
                        aria-controls="offcanvasRight"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-shopping-bag"
                        >
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1={3} y1={6} x2={21} y2={6} />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                          1
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="container  displaydesign">
          <div className="row g-4">
            <div className="col-8 col-sm-4 col-lg-9 py-2 ">
              <input
                className="form-control "
                style={{ width: "100%" }}
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search..."
              />
            </div>
            <div className="col-4 col-sm-4 col-lg-3 py-2 d-flex" style={{ justifyContent: 'center' }}>
              {/* Button trigger modal */}
              {/* <button
            type="button"
            className="btn btn-primary "
            data-bs-toggle="modal"
            data-bs-target="/ShoplocationModal"
          >
            <i className="feather-icon icon-map-pin me-2" />
            Location
          </button> */}
              <div className="list-inline">
                <div className="list-inline-item">
                  <Link to="/grocery/ShopWishList" className="text-muted position-relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      5<span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
                <div className="list-inline-item">
                  <Link
                    to="#!"
                    className="text-muted"
                    data-bs-toggle="modal"
                    data-bs-target="#userModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </Link>
                </div>
                <div className="list-inline-item">
                  <Link
                    className="text-muted position-relative "
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    to="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasRight"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-bag"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      1<span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <nav className="navbar navbar-expand-lg navbar-expand-lg navbar-light sticky-top text-3xl">
        <div className="container text-3xl">
          <Link className="navbar-brand" to="/grocery/shop">
            <img
              src={Grocerylogo}
              style={{ width: 200, marginBottom: 10, marginLeft: "-15px" }}
              alt="eCommerce HTML Template"
            />
          </Link>
          <input
            className="form-control responsivesearch "
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
            // fdprocessedid="9icrif"
            
            style={{ width: "35%" }}
          />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile_nav"
            aria-controls="mobile_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className={`containerr ${isOpen ? 'change' : ''}`} onClick={handleClick}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
      </button>

      <div className=" navbar-collapse text-3xl" id="mobile_nv">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 float-md-right text-3xl"></ul>
        <ul className="navbar-nav navbar-light text-3xl">
          <li className="nav-item text-3xl">
            <li className="nav-item dmenu dropdown text-3xl">
              <Link
                className="nav-link dropdown-toggle"
                to="/grocery/shop"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {/* <span class="me-1 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="feather feather-grid"
                  >
                    <rect x="3" y="3" width="7" height="7" className="bg-black"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </span>{" "} */}
                All Departments
              </Link>
              <div
                className="dropdown-menu sm-menu"
                aria-labelledby="navbarDropdow"
              >
                <Link className="dropdown-item" to="/grocery/Shop">
                  Dairy, Bread &amp; Eggs
                </Link>
                <Link className="dropdown-item" to="/grocery/Shop">
                  Snacks &amp; Munchies
                </Link>
                <Link className="dropdown-item" to="/grocery/Shop">
                  Fruits &amp; Vegetables
                </Link>
                <Link className="dropdown-item" to="/grocery/Shop">
                  Cold Drinks &amp; Juices
                </Link>
                <Link className="dropdown-item" to="/grocery/Shop">
                  Breakfast &amp; Instant Food
                </Link>
                <Link className="dropdown-item" to="/grocery/Shop">
                  Bakery &amp; Biscuits
                </Link>
                <Link className="dropdown-item" to="/grocery/Shop">
                  Chicken, Meat &amp; Fish
                </Link>
              </div>
            </li>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/grocery">
              Home
            </Link>
          </li>
          <li className="nav-item dmenu dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About
            </Link>
            <div
              className="dropdown-menu sm-menu"
              aria-labelledby="navbarDropdown"
            >
              <Link class="dropdown-item" to="/grocery/Blog">
                Blog
              </Link>
              {/* <Link className="dropdown-item" to="pages/blog-single.html">
                    Blog Single
                  </Link> */}
              <Link className="dropdown-item" to="/grocery/BlogCategory">
                Blog Category
              </Link>
              <Link className="dropdown-item" to="/grocery/AboutUs">
                About us
              </Link>
              {/* <Link className="dropdown-item" to="pages/404error.html">
                    404 Error
                  </Link> */}
              <Link className="dropdown-item" to="/grocery/Contact">
                Contact
              </Link>
            </div>
          </li>

          <li className="nav-item dmenu dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shop
            </Link>
            <div
              className="dropdown-menu sm-menu"
              aria-labelledby="navbarDropdown"
            >
              <Link className="dropdown-item" to="/grocery/Shop">
                Shop
              </Link>
              <Link className="dropdown-item" to="/grocery/ShopWishList">
                Shop Wishlist
              </Link>
              <Link className="dropdown-item" to="/grocery/ShopCart">
                Shop Cart
              </Link>
              <Link className="dropdown-item" to="/grocery/ShopCheckOut">
                Shop Checkout
              </Link>
            </div>
          </li>

          <li className="nav-item dmenu dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Stores
            </Link>
            <div
              className="dropdown-menu sm-menu"
              aria-labelledby="navbarDropdown"
            >
              <Link className="dropdown-item" to="/grocery/StoreList">
                Store List
              </Link>
              {/* <Link className="dropdown-item" to="pages/store-grid.html">
                    Store Grid
                  </Link> */}
              <Link className="dropdown-item" to="/grocery/SingleShop">
                Single Store
              </Link>
            </div>
          </li>
          {/* <li className="nav-item dmenu dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link class="dropdown-item" to="pages/blog.html">
                    Blog
                  </Link>
                  <div>
                    <Link className="dropdown-item" to="pages/blog-single.html">
                      Blog Single
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="pages/blog-category.html"
                    >
                      Blog Category
                    </Link>
                    <Link className="dropdown-item" to="pages/about.html">
                      About us
                    </Link>
                    <Link className="dropdown-item" to="pages/404error.html">
                      404 Error
                    </Link>
                    <Link className="dropdown-item" to="pages/contact.html">
                      Contact
                    </Link>
                  </div>
                </div>
              </li> */}

          <li className="nav-item dropdown megamenu-li dmenu">
            <Link
              className="nav-link dropdown-toggle"
              to="/grocery/Shop"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              All Services
            </Link>
            <div
              className="dropdown-menu megamenu sm-menu border-top"
              aria-labelledby="dropdown01"
            >
              <div className="row">
                <div className="col-sm-6 col-lg-3 border-right mb-4">
                  <div>
                    <h6 className="text-primary ps-3">
                      Dairy, Bread &amp; Eggs
                    </h6>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Butter
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Milk Drinks
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Curd &amp; Yogurt
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Eggs
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Buns &amp; Bakery
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Cheese
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Condensed Milk
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Dairy Products
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 border-right mb-4">
                  <div>
                    <h6 className="text-primary ps-3">
                      Breakfast &amp; Instant Food
                    </h6>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Breakfast Cereal
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      {" "}
                      Noodles, Pasta &amp; Soup
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Frozen Veg Snacks
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      {" "}
                      Frozen Non-Veg Snacks
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      {" "}
                      Vermicelli
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      {" "}
                      Instant Mixes
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      {" "}
                      Batter
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      {" "}
                      Fruit and Juices
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div>
                    <h6 className="text-primary ps-3">
                      Cold Drinks &amp; Juices
                    </h6>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Soft Drinks
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Fruit Juices
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Coldpress
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Water &amp; Ice Cubes
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Soda &amp; Mixers
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Health Drinks
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Herbal Drinks
                    </Link>
                    <Link className="dropdown-item" to="/grocery/Shop">
                      Milk Drinks
                    </Link>
                  </div>
                </div>

                {/* <div className="row"> */}
                <div className="col-sm-6 col-lg-3 border-right mb-4">
                  <div className="card border-0">
                    <img
                      src={menubanner}
                      style={{ width: "90%" }}
                      alt="eCommerce HTML Template"
                      className="img-fluid rounded-3"
                    />
                    <div className="position-absolute ps-6 mt-8">
                      <h5 className=" mb-0 ">
                        Dont miss this <br />
                        offer today.
                      </h5>
                      <Link
                        to="/Shop"
                        className="btn btn-primary btn-sm mt-3"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </li>

          <li className="nav-item dmenu dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to=""
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Account
            </Link>
            <div
              className="dropdown-menu sm-menu"
              aria-labelledby="navbarDropdown"
            >
              <div>
                <div>
                  <Link className="dropdown-item" to="/grocery/MyAccountSignIn">
                    Sign in
                  </Link>
                  <Link className="dropdown-item" to="/grocery/MyAccountSignUp">
                    Signup
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/MyAccountForgetPassword"
                  >
                    Forgot Password
                  </Link>
                  <Link className="dropdown-item" to="/grocery/MyAccountOrder">
                    Orders
                  </Link>
                  <Link className="dropdown-item" to="/grocery/MyAccountSetting">
                    Settings
                  </Link>
                  <Link className="dropdown-item" to="/grocery/MyAccountAddress">
                    Address
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/grocery/MyAcconutPaymentMethod"
                  >
                    Payment Method
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/grocery/MyAcconutNotification"
                  >
                    Notification
                  </Link>
                </div>
              </div>
            </div>
          </li>
          {/* <li className="nav-item">
                <Link className="nav-link" to="">
                  Contact us
                </Link>
              </li> */}
        </ul>
      </div>
      {/* <div className="col-md-2 col-xxl-1 text-end d-none d-lg-block">
            
          </div> */}
    </div>
      </nav >
  <>
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="userModal"
        tabIndex={-1}
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email address"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    required
                  />
                  <small className="form-text">
                    By Signup, you agree to our{" "}
                    <Link to="#!">Terms of Service</Link> &amp;{" "}
                    <Link to="#!">Privacy Policy</Link>
                  </small>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              Already have an account? <Link to="/grocery/MyAccountSignIn">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Shop Cart */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header border-bottom">
          <div className="text-start">
            <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
              Shop Cart
            </h5>
            <small>Location in 382480</small>
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="alert alert-danger" role="alert">
            You’ve got FREE delivery. Start checkout now!
          </div>
          <div>
            <div className="py-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item py-3 px-0 border-top">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <img
                        src={productimage1}
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">Organic Banana</h6>
                      <span>
                        <small className="text-muted">.98 / lb</small>
                      </span>
                      <div className="mt-2 small">
                        {" "}
                        <Link to="#!" className="text-decoration-none">
                          {" "}
                          <span className="me-1">
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
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          Remove
                        </Link>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group  flex-nowrap justify-content-center  ">
                        <input
                          type="button"
                          defaultValue="-"
                          className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step={1}
                          max={10}
                          defaultValue={1}
                          name="quantity"
                          className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-2 text-end">
                      <span className="fw-bold">$35.00</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item py-3 px-0">
                  <div className="row row align-items-center">
                    <div className="col-2">
                      <img
                        src={productimage2}
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">Fresh Garlic, 250g</h6>
                      <span>
                        <small className="text-muted">250g</small>
                      </span>
                      <div className="mt-2 small">
                        {" "}
                        <Link to="#!" className="text-decoration-none">
                          {" "}
                          <span className="me-1">
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
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          Remove
                        </Link>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group  flex-nowrap justify-content-center  ">
                        <input
                          type="button"
                          defaultValue="-"
                          className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step={1}
                          max={10}
                          defaultValue={1}
                          name="quantity"
                          className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-2 text-end">
                      <span className="fw-bold">$20.97</span>
                      <span className="text-decoration-line-through text-muted small">
                        $26.97
                      </span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item py-3 px-0">
                  <div className="row row align-items-center">
                    <div className="col-2">
                      <img
                        src={productimage3}
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">Fresh Onion, 1kg</h6>
                      <span>
                        <small className="text-muted">1 kg</small>
                      </span>
                      <div className="mt-2 small">
                        {" "}
                        <Link to="#!" className="text-decoration-none">
                          {" "}
                          <span className="me-1">
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
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          Remove
                        </Link>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group  flex-nowrap justify-content-center  ">
                        <input
                          type="button"
                          defaultValue="-"
                          className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step={1}
                          max={10}
                          defaultValue={1}
                          name="quantity"
                          className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-2 text-end">
                      <span className="fw-bold">$25.00</span>
                      <span className="text-decoration-line-through text-muted small">
                        $45.00
                      </span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item py-3 px-0">
                  <div className="row row align-items-center">
                    <div className="col-2">
                      <img
                        src={productimage4}
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">Fresh Ginger</h6>
                      <span>
                        <small className="text-muted">250g</small>
                      </span>
                      <div className="mt-2 small">
                        {" "}
                        <Link to="#!" className="text-decoration-none">
                          {" "}
                          <span className="me-1">
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
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          Remove
                        </Link>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group  flex-nowrap justify-content-center  ">
                        <input
                          type="button"
                          defaultValue="-"
                          className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step={1}
                          max={10}
                          defaultValue={1}
                          name="quantity"
                          className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-2 text-end">
                      <span className="fw-bold">$39.87</span>
                      <span className="text-decoration-line-through text-muted small">
                        $45.00
                      </span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item py-3 px-0 border-bottom">
                  <div className="row row align-items-center">
                    <div className="col-2">
                      <img
                        src={productimage5}
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">
                        Apple Royal Gala, 4 Pieces Box
                      </h6>
                      <span>
                        <small className="text-muted">4 Apple</small>
                      </span>
                      <div className="mt-2 small">
                        {" "}
                        <Link to="#!" className="text-decoration-none">
                          {" "}
                          <span className="me-1">
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
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          Remove
                        </Link>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group  flex-nowrap justify-content-center  ">
                        <input
                          type="button"
                          defaultValue="-"
                          className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step={1}
                          max={10}
                          defaultValue={1}
                          name="quantity"
                          className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-2 text-end">
                      <span className="fw-bold">$39.87</span>
                      <span className="text-decoration-line-through text-muted small">
                        $45.00
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="d-grid">
              <button
                className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                type="submit"
              >
                {" "}
                Go to Checkout <span className="fw-bold">$120.00</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="locationModal"
        tabIndex={-1}
        aria-labelledby="locationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-6">
              <div className="d-flex justify-content-between align-items-start ">
                <div>
                  <h5 className="mb-1" id="locationModalLabel">
                    Choose your Delivery Location
                  </h5>
                  <p className="mb-0 small">
                    Enter your address and we will specify the offer you
                    area.{" "}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="my-5">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search your area"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="mb-0">Select Location</h6>
                <Link
                  to="#"
                  className="btn btn-outline-gray-400 text-muted btn-sm"
                >
                  Clear All
                </Link>
              </div>
              <div>
                <div data-simplebar style={{ height: 300 }}>
                  <div className="list-group list-group-flush">
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action active"
                    >
                      <span>Alabama</span>
                      <span>Min:$20</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Alaska</span>
                      <span>Min:$30</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Arizona</span>
                      <span>Min:$50</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>California</span>
                      <span>Min:$29</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Colorado</span>
                      <span>Min:$80</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Florida</span>
                      <span>Min:$90</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Arizona</span>
                      <span>Min:$50</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>California</span>
                      <span>Min:$29</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Colorado</span>
                      <span>Min:$80</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Florida</span>
                      <span>Min:$90</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    </div >
  );
};

export default Header;
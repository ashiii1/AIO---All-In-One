import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import productimg1 from "../../images/product-img-1.jpg";
import productimg2 from "../../images/product-img-2.jpg";
import productimg3 from "../../images/product-img-3.jpg";
import productimg4 from "../../images/product-img-4.jpg";
import productimg5 from "../../images/product-img-5.jpg";
import productimg6 from "../../images/product-img-6.jpg";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";

const MyAccountOrder = () => {
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  return (
    <div>
       <>
            <ScrollToTop/>
            </>
      <>
        {/* section */}
        <section>
          <div className="container">
            {/* row */}
            <div className="row">
              {/* col */}

              {/* <div> */}
              <div className="col-12">
                <div className="p-6 d-flex justify-content-between align-items-center d-md-none">
                  {/* heading */}
                  <h3 className="fs-5 mb-0">Account Setting</h3>
                  {/* button */}
                  <button
                    className="btn btn-outline-gray-400 text-muted d-md-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasAccount"
                    aria-controls="offcanvasAccount"
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
              </div>
              {/* col */}
              <div className="col-lg-3 col-md-4 col-12 border-end  d-none d-md-block">
                <div className="pt-10 pe-lg-10">
                  {/* nav */}
                  <ul className="nav flex-column nav-pills nav-pills-dark">
                    {/* nav item */}
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/MyAccountOrder"
                      >
                        <i className="fas fa-shopping-bag me-2" />
                        Your Orders
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/MyAccountSetting">
                        <i className="fas fa-cog me-2" />
                        Settings
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/MyAccountAddress">
                        <i className="fas fa-map-marker-alt me-2" />
                        Address
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/MyAcconutPaymentMethod">
                        <i className="fas fa-credit-card me-2" />
                        Payment Method
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/MyAcconutNotification">
                        <i className="fas fa-bell me-2" />
                        Notification
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <hr />
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link " to="/Grocery-react/">
                        <i className="fas fa-sign-out-alt me-2" />
                        Log out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* </div> */}

              <div className="col-lg-9 col-md-8 col-12">
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
                      <div className="p-6 p-lg-10">
                        {/* heading */}
                        <h2 className="mb-6">Your Orders</h2>
                        <div className="table-responsive border-0">
                          {/* Table */}
                          <table className="table mb-0 text-nowrap">
                            {/* Table Head */}
                            <thead className="table-light">
                              <tr>
                                <th className="border-0">&nbsp;</th>
                                <th className="border-0">Product</th>
                                <th className="border-0">Order</th>
                                <th className="border-0">Date</th>
                                <th className="border-0">Items</th>
                                <th className="border-0">Status</th>
                                <th className="border-0">Amount</th>
                                <th className="border-0" />
                              </tr>
                            </thead>
                            <tbody>
                              {/* Table body */}
                              <tr>
                                <td className="align-middle border-top-0 w-0">
                                  <Link to="#">
                                    {" "}
                                    <img
                                      src={productimg1}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link
                                    to="#"
                                    className="fw-semi-bold text-inherit"
                                  >
                                    <h6 className="mb-0">
                                      Haldirams Nagpur Aloo Bhujia
                                    </h6>
                                  </Link>
                                  <span>
                                    <small className="text-muted">400g</small>
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    #14899
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  March 5, 2023
                                </td>
                                <td className="align-middle border-top-0">1</td>
                                <td className="align-middle border-top-0">
                                  <span className="badge bg-warning">
                                    Processing
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  $15.00
                                </td>
                                <td className="text-muted align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <i className="feather-icon icon-eye" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle border-top-0 w-0">
                                  <Link to="#">
                                    {" "}
                                    <img
                                      src={productimg2}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link
                                    to="#"
                                    className="fw-semi-bold text-inherit"
                                  >
                                    <h6 className="mb-0">
                                      Nutri Choise Biscuit
                                    </h6>
                                  </Link>
                                  <span>
                                    <small className="text-muted">2 Pkt</small>
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    #14658
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  July 9, 2023
                                </td>
                                <td className="align-middle border-top-0">2</td>
                                <td className="align-middle border-top-0">
                                  <span className="badge bg-success">
                                    Completed
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  $45.00
                                </td>
                                <td className="text-muted align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <i className="feather-icon icon-eye" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle border-top-0 w-0">
                                  <Link to="#">
                                    {" "}
                                    <img
                                      src={productimg3}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <h6 className="mb-0">
                                      Cadbury Dairy Milk 5 Star Bites{" "}
                                    </h6>
                                    <span>
                                      <small className="text-muted">
                                        202 g
                                      </small>
                                    </span>
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    #13778
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  Oct 03, 2023
                                </td>
                                <td className="align-middle border-top-0">4</td>
                                <td className="align-middle border-top-0">
                                  <span className="badge bg-success">
                                    Completed
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  $99.00
                                </td>
                                <td className="text-muted align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <i className="feather-icon icon-eye" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle border-top-0 w-0">
                                  <Link to="#">
                                    {" "}
                                    <img
                                      src={productimg4}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link
                                    to="#"
                                    className="fw-semi-bold text-inherit"
                                  >
                                    <h6 className="mb-0">
                                      Onion Flavour Potato{" "}
                                    </h6>
                                  </Link>
                                  <span>
                                    <small className="text-muted">100 g</small>
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    #13746
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  March 5, 2023
                                </td>
                                <td className="align-middle border-top-0">1</td>
                                <td className="align-middle border-top-0">
                                  <span className="badge bg-success">
                                    Completed
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  $12.00
                                </td>
                                <td className="text-muted align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <i className="feather-icon icon-eye" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle border-top-0 w-0">
                                  <Link to="#">
                                    {" "}
                                    <img
                                      src={productimg5}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link
                                    to="#"
                                    className="fw-semi-bold text-inherit"
                                  >
                                    <h6 className="mb-0">
                                      Salted Instant Popcorn{" "}
                                    </h6>
                                  </Link>
                                  <span>
                                    <small className="text-muted">500 g</small>
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    #13566
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  July 9, 2023
                                </td>
                                <td className="align-middle border-top-0">2</td>
                                <td className="align-middle border-top-0">
                                  <span className="badge bg-danger">
                                    Cancel
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  $6.00
                                </td>
                                <td className="text-muted align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <i className="feather-icon icon-eye" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle border-top-0 w-0">
                                  <Link to="#">
                                    {" "}
                                    <img
                                      src={productimg6}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link
                                    to="#"
                                    className="fw-semi-bold text-inherit"
                                  >
                                    <h6 className="mb-0">
                                      Blueberry Greek Yogurt{" "}
                                    </h6>
                                  </Link>
                                  <span>
                                    <small className="text-muted">500 g</small>
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    #12094
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  Oct 03, 2023
                                </td>
                                <td className="align-middle border-top-0">4</td>
                                <td className="align-middle border-top-0">
                                  <span className="badge bg-success">
                                    Completed
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  $18.00
                                </td>
                                <td className="text-muted align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <i className="feather-icon icon-eye" />
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <>
        {/* modal */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasAccount"
          aria-labelledby="offcanvasAccountLabel"
        >
          {/* offcanvas header */}
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasAccountLabel">
              My Account
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          {/* offcanvas body */}
          <div className="offcanvas-body">
            <ul className="nav flex-column nav-pills nav-pills-dark">
              {/* nav item */}
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/MyAccountOrder"
                >
                  <i className="fas fa-shopping-bag me-2" />
                  Your Orders
                </a>
              </li>
              {/* nav item */}
              <li className="nav-item">
                <a className="nav-link " href="/MyAccountSetting">
                  <i className="fas fa-cog me-2" />
                  Settings
                </a>
              </li>
              {/* nav item */}
              <li className="nav-item">
                <a className="nav-link" href="/MyAccountAddress">
                  <i className="fas fa-map-marker-alt me-2" />
                  Address
                </a>
              </li>
              {/* nav item */}
              <li className="nav-item">
                <a className="nav-link" href="/MyAcconutPaymentMethod">
                  <i className="fas fa-credit-card me-2" />
                  Payment Method
                </a>
              </li>
              {/* nav item */}
              <li className="nav-item">
                <a className="nav-link" href="/MyAcconutNotification">
                  <i className="fas fa-bell me-2" />
                  Notification
                </a>
              </li>
            </ul>
            <hr className="my-6" />
            <div>
              {/* nav  */}
              <ul className="nav flex-column nav-pills nav-pills-dark">
                {/* nav item */}
                <li className="nav-item">
                  <a className="nav-link " href="/Grocery-react/">
                    <i className="fas fa-sign-out-alt me-2" />
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyAccountOrder;

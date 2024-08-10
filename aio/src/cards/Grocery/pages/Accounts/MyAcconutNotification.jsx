import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";

const MyAcconutNotification = () => {
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
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* col */}
              <div className="col-12">
                {/* text */}
                <div className="p-6 d-flex justify-content-between align-items-center d-md-none">
                  {/* heading */}
                  <h3 className="fs-5 mb-0">Account Setting</h3>
                  {/* btn */}
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
                        className="nav-link "
                        aria-current="page"
                        to="/MyAccountOrder"
                      >
                        <i className="fas fa-shopping-bag me-2" />
                        Your Orders
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link " to="/MyAccountSetting">
                        <i className="fas fa-cog me-2" />
                        Settings
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link " to="/MyAccountAddress">
                        <i className="fas fa-map-marker-alt me-2" />
                        Address
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link " to="/MyAcconutPaymentMethod">
                        <i className="fas fa-credit-card me-2" />
                        Payment Method
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        to="/MyAcconutNotification"
                      >
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
                      <Link className="nav-link " to="../index.html">
                        <i className="fas fa-sign-out-alt me-2" />
                        Log out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

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
                        <div className="mb-6">
                          {/* heading */}
                          <h2 className="mb-0">Notification settings</h2>
                        </div>
                        <div className="mb-10">
                          {/* text */}
                          <div className="border-bottom pb-3 mb-5">
                            <h5 className="mb-0">Email Notifications</h5>
                          </div>
                          {/* text */}
                          <div className="d-flex justify-content-between align-items-center mb-6">
                            <div>
                              <h6 className="mb-1">Weekly Notification</h6>
                              <p className="mb-0 ">
                                Various versions have evolved over the years,
                                sometimes by accident, sometimes on purpose .
                              </p>
                            </div>
                            {/* checkbox */}
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckDefault"
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            {/* text */}
                            <div>
                              <h6 className="mb-1">Account Summary</h6>
                              <p className="mb-0 pe-12 ">
                                Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames ac turpis eguris eu
                                sollicitudin massa. Nulla ipsum odio, aliquam in
                                odio et, fermentum blandit nulla.
                              </p>
                            </div>
                            {/* form checkbox */}
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckChecked"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-10">
                          {/* heading */}
                          <div className="border-bottom pb-3 mb-5">
                            <h5 className="mb-0">Order updates</h5>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-6">
                            <div>
                              {/* heading */}
                              <h6 className="mb-0">Text messages</h6>
                            </div>
                            {/* form checkbox */}
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckDefault2"
                              />
                            </div>
                          </div>
                          {/* text */}
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="mb-1">Call before checkout</h6>
                              <p className="mb-0 ">
                                We will only call if there are pending changes
                              </p>
                            </div>
                            {/* form checkbox */}
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked2"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckChecked2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          {/* text */}
                          <div className="border-bottom pb-3 mb-5">
                            <h5 className="mb-0">Website Notification</h5>
                          </div>
                          <div>
                            {/* form checkbox */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="flexCheckFollower"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckFollower"
                              >
                                New Follower
                              </label>
                            </div>
                            {/* form checkbox */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="flexCheckPost"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckPost"
                              >
                                Post Like
                              </label>
                            </div>
                            {/* form checkbox */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="flexCheckPosted"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckPosted"
                              >
                                Someone you followed posted
                              </label>
                            </div>
                            {/* form checkbox */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="flexCheckCollection"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckCollection"
                              >
                                Post added to collection
                              </label>
                            </div>
                            {/* form checkbox */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="flexCheckOrder"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckOrder"
                              >
                                Order Delivery
                              </label>
                            </div>
                          </div>
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

export default MyAcconutNotification;

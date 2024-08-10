import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";

const MyAcconutSetting = () => {
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
        <div>
          {/* section */}
          <section>
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row">
                {/* col */}
                <div className="col-12">
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
                    {/* nav item */}
                    <ul className="nav flex-column nav-pills nav-pills-dark">
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
                        <Link
                          className="nav-link active"
                          to="/MyAccountSetting"
                        >
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
                            <h2 className="mb-0">Account Setting</h2>
                          </div>
                          <div>
                            {/* heading */}
                            <h5 className="mb-4">Account details</h5>
                            <div className="row">
                              <div className="col-lg-5">
                                {/* form */}
                                <form>
                                  {/* input */}
                                  <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Nigam Mishra"
                                    />
                                  </div>
                                  {/* input */}
                                  <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      placeholder="example@gmail.com"
                                    />
                                  </div>
                                  {/* input */}
                                  <div className="mb-5">
                                    <label className="form-label">Phone</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Phone number"
                                    />
                                  </div>
                                  {/* button */}
                                  <div className="mb-3">
                                    <button className="btn btn-primary">
                                      Save Details
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <hr className="my-10" />
                          <div className="pe-lg-14">
                            {/* heading */}
                            <h5 className="mb-4">Password</h5>
                            <form className=" row row-cols-1 row-cols-lg-2">
                              {/* input */}
                              <div className="mb-3 col">
                                <label className="form-label">
                                  New Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="**********"
                                />
                              </div>
                              {/* input */}
                              <div className="mb-3 col">
                                <label className="form-label">
                                  Current Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="**********"
                                />
                              </div>
                              {/* input */}
                              <div className="col-12">
                                <p className="mb-4">
                                  Can’t remember your current password?
                                  <Link to="#"> Reset your password.</Link>
                                </p>
                                <Link to="#" className="btn btn-primary">
                                  Save Password
                                </Link>
                              </div>
                            </form>
                          </div>
                          <hr className="my-10" />
                          <div>
                            {/* heading */}
                            <h5 className="mb-4">Delete Account</h5>
                            <p className="mb-2">
                              Would you like to delete your account?
                            </p>
                            <p className="mb-5">
                              This account contain 12 orders, Deleting your
                              account will remove all the order details
                              associated with it.
                            </p>
                            {/* btn */}
                            <Link to="#" className="btn btn-outline-danger">
                              I want to delete my account
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
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
        </div>
      </>
    </div>
  );
};

export default MyAcconutSetting;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";

const MyAccountAddress = () => {
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
                        {/* nav link */}
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
                        <Link
                          className="nav-link active"
                          to="/MyAccountAddress"
                        >
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
                          <div className="d-flex justify-content-between mb-6">
                            {/* heading */}
                            <h2 className="mb-0">Address</h2>
                            {/* button */}
                            <Link
                              to="#"
                              className="btn btn-outline-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#addAddressModal"
                            >
                              Add a new address{" "}
                            </Link>
                          </div>
                          <div className="row">
                            {/* col */}
                            <div className="col-lg-5 col-xxl-4 col-12 mb-4">
                              {/* form */}
                              <div className="border p-6 rounded-3">
                                <div className="form-check mb-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="homeRadio"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label text-dark fw-semi-bold"
                                    htmlFor="homeRadio"
                                  >
                                    Home
                                  </label>
                                </div>
                                {/* address */}
                                <p className="mb-6">
                                  Jitu Chauhan
                                  <br />
                                  4450 North Avenue Oakland, <br />
                                  Nebraska, United States,
                                  <br />
                                  402-776-1106
                                </p>
                                {/* btn */}
                                <Link to="#" className="btn btn-info btn-sm">
                                  Default address
                                </Link>
                                <div className="mt-4">
                                  <Link to="#" className="text-inherit">
                                    Edit{" "}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="text-danger ms-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
                                  >
                                    Delete
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-5 col-xxl-4 col-12 mb-4">
                              {/* input */}
                              <div className="border p-6 rounded-3">
                                <div className="form-check mb-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="officeRadio"
                                  />
                                  <label
                                    className="form-check-label text-dark fw-semi-bold"
                                    htmlFor="officeRadio"
                                  >
                                    Office
                                  </label>
                                </div>
                                {/* nav item */}
                                <p className="mb-6">
                                  Nitu Chauhan
                                  <br />
                                  3853 Coal Road <br />
                                  Tannersville, Pennsylvania, 18372, United
                                  States <br />
                                  402-776-1106
                                </p>
                                {/* link */}
                                <Link to="#" className="link-primary">
                                  Set as Default
                                </Link>
                                <div className="mt-4">
                                  <Link to="#" className="text-inherit">
                                    Edit{" "}
                                  </Link>
                                  {/* btn */}
                                  <Link
                                    to="#"
                                    className="text-danger ms-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
                                  >
                                    Delete
                                  </Link>
                                </div>
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
          {/* Modal */}
          <div
            className="modal fade"
            id="deleteModal"
            tabIndex={-1}
            aria-labelledby="deleteModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              {/* modal content */}
              <div className="modal-content">
                {/* modal header */}
                <div className="modal-header">
                  <h5 className="modal-title" id="deleteModalLabel">
                    Delete address
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                {/* modal body */}
                <div className="modal-body">
                  <h6>Are you sure you want to delete this address?</h6>
                  <p className="mb-6">
                    Jitu Chauhan
                    <br />
                    4450 North Avenue Oakland, <br />
                    Nebraska, United States,
                    <br />
                    402-776-1106
                  </p>
                </div>
                {/* modal footer */}
                <div className="modal-footer">
                  {/* btn */}
                  <button
                    type="button"
                    className="btn btn-outline-gray-400"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal */}
          <div
            className="modal fade"
            id="addAddressModal"
            tabIndex={-1}
            aria-labelledby="addAddressModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              {/* modal content */}
              <div className="modal-content">
                {/* modal body */}
                <div className="modal-body p-6">
                  <div className="d-flex justify-content-between mb-5">
                    <div>
                      {/* heading */}
                      <h5 className="h6 mb-1" id="addAddressModalLabel">
                        New Shipping Address
                      </h5>
                      <p className="small mb-0">
                        Add new shipping address for your order delivery.
                      </p>
                    </div>
                    <div>
                      {/* button */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  {/* row */}
                  <div className="row g-3">
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        aria-label="First name"
                        required
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                        required
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 1"
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 2"
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* form select */}
                      <select className="form-select">
                        <option selected> India</option>
                        <option value={1}>UK</option>
                        <option value={2}>USA</option>
                        <option value={3}>UAE</option>
                      </select>
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* form select */}
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Gujarat</option>
                        <option value={1}>Northern Ireland</option>
                        <option value={2}> Alaska</option>
                        <option value={3}>Abu Dhabi</option>
                      </select>
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip Code"
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Business Name"
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      {/* form check */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Set as Default
                        </label>
                      </div>
                    </div>
                    {/* col */}
                    <div className="col-12 text-end">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button className="btn btn-primary" type="button">
                        Save Address
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default MyAccountAddress;

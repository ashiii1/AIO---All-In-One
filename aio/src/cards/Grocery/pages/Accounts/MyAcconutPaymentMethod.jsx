import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import amazonpay from "../../images/amazonpay.svg";
import american from "../../images/american-express.svg";
import mastercard from "../../images/mastercard.svg";
import paypal from "../../images/paypal.svg";
import visa from "../../images/visa.svg";
import discover from "../../images/discover.svg";
import ScrollToTop from "../ScrollToTop";

const MyAcconutPaymentMethod = () => {
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
                        <Link
                          className="nav-link active"
                          to="/MyAcconutPaymentMethod"
                        >
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
                      </li>{" "}
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
                          {/* heading */}
                          <div className="d-flex justify-content-between mb-6 align-items-center">
                            <h2 className="mb-0">Payment Methods</h2>
                            <Link
                              to="#"
                              className="btn btn-outline-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#paymentModal"
                            >
                              Add Payment{" "}
                            </Link>
                          </div>
                          <ul className="list-group list-group-flush">
                            {/* List group item */}
                            <li className="list-group-item py-5 px-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  {/* img */}
                                  <img src={visa} alt="payment" />
                                  {/* text */}
                                  <div className="ms-4">
                                    <h5 className="mb-0 h6 h6">**** 1234</h5>
                                    <p className="mb-0 small">
                                      Expires in 10/2023
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  {/* button */}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 disabled btn-sm"
                                  >
                                    Remove
                                  </Link>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0 py-5">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  {/* img */}
                                  <img
                                    src={mastercard}
                                    alt="payment"
                                    className="me-3"
                                  />
                                  <div>
                                    <h5 className="mb-0 h6">
                                      Mastercard ending in 1234
                                    </h5>
                                    <p className="mb-0 small">
                                      Expires in 03/2026
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  {/* button*/}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 text-muted btn-sm"
                                  >
                                    Remove
                                  </Link>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0 py-5">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  {/* img */}
                                  <img
                                    src={discover}
                                    alt="payment"
                                    className="me-3"
                                  />
                                  <div>
                                    {/* text */}
                                    <h5 className="mb-0 h6">
                                      Discover ending in 1234
                                    </h5>
                                    <p className="mb-0 small">
                                      Expires in 07/2020{" "}
                                      <span className="badge bg-warning text-dark">
                                        {" "}
                                        This card is expired.
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  {/* btn */}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 text-muted btn-sm"
                                  >
                                    Remove
                                  </Link>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0 py-5">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  {/* img */}
                                  <img
                                    src={amazonpay}
                                    alt="payment"
                                    className="me-3"
                                  />
                                  {/* text */}
                                  <div>
                                    <h5 className="mb-0 h6">
                                      American Express ending in 1234
                                    </h5>
                                    <p className="mb-0 small">
                                      Expires in 12/2021
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  {/* btn */}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 text-muted btn-sm"
                                  >
                                    Remove
                                  </Link>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0 py-5 border-bottom">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  {/* img */}
                                  <img
                                    src={paypal}
                                    alt="payment"
                                    className="me-3"
                                  />
                                  <div>
                                    {/* text */}
                                    <h5 className="mb-0 h6">
                                      Paypal Express ending in 1234
                                    </h5>
                                    <p className="mb-0 small">
                                      Expires in 10/2021
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  {/* btn */}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 text-muted btn-sm"
                                  >
                                    Remove
                                  </Link>
                                </div>
                              </div>
                            </li>
                          </ul>
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
          {/* Payment Modal */}
          <div
            className="modal fade"
            id="paymentModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="paymentModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-lg modal-dialog-centered"
              role="document"
            >
              {/* modal content */}
              <div className="modal-content">
                {/* modal header */}
                <div className="modal-header align-items-center d-flex">
                  <h5 className="modal-title" id="paymentModalLabel">
                    Add New Payment Method
                  </h5>
                  {/* button */}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                {/* Modal body */}
                <div className="modal-body">
                  <div>
                    {/* Form */}
                    <form className="row mb-4">
                      <div className="mb-3 col-12 col-md-12 mb-4">
                        <h5 className="mb-3">Credit / Debit card</h5>
                        {/* Radio button */}
                        <div className="d-inline-flex">
                          <div className="form-check me-2">
                            <input
                              type="radio"
                              id="paymentRadioOne"
                              name="paymentRadioOne"
                              className="form-check-input"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="paymentRadioOne"
                            >
                              <img src={american} alt="payment" />
                            </label>
                          </div>
                          {/* Radio button */}
                          <div className="form-check me-2">
                            <input
                              type="radio"
                              id="paymentRadioTwo"
                              name="paymentRadioOne"
                              className="form-check-input"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="paymentRadioTwo"
                            >
                              <img src={mastercard} alt="payment" />
                            </label>
                          </div>
                          {/* Radio button */}
                          <div className="form-check">
                            <input
                              type="radio"
                              id="paymentRadioFour"
                              name="paymentRadioOne"
                              className="form-check-input"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="paymentRadioFour"
                            >
                              <img src={visa} alt="payment" />
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* Name on card */}
                      <div className="mb-3 col-12 col-md-4">
                        <label htmlFor="nameoncard" className="form-label">
                          Name on card
                        </label>
                        <input
                          id="nameoncard"
                          type="text"
                          className="form-control"
                          name="nameoncard"
                          placeholder="Name"
                          required
                        />
                      </div>
                      {/* Month */}
                      <div className="mb-3 col-12 col-md-4">
                        <label className="form-label">Month</label>
                        <select className="form-select">
                          <option value>Month</option>
                          <option value="Jan">Jan</option>
                          <option value="Feb">Feb</option>
                          <option value="Mar">Mar</option>
                          <option value="Apr">Apr</option>
                          <option value="May">May</option>
                          <option value="June">June</option>
                          <option value="July">July</option>
                          <option value="Aug">Aug</option>
                          <option value="Sep">Sep</option>
                          <option value="Oct">Oct</option>
                          <option value="Nov">Nov</option>
                          <option value="Dec">Dec</option>
                        </select>
                      </div>
                      {/* Year */}
                      <div className="mb-3 col-12 col-md-4">
                        <label className="form-label">Year</label>
                        <select className="form-select">
                          <option value>Year</option>
                          <option value="June">2022</option>
                          <option value="July">2023</option>
                          <option value="August">2024</option>
                          <option value="Sep">2025</option>
                          <option value="Oct">2026</option>
                        </select>
                      </div>
                      {/* Card number */}
                      <div className="mb-3 col-md-8 col-12">
                        <label htmlFor="cc-mask" className="form-label">
                          Card Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-mask"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                          required
                        />
                      </div>
                      {/* CVV */}
                      <div className="mb-3 col-md-4 col-12">
                        <div className="mb-3">
                          <label htmlFor="cvv" className="form-label">
                            CVV Code
                            <i
                              className="feather-icon icon-help-circle ms-1"
                              data-bs-toggle="tooltip"
                              data-placement="top"
                              title="A 3 - digit number, typically printed on the back of a card."
                            />
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="cvv"
                            placeholder="xxx"
                            required
                          />
                        </div>
                      </div>
                      {/* Button */}
                      <div className="col-md-6 col-12">
                        <button className="btn btn-primary" type="submit">
                          Add New Card
                        </button>
                        <button
                          className="btn btn-outline-gray-400 text-muted"
                          type="button"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                    <span>
                      <strong>Note:</strong> that you can later remove your card
                      at the account setting page.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyAcconutPaymentMethod;

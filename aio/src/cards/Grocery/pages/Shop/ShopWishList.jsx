import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import productimage15 from '../../images/product-img-15.jpg'
import productimage16 from '../../images/product-img-16.jpg'
import productimage17 from '../../images/product-img-17.jpg'
import productimage18 from '../../images/product-img-18.jpg'
import productimage19 from '../../images/product-img-19.jpg'
import { MagnifyingGlass } from 'react-loader-spinner'
import ScrollToTop from "../ScrollToTop";

const ShopWishList = () => {


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
         
          {/* <MagnifyingGlass
  visible={true}
  height="100"
  width="100"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperclassName="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#000000"
  /> */}
        </div>
      ) : (
        <>
         <>
        <ScrollToTop/>
        </>
      <>
        {/* section */}
        <section className="my-14">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="offset-lg-1 col-lg-10">
                <div className="mb-8">
                  {/* heading */}
                  <h1 className="mb-1">My Wishlist</h1>
                  <p>There are 5 products in this wishlist.</p>
                </div>
                <div>
                  {/* table */}
                  <div className="table-responsive">
                    <table className="table text-nowrap">
                      <thead className="table-light">
                        <tr>
                          <th>
                            {/* form check */}
                            <div className="form-check">
                              {/* input */}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="chechboxOne"
                              />
                              {/* label */}
                              <label
                                className="form-check-label"
                                htmlFor="chechboxOne"
                              ></label>
                            </div>
                          </th>
                          <th />
                          <th>Product</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Actions</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="align-middle">
                            {/* form check */}
                            <div className="form-check">
                              {/* input */}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="chechboxTwo"
                              />
                              {/* label */}
                              <label
                                className="form-check-label"
                                htmlFor="chechboxTwo"
                              ></label>
                            </div>
                          </td>
                          <td className="align-middle">
                            <Link to="#">
                              <img
                                src={productimage18}
                                className="img-fluid icon-shape icon-xxl"
                                alt="product"
                              />
                            </Link>
                          </td>
                          <td className="align-middle">
                            <div>
                              <h5 className="fs-6 mb-0">
                                <Link to="#" className="text-inherit">
                                  Organic Banana
                                </Link>
                              </h5>
                              <small>$.98 / lb</small>
                            </div>
                          </td>
                          <td className="align-middle">$35.00</td>
                          <td className="align-middle">
                            <span className="badge bg-success">In Stock</span>
                          </td>
                          <td className="align-middle">
                            <div className="btn btn-primary btn-sm">
                              Add to Cart
                            </div>
                          </td>
                          <td className="align-middle text-center">
                            <Link
                              to="#"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i class="fas fa-trash-alt"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle">
                            {/* form check */}
                            <div className="form-check">
                              {/* input */}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="chechboxThree"
                              />
                              {/* label */}
                              <label
                                className="form-check-label"
                                htmlFor="chechboxThree"
                              ></label>
                            </div>
                          </td>
                          <td className="align-middle">
                            <Link to="#">
                              <img
                                src={productimage17}
                                className="img-fluid icon-shape icon-xxl"
                                alt="product"
                              />
                            </Link>
                          </td>
                          <td className="align-middle">
                            <div>
                              <h5 className="fs-6 mb-0">
                                <Link to="#" className="text-inherit">
                                  Fresh Kiwi
                                </Link>
                              </h5>
                              <small>4 no</small>
                            </div>
                          </td>
                          <td className="align-middle">$20.97</td>
                          <td className="align-middle">
                            <span className="badge bg-danger">
                              Out of Stock
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="btn btn-dark btn-sm">
                              Contact us
                            </div>
                          </td>
                          <td className="align-middle text-center">
                            <Link
                              to="#"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i class="fas fa-trash-alt"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle">
                            {/* form check */}
                            <div className="form-check">
                              {/* input */}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="chechboxFour"
                              />
                              {/* label */}
                              <label
                                className="form-check-label"
                                htmlFor="chechboxFour"
                              ></label>
                            </div>
                          </td>
                          <td className="align-middle">
                            <Link to="#">
                              <img
                                src={productimage16}
                                className="img-fluid icon-shape icon-xxl"
                                alt="product"
                              />
                            </Link>
                          </td>
                          <td className="align-middle">
                            <div>
                              <h5 className="fs-6 mb-0">
                                <Link to="#" className="text-inherit">
                                  Golden Pineapple
                                </Link>
                              </h5>
                              <small>2 no</small>
                            </div>
                          </td>
                          <td className="align-middle">$35.00</td>
                          <td className="align-middle">
                            <span className="badge bg-success">In Stock</span>
                          </td>
                          <td className="align-middle">
                            <div className="btn btn-primary btn-sm">
                              Add to Cart
                            </div>
                          </td>
                          <td className="align-middle text-center">
                            <Link
                              to="#"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i class="fas fa-trash-alt"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle">
                            {/* form check */}
                            <div className="form-check">
                              {/* input */}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="chechboxFive"
                              />
                              {/* label */}
                              <label
                                className="form-check-label"
                                htmlFor="chechboxFive"
                              ></label>
                            </div>
                          </td>
                          <td className="align-middle">
                            <Link to="#">
                              <img
                                src={productimage19}
                                className="img-fluid icon-shape icon-xxl"
                                alt="product"
                              />
                            </Link>
                          </td>
                          <td className="align-middle">
                            <div>
                              <h5 className="fs-6 mb-0">
                                <Link to="#" className="text-inherit">
                                  BeatRoot
                                </Link>
                              </h5>
                              <small>1 kg</small>
                            </div>
                          </td>
                          <td className="align-middle">$29.00</td>
                          <td className="align-middle">
                            <span className="badge bg-success">In Stock</span>
                          </td>
                          <td className="align-middle">
                            <div className="btn btn-primary btn-sm">
                              Add to Cart
                            </div>
                          </td>
                          <td className="align-middle text-center">
                            <Link
                              to="#"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i class="fas fa-trash-alt"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle">
                            {/* form check */}
                            <div className="form-check">
                              {/* input */}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="chechboxSix"
                              />
                              {/* label */}
                              <label
                                className="form-check-label"
                                htmlFor="chechboxSix"
                              ></label>
                            </div>
                          </td>
                          <td className="align-middle">
                            <Link to="#">
                              <img
                                src={productimage15}
                                className="img-fluid icon-shape icon-xxl"
                                alt="product"
                              />
                            </Link>
                          </td>
                          <td className="align-middle">
                            <div>
                              <h5 className="fs-6 mb-0">
                                <Link to="#" className="text-inherit">
                                  Fresh Apple
                                </Link>
                              </h5>
                              <small>2 kg</small>
                            </div>
                          </td>
                          <td className="align-middle">$70.00</td>
                          <td className="align-middle">
                            <span className="badge bg-success">In Stock</span>
                          </td>
                          <td className="align-middle">
                            <div className="btn btn-primary btn-sm">
                              Add to Cart
                            </div>
                          </td>
                          <td className="align-middle text-center">
                            <Link
                              to="#"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i class="fas fa-trash-alt"></i>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
export default ShopWishList;

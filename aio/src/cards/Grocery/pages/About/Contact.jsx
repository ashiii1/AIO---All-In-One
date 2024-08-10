import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";

const Contact = () => {
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
              {/* section */}
              <section className="my-lg-14 my-8">
                {/* container */}
                <div className="container">
                  <div className="row">
                    {/* col */}
                    <div className="offset-lg-2 col-lg-8 col-12">
                      <div className="mb-8">
                        {/* heading */}
                        <h1 className="h3">Retailer Inquiries</h1>
                        <p className="lead mb-0">
                          This form is for retailer inquiries only. For all
                          other customer or shopper support requests, please
                          visit the links below this form.
                        </p>
                      </div>
                      {/* form */}
                      <form className="row">
                        {/* input */}
                        <div className="col-md-6 mb-3">
                          <label className="form-label">
                            {" "}
                            First Name<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your First Name"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          {/* input */}
                          <label className="form-label">
                            {" "}
                            Last Name<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Last name"
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          {/* input */}
                          <label className="form-label">
                            {" "}
                            Company<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Company"
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          {/* input */}
                          <label className="form-label"> Title</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Title"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">
                            Email<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your First Name"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          {/* input */}
                          <label className="form-label"> Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Phone Number"
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          {/* input */}
                          <label className="form-label"> Comments</label>
                          <textarea
                            rows={3}
                            className="form-control"
                            placeholder="Additional Comments"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-md-12">
                          {/* btn */}
                          <Link to="#" className="btn btn-primary">
                            Submit
                          </Link>
                        </div>
                      </form>
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

export default Contact;

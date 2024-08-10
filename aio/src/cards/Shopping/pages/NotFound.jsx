import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const NotFound = () => {
  // const navigate = useNavigate()
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/")
  //   }, 5000)
  // },)

  return (
    <>
      <article id="notFound" className="mt-[140px] md:mt-[110px]">
      <h1 className="text-9xl">404</h1>
      <h2 className="text-7xl">Page Not Found</h2>
      <div className=" mt-10 p-[50px] mb-10">
      <NavLink to="/" className="text-7xl text-red-600 underline active:mt-1 active:ml-1">
        Back Home
      </NavLink>
      </div>
      </article>
    </>
  );
};

export default NotFound;

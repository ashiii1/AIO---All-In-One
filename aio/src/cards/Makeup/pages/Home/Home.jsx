import React from "react";
import Helmet from "../../components/shared/helmet/Helmet";
import Banner from "../../components/shared/banner/Banner";
import Services from "../../components/shared/services/Services";
import Timer from "../../components/shared/timer/Timer";
import Bestsellers from "../../components/shared/bestsellers/Bestsellers";
import NewArrivals from "../../components/shared/newArrivals/NewArrivals";


const Home = () => {
  return (
    <Helmet title={"Home"}>
      <Banner />
      <Services/>
      <NewArrivals />
      <Bestsellers />
      <Timer/>
    </Helmet>
  );
}

export default Home;
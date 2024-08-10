import Footer from "./Footer";
import Header from "./Header";
import Slides from "../layouts/Slides";

export const HomeLayout = () => {
  return (
    <>
      {/* homepage  */}
      <main className="mainn">
        {/* header section of home-page */}
        <Header />

        {/* products section of home-page*/}
        <Slides />

        {/* <!-- footer section --> */}
        <Footer />
      </main>
    </>
  );
};

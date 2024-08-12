import { twMerge } from "tailwind-merge";

import Footer from "../layouts/Footer";

const ProductList = ({ headingTitle, headingClass, children }) => {
  const productListHeadingStyle = twMerge(
    "block mx-auto text-center text-5xl sm:text-4xl font-primary font-medium capitalize mt-10 mb-20 xs:mb-12",
    headingClass
  );

  return (
    <>
      <main className=" full-bleedss inverseee mt-1\6 pt-6 pb-24">
        <h1 className={productListHeadingStyle}>{headingTitle}</h1>
        {children}
      </main>
      <div className="absolute right-0 left-0 mx-0 max-w-full">
        <Footer className="sm:max-w-full" />
      </div>
    </>
  );
};

export default ProductList;

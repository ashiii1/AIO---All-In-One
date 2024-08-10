import { useStateContext } from "../contexts/StateContext";
import ProductList from "../components/ProductList";
import ProductCategory from "../components/ProductCategory";
import ProductItem from "../components/ui/ProductItem";
import { GridLayout } from "../layouts/GridLayout";
// import ProductPreviewView from "../components/ui/ProductPreviewView";
// import bedRoom from "../assets/images/images/loftstyle-bedroom-with-throw-pillows.jpg";
// import hero2 from "../assets/images/desktop-image-hero-2.jpg";
// import hero3 from "../assets/images/desktop-image-hero-3.jpg";
// import darkRoom from "../assets/images/image-about-dark.jpg";
// import lightRoom from "../assets/images/image-about-light.jpg";

const Shops = () => {
  const { foundItem } = useStateContext();

  return (
    <>
      <ProductCategory />
      {/* <ProductList headingTitle="Our Collections"> */}
      <ProductList headingTitle="Featured Items" headingClass="mb-0 xs:mb-0">
        <p className="mb-20 xs:mb-12 text-lg text-primary-veryDarkGray text-center">
          Must-have pieces selected every month
        </p>
        <GridLayout className="grid grid-cols-8 lg:grid-cols-6 justify-items-center lg:justify-center">
          <ProductItem searchItem={foundItem} />
        </GridLayout>
      </ProductList>
      {/* Featured Product */}
      {/* <ProductPreviewView
        productDetail={{
          id: 1,
          imageUrl: bedRoom,
          imageVariants: [bedRoom, hero2, hero3, lightRoom, darkRoom],

          name: "Fancy Bed Room",
          url: "entryway",
          description:
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
          price: 2300.99,
          statusBadge: "New",
          quantity: 1,
          inCart: false,
          inWishlist: false,
        }}
      /> */}
    </>
  );
};

export default Shops;

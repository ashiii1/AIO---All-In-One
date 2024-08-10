// import { NavLink } from "react-router-dom";
// import { useState, memo } from "react";

// import CurrencyFormatter from "../../utils/currencyFormatter";
// import hoverPopupButtons from "./HoverPopupButtons";

// const ProductItem = ({ searchItem }) => {
//   const [hoveredItemId, setHoveredItemId] = useState(null);

//   function handleMouseEnter(productId) {
//     setHoveredItemId(productId);
//   }
//   function handleMouseLeave() {
//     setHoveredItemId(null);
//   }

//   return searchItem.map((productDetail) => {
//     const isHovered = hoveredItemId === productDetail.id;

//     // memoized hovered navLinks
//     const MemoizedNavLink = memo(
//       () => (
//         <NavLink
//           to={`./${productDetail.id}`}
//           key={productDetail.id}
//           className="relative group"
//           onMouseEnter={() => handleMouseEnter(productDetail.id)}
//           onMouseLeave={() => handleMouseLeave()}
//         >
//           <figure className="w-full h-full overflow-hidden">
//             <img
//               src={productDetail.imageUrl}
//               alt={productDetail.name}
//               // loading="lazy"
//               className={`z-10 object-cover block w-full max-w-full h-56 transition-all ease-out ${
//                 isHovered ? "group-hover:scale-105" : ""
//               }`}
//             />
//           </figure>
//         </NavLink>
//       ),
//       [isHovered]
//     );

//     return (
//       <div
//         key={productDetail.id}
//         className="h-20 flex flex-col max-w-xs sm:col-span-8 md:col-span-3 lg:col-span-2 col-span-2 "
//       >
//         <MemoizedNavLink />

//         <div className="relative bg-primary-white space-y-1 py-4 flex flex-col items-center">
//           <span className="font-semibold text-sm text-primary-darkGray">
//             {CurrencyFormatter("en-US", productDetail.price)}
//           </span>
//           <figcaption className="text-center font-normal text-lg capitalize  max-w-[20ch]">
//             {productDetail.name}
//           </figcaption>
//           {/* reaction status of the product */}
//           {isHovered && hoverPopupButtons(productDetail)}
//         </div>
//       </div>
//     );
//   });
// };
// export default ProductItem;
import { NavLink } from "react-router-dom";
import { useState, memo } from "react";
import CurrencyFormatter from "../../utils/currencyFormatter";
import hoverPopupButtons from "./HoverPopupButtons";

const ProductItem = ({ searchItem }) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  function handleMouseEnter(productId) {
    setHoveredItemId(productId);
  }
  function handleMouseLeave() {
    setHoveredItemId(null);
  }

  // Define MemoizedNavLink as a separate component with a display name
  const MemoizedNavLink = memo(function MemoizedNavLink({ productDetail, isHovered }) {
    return (
      <NavLink
        to={`./${productDetail.id}`}
        key={productDetail.id}
        className="relative group"
        onMouseEnter={() => handleMouseEnter(productDetail.id)}
        onMouseLeave={() => handleMouseLeave()}
      >
        <figure className="w-full h-full overflow-hidden">
          <img
            src={productDetail.imageUrl}
            alt={productDetail.name}
            className={`z-10 object-cover block w-full max-w-full h-56 transition-all ease-out ${
              isHovered ? "group-hover:scale-105" : ""
            }`}
          />
        </figure>
      </NavLink>
    );
  });

  return searchItem.map((productDetail) => {
    const isHovered = hoveredItemId === productDetail.id;

    return (
      <div
        key={productDetail.id}
        className="h-20 flex flex-col max-w-xs sm:col-span-8 md:col-span-3 lg:col-span-2 col-span-2"
      >
        <MemoizedNavLink productDetail={productDetail} isHovered={isHovered} />

        <div className="relative bg-primary-white space-y-1 py-4 flex flex-col items-center">
          <span className="font-semibold text-sm text-primary-darkGray">
            {CurrencyFormatter("en-US", productDetail.price)}
          </span>
          <figcaption className="text-center font-normal text-lg capitalize max-w-[20ch]">
            {productDetail.name}
          </figcaption>
          {/* reaction status of the product */}
          {isHovered && hoverPopupButtons(productDetail)}
        </div>
      </div>
    );
  });
};
export default ProductItem;

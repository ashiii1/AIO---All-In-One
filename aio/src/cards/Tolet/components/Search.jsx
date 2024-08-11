// // // import React, { useContext } from 'react';

// // // // import components
// // // import CountryDropdown from './CountryDropdown';
// // // import PropertyDropdown from './PropertyDropdown';
// // // import PriceRangeDropdown from './PriceRangeDropdown';

// // // // import context
// // // import { HouseContext } from './HouseContext';

// // // // import icon
// // // import { RiSearch2Line } from 'react-icons/ri';

// // // const Search = () => {
// // //   const { handleClick } = useContext(HouseContext);
// // //   return (
// // //     <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
// // //       <CountryDropdown />
// // //       <PropertyDropdown />
// // //       <PriceRangeDropdown />
// // //       <button
// // //         onClick={() => {
// // //           handleClick();
// // //         }}
// // //         className='bg-green-700 hover:bg-green-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'
// // //       >Post House
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // export default Search;
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';

// // import components
// import CountryDropdown from './CountryDropdown';
// import PropertyDropdown from './PropertyDropdown';
// import PriceRangeDropdown from './PriceRangeDropdown';

// // import context
// import { HouseContext } from './HouseContext';

// // import icon
// import { RiSearch2Line } from 'react-icons/ri';

// const Search = () => {
//   const { handleClick } = useContext(HouseContext);
//   return (
//     <div className='pt-20'>
// <div className="px-[30px] py-18  max-w-[1370px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-1 bg-gray-200 rounded-lg">
//         <div className="flex-1  border border-gray-400 rounded-lg p-2">
//           <CountryDropdown />
//         </div>     

//                 <div className="flex-1  border border-gray-400 rounded-lg p-2">
 
//       <PropertyDropdown />
//       </div>
//       <div className="flex-1  border border-gray-400 rounded-lg p-2">

//       <PriceRangeDropdown />
//       </div>
//       {/* <button
//         onClick={handleClick}
//         className='bg-green-700 hover:bg-green-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'
//       >
//         <RiSearch2Line className="mr-2" />
//         Search
//       </button> */}
//               <div className="flex-1 rounded-lg p-2">

//       <Link
//         to="/post"
//         className="btn bg-green-600 text-white px-4 py-2 rounded-lg w-full lg:max-w-[162px] h-16 flex justify-center items-center"
//       >
//         Post House
//       </Link>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Search;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

// import context
import { HouseContext } from './HouseContext';

// import icon
import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      {/* <button
        onClick={() => {
          handleClick();
        }}
        className='bg-green-700 hover:bg-green-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'
      >
        <RiSearch2Line />
      </button> */}
      <Link
        to="/post"
       className="btn bg-green-600 text-white px-4 py-2 rounded-lg w-full lg:max-w-[162px] h-16 flex justify-center items-center"
      >
        Post House
      </Link>
    </div>
  );
};

export default Search;

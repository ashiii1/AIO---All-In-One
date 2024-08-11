// // import React, { useContext } from 'react';

// // // import context
// // import { HouseContext } from './HouseContext';
// // // import components
// // import House from './House';
// // // import link
// // import { Link } from 'react-router-dom';
// // // import icons
// // import { ImSpinner2 } from 'react-icons/im';

// // const HouseList = () => {
// //   const { houses, loading } = useContext(HouseContext);

// //   if (loading) {
// //     return (
// //       <ImSpinner2 className='mx-auto animate-spin text-green-700 text-4xl mt-[200px]' />
// //     );
// //   }

// //   if (houses.length < 1) {
// //     return (
// //       <div className='text-center text-3xl text-gray-400 mt-48'>
// //         Sorry, nothing was found.
// //       </div>
// //     );
// //   }

// //   return (
// //     <section className='mb-20'>
// //       <div className='container mx-auto'>
// //         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
// //           {houses.map((house, index) => {
// //             return (
// //               <Link to={`/property/${house.id}`} key={index}>
// //                 <House house={house} />
// //               </Link>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HouseList;
// import { useContext } from 'react';

// // import context
// import { HouseContext } from './HouseContext';
// // import components
// import House from './House';
// // import link
// import { Link } from 'react-router-dom';
// // import icons
// import { ImSpinner2 } from 'react-icons/im';

// const HouseList = () => {
//   const { houses, loading } = useContext(HouseContext);

//   if (loading) {
//     return (
//       <ImSpinner2 className='mx-auto animate-spin text-green-700 text-4xl mt-[200px]' />
//     );
//   }

//   if (houses.length < 1) {
//     return (
//       <div className='text-center text-3xl text-gray-400 mt-48'>
//         Sorry, nothing was found.
//       </div>
//     );
//   }

//   return (
//     <section className='mb-20'>
//       <div className='container mx-auto'>
//         <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-14'>
//           {houses.map((house, index) => {
//             return (
//               <Link to={`/property/${house.id}`} key={index}>
//                 <House house={house} />
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HouseList;
import  { useContext, useEffect, useState } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  const [localHouses, setLocalHouses] = useState([]);

  useEffect(() => {
    const storedHouses = JSON.parse(localStorage.getItem('houses')) || [];
    setLocalHouses(storedHouses);
  }, []);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-green-700 text-4xl mt-[200px]" />
    );
  }

  const allHouses = [...houses, ...localHouses];

  if (allHouses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-14">
          {allHouses.map((house, index) => (
            <Link to={`/tolet/property/${house.id}`} key={index}>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;

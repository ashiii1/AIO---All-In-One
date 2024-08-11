// // import React from 'react';

// // // import houseData
// // import { housesData } from '../data';
// // //  useParams
// // import { useParams } from 'react-router-dom';
// // // import icons
// // import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';
// // // import link
// // import { Link } from 'react-router-dom';

// // const PropertyDetails = () => {
// //   const { id } = useParams();
// //   const property = housesData.find((house) => {
// //     return house.id === parseInt(id);
// //   });

// //   return (
// //     <div className='container mx-auto min-h-[800px] mb-14'>
// //       <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
// //         <div>
// //           <h2 className='text-2xl font-semibold'>{property.name}</h2>
// //           <h3 className='text-lg mb-4'>{property.address}</h3>
// //         </div>
// //         <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
// //           <div className='bg-black-500 rounded-full text-white px-3 inline-block'>
// //             {property.type}
// //           </div>
// //           <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
// //             {property.country}
// //           </div>
// //         </div>
// //         <div className='text-3xl font-semibold text-green-600'>
// //           $ {property.price}
// //         </div>
// //       </div>
// //       <div className='flex flex-col items-start gap-8 lg:flex-row'>
// //         <div className='max-w-[768px]'>
// //           <div className='mb-8'>
// //             <img src={property.imageLg} alt='' />
// //           </div>
// //           <div className='flex gap-x-6 text-green-700 mb-6'>
// //             <div className='flex gap-x-2 items-center'>
// //               <BiBed className='text-2xl' />
// //               <div className='text-lg font-medium'>{property.bedrooms}</div>
// //             </div>
// //             <div className='flex gap-x-2 items-center'>
// //               <BiBath className='text-2xl' />
// //               <div className='text-lg font-medium'>{property.bathrooms}</div>
// //             </div>
// //             <div className='flex gap-x-2 items-center'>
// //               <BiArea className='text-2xl' />
// //               <div className='text-lg font-medium'>{property.surface}</div>
// //             </div>
// //           </div>
// //           <p>{property.description}</p>
// //         </div>
// //         <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
// //           <div className='flex items-center gap-x-4 mb-8'>
// //             <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
// //               <img src={property.agent.image}></img>
// //             </div>
// //             <div>
// //               <div className='font-bold text-lg'>{property.agent.name}</div>
// //               <Link to='' className='text-green-700 text-sm'>
// //                 View listings
// //               </Link>
// //             </div>
// //           </div>
// //           <form className='flex flex-col gap-y-4'>
// //             <input
// //               className='border border-gray-300 focus:border-green-700 rounded w-full px-4 h-14 text-sm outline-none'
// //               type='text'
// //               placeholder='Name*'
// //             />
// //             <input
// //               className='border border-gray-300 focus:border-green-700 rounded w-full px-4 h-14 text-sm outline-none'
// //               type='text'
// //               placeholder='Email*'
// //             />
// //             <input
// //               className='border border-gray-300 focus:border-green-700 rounded w-full px-4 h-14 text-sm outline-none'
// //               type='text'
// //               placeholder='Phone*'
// //             />
// //             <textarea
// //               className='border border-gray-300 focus:border-green-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none'
// //               type='text'
// //               placeholder='Message*'
// //               defaultValue='Hello, I am interested in [Modern apartment]'
// //             />
// //             <div className='flex gap-x-2'>
// //               <button
// //                 className='bg-green-700 hover:bg-green-800 text-white rounded p-4 text-sm w-full transition'
// //                 type='submit'
// //               >
// //                 Send message
// //               </button>
// //               <button className='border border-green-700 text-green-700 hover:border-green-600 hover:text-green-600 rounded p-4 text-sm w-full transition'>
// //                 Call
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PropertyDetails;
// import React, { useState } from 'react';

// // import houseData
// import { housesData } from '../data';
// //  useParams
// import { useParams } from 'react-router-dom';
// // import icons
// import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';
// // import link
// import { Link } from 'react-router-dom';

// const PropertyDetails = () => {
//   const { id } = useParams();
//   const property = housesData.find((house) => {
//     return house.id === parseInt(id);
//   });

//   // State to manage the main image
//   const [mainImage, setMainImage] = useState(property.imageLg);

//   return (
//     <div className='container mx-auto min-h-[800px] mb-14'>
//       <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
//         <div>
//           <h2 className='text-2xl font-semibold'>{property.name}</h2>
//           <h3 className='text-lg mb-4'>{property.address}</h3>
//         </div>
//         <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
//           <div className='bg-black-500 rounded-full text-white px-3 inline-block'>
//             {property.type}
//           </div>
//           <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
//             {property.country}
//           </div>
//         </div>
//         <div className='text-3xl font-semibold text-green-600'>
//           $ {property.price}
//         </div>
//       </div>
//       <div className='flex flex-col items-start gap-8 lg:flex-row'>
//         <div className='max-w-[768px]'>
//           <div className='mb-8'>
//             <img src={mainImage} alt='' />
//           </div>

//           {/* Thumbnails */}
//           <div className='flex gap-4 mb-8'>
//             {property.images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt=''
//                 className='w-24 h-24 object-cover cursor-pointer border border-gray-300 rounded-md'
//                 onClick={() => setMainImage(img)}
//               />
//             ))}
//           </div>

//           <div className='flex gap-x-6 text-green-700 mb-6'>
//             <div className='flex gap-x-2 items-center'>
//               <BiBed className='text-2xl' />
//               <div className='text-lg font-medium'>{property.bedrooms}</div>
//             </div>
//             <div className='flex gap-x-2 items-center'>
//               <BiBath className='text-2xl' />
//               <div className='text-lg font-medium'>{property.bathrooms}</div>
//             </div>
//             <div className='flex gap-x-2 items-center'>
//               <BiArea className='text-2xl' />
//               <div className='text-lg font-medium'>{property.surface}</div>
//             </div>
//           </div>
//           <p>{property.description}</p>
//         </div>
//         <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
//           <div className='flex items-center gap-x-4 mb-8'>
//             <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
//               <img src={property.agent.image} alt={property.agent.name} />
//             </div>
//             <div>
//               <div className='font-bold text-lg'>{property.agent.name}</div>
//               <Link to='' className='text-green-700 text-sm'>
//                 View listings
//               </Link>
//             </div>
//           </div>
//           <form className='flex flex-col gap-y-4'>
//             <input
//               className='border border-gray-300 focus:border-green-700 rounded w-full px-4 h-14 text-sm outline-none'
//               type='text'
//               placeholder='Name*'
//             />
//             <input
//               className='border border-gray-300 focus:border-green-700 rounded w-full px-4 h-14 text-sm outline-none'
//               type='text'
//               placeholder='Email*'
//             />
//             <input
//               className='border border-gray-300 focus:border-green-700 rounded w-full px-4 h-14 text-sm outline-none'
//               type='text'
//               placeholder='Phone*'
//             />
//             <textarea
//               className='border border-gray-300 focus:border-green-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none'
//               type='text'
//               placeholder='Message*'
//               defaultValue='Hello, I am interested in [Modern apartment]'
//             />
//             <div className='flex gap-x-2'>
//               <button
//                 className='bg-green-700 hover:bg-green-800 text-white rounded p-4 text-sm w-full transition'
//                 type='submit'
//               >
//                 Send message
//               </button>
//               <button className='border border-green-700 text-green-700 hover:border-green-600 hover:text-green-600 rounded p-4 text-sm w-full transition'>
//                 Call
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;
import React, { useState } from 'react';
import { housesData } from '../data';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const MapBox = () => {
  return (
    <div className="w-full h-64 border border-gray-300 rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1364%2C51.5094%2C-0.1270%2C51.5148&layer=mapnik"
        style={{ border: '1px solid black' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => house.id === parseInt(id));
  const [mainImage, setMainImage] = useState(property.imageLg);
  const thumbnails = [property.imageLg, property.imageLg, property.imageLg];

  return (
    <div className="container mx-auto min-h-[800px] mb-14">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{property.name}</h2>
          <h3 className="text-lg mb-4">{property.address}</h3>
        </div>
        <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
          <div className="bg-black-500 rounded-full text-white px-3 inline-block">
            {property.type}
          </div>
          <div className="bg-green-500 rounded-full text-white px-3 inline-block">
            {property.country}
          </div>
        </div>
        <div className="text-3xl font-semibold text-green-600">
          $ {property.price}
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <div className="max-w-[768px]">
          <div className="mb-8">
            <img src={mainImage} alt="" className="w-full h-auto" />
          </div>
          <div className="flex gap-4 mb-8">
            {thumbnails.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-24 object-cover cursor-pointer border border-gray-300 rounded-md"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <div className="flex gap-x-6 text-green-700 mb-6">
            <div className="flex gap-x-2 items-center">
              <BiBed className="text-2xl" />
              <div className="text-lg font-medium">{property.bedrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiBath className="text-2xl" />
              <div className="text-lg font-medium">{property.bathrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiArea className="text-2xl" />
              <div className="text-lg font-medium">{property.surface}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
          <div className="flex items-center gap-x-4 mb-8">
            <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
              <img src={property.agent.image} alt={property.agent.name} />
            </div>
            <div>
              <div className="font-bold text-lg">{property.agent.name}</div>
              <Link to="" className="text-green-700 text-sm">
                View listings
              </Link>
            </div>
          </div>
          <form className="flex flex-col gap-y-4">
            <input
              className="border border-gray-300 focus:border-green-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Name*"
            />
            <input
              className="border border-gray-300 focus:border-green-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Email*"
            />
            <input
              className="border border-gray-300 focus:border-green-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Phone*"
            />
            <textarea
              className="border border-gray-300 focus:border-green-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none"
              type="text"
              placeholder="Message*"
              defaultValue="Hello, I am interested in [Modern apartment]"
            />
            <div className="flex gap-x-2">
              <button
                className="bg-green-700 hover:bg-green-800 text-white rounded p-4 text-sm w-full transition"
                type="submit"
              >
                Send message
              </button>
              <button className="border border-green-700 text-green-700 hover:border-green-600 hover:text-green-600 rounded p-4 text-sm w-full transition">
                Call
              </button>
            </div>
          </form>
          {/* Map Box Below the Form */}
          <div className="mt-8">
            <MapBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

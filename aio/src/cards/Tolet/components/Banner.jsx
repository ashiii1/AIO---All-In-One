
// // import Image from '../assets/img/house-banner.png';
// // import Search from './Search';

// // const Banner = () => {
// //   return (
// //     <section className='h-full max-h-[840px] w-full  mb-10 xl:mb-24'>
// //       <div className='flex flex-col lg:flex-row'>
// //         <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
// //           <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
// //             <span className='text-green-600'>Rent</span> Your Dream House With
// //             Us.
// //           </h1>
// //           <p className='max-w-full mb-8'>
// //             Powerful, self-serve product and growth analytics to help you
// //             convert, engage, and retain more.
// //           </p>
// //         </div>
// //         <div className='hidden flex-1'>
// //           <img src={Image} alt='' />
// //         </div>
// //       </div>
// //       <Search />
// //     </section>
// //   );
// // };

// // export default Banner;

// import Search from './Search';

// const Banner = () => {
//   return (
//     <section className='h-full max-h-[540px] mb-8 xl:mb-24 bg-gray-300'>
//       <div className='flex flex-col lg:flex-row'>
//       <div className='hidden flex-1 lg:flex justify-end items-end w-full'>
//           <img src='https://media.istockphoto.com/id/538886278/photo/green-ecological-house-in-empty-field.jpg?s=612x612&w=0&k=20&c=7apbYzFqWyn7CrGKRP2_VBrvc7oYTUzko7IjJ8fVnUw=' alt='' />
//         </div>
//         <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
//         <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6 pb-28'>
//             <span className='text-green-700'>SK</span> ASHI
//           </h1>
//           <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
//             <span className='text-green-700'>Rent</span> Your Dream House With
//             Us.
//           </h1>
//           <p className='max-w-[480px] mb-8'>
//             Powerful, self-serve product and growth analytics to help you
//             convert, engage, and retain more.
//           </p>
//         </div>
//         {/* <div className='hidden flex-1 lg:flex justify-end items-end'>
//           <img src={Image} alt='' />
//         </div> */}
//       </div>
//       <Search />
//     </section>
//   );
// };

// export default Banner;
import Search from './Search';
import image from '../assets/img/houses/house9lg.png'

const Banner = () => {
  return (
    <section className="h-full max-h-[540px] mb-8 xl:mb-24 bg-gray-100">
      <div className="flex flex-col lg:flex-row h-full relative">
        <div className="flex-1 max-w-[1540px]  lg:flex lg:justify-end lg:items-end w-full h-full">
          <div className=''>
          <img
            src={image}
            alt=""
            className="object-cover w-full h-full"
          />
          </div>
        </div>
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 lg:pl-8 relative z-10">
          <div className='pb-10'>
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-2">
            <span className="text-green-700">SK</span> ASHI
          </h1>
          </div>
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-green-700">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more.
          </p>
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;

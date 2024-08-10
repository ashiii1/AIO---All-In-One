// import React, { createContext, useState, useEffect } from 'react';
// import { useContext } from 'react';


// // import data

// import { housesData } from '../data';

// // create context

// export const useHouseContext = () => {
//   return useContext(HouseContext);
//  };
// // export const HouseContext = createContext();

// // provider
// const HouseContextProvider = ({ children }) => {
//   const [houses, setHouses] = useState(housesData);
//   const [country, setCountry] = useState('Location (any)');
//   const [countries, setCountries] = useState([]);
//   const [property, setProperty] = useState('Property type (any)');
//   const [properties, setProperties] = useState([]);
//   const [price, setPrice] = useState('Price range (any)');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // return all countries
//     const allCountries = houses.map((house) => {
//       return house.country;
//     });

//     // remove duplicates
//     const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

//     // set countries state
//     setCountries(uniqueCountries);
//   }, []);

//   useEffect(() => {
//     // return only countries
//     const allProperties = houses.map((house) => {
//       return house.type;
//     });

//     // remove duplicates
//     const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

//     // set countries state
//     setProperties(uniqueProperties);
//   }, []);

//   const handleClick = () => {
//     setLoading(true);
//     // check the string if includes '(any)'
//     const isDefault = (str) => {
//       return str.split(' ').includes('(any)');
//     };

//     // get first string (price) and parse it to number
//     const minPrice = parseInt(price.split(' ')[0]);
//     // get last string (price) and parse it to number
//     const maxPrice = parseInt(price.split(' ')[2]);

//     const newHouses = housesData.filter((house) => {
//       const housePrice = parseInt(house.price);
//       // all values are selected
//       if (
//         house.country === country &&
//         house.type === property &&
//         housePrice >= minPrice &&
//         housePrice <= maxPrice
//       ) {
//         return house;
//       }
//       // all values are default
//       if (isDefault(country) && isDefault(property) && isDefault(price)) {
//         return house;
//       }
//       // country is not default
//       if (!isDefault(country) && isDefault(property) && isDefault(price)) {
//         return house.country === country;
//       }
//       // property is not default
//       if (!isDefault(property) && isDefault(country) && isDefault(price)) {
//         return house.type === property;
//       }
//       // price is not default
//       if (!isDefault(price) && isDefault(country) && isDefault(property)) {
//         if (housePrice >= minPrice && housePrice <= maxPrice) {
//           return house;
//         }
//       }
//       // country and property is not default
//       if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
//         return house.country === country && house.type === property;
//       }
//       // country and price is not default
//       if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
//         if (housePrice >= minPrice && housePrice <= maxPrice) {
//           return house.country === country;
//         }
//       }
//       // property and price is not default
//       if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
//         if (housePrice >= minPrice && housePrice <= maxPrice) {
//           return house.type === property;
//         }
//       }
//     });
    
//     setTimeout(() => {
//       return (
//         newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
//         setLoading(false)
//       );
//     }, 1000);
//   };

//   return (
//     <HouseContext.Provider
//       value={{
//         country,
//         setCountry,
//         countries,
//         property,
//         setProperty,
//         properties,
//         price,
//         setPrice,
//         handleClick,
//         houses,
//         loading,
//       }}
//     >
//       {children}
//     </HouseContext.Provider>
//   );
// };



// export default HouseContextProvider;
import React, { createContext, useState, useEffect, useContext } from 'react';

// Import data
import { housesData } from '../data';

// Create and export context
export const HouseContext = createContext();

// Custom hook to use the context
export const useHouseContext = () => {
  return useContext(HouseContext);
};

// Provider component
export const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get all countries
    const allCountries = houses.map((house) => house.country);
    // Remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    // Set countries state
    setCountries(uniqueCountries);
  }, [houses]);

  useEffect(() => {
    // Get all properties
    const allProperties = houses.map((house) => house.type);
    // Remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];
    // Set properties state
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    setLoading(true);
    // Check if the string includes '(any)'
    const isDefault = (str) => str.split(' ').includes('(any)');

    // Get min and max price
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // Filtering logic based on selected values
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      setHouses(newHouses.length < 1 ? [] : newHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        houses,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

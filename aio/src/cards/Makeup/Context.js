import React from 'react'
import { useReducer, useEffect } from 'react';
import { createContext } from 'react';
import stateReducer from './Reducer.js';

export const StateContext = createContext();

const Context = ({ children }) => {

  const [state, dispatch] = useReducer(stateReducer, {
    products: [],
    categories: [],
    sortBy: null,
    priceRange: 0,
    rating: 0,
    sortByFilters: {
      sortByCategory: [],
      sortByBrands: []
    },
    subCategory: null,
    cart: [],
    wishlist: [],
    tag: null,
    showtoast: false,
    address: [],
    showAddressModal: false,
    addressEditMode: false,
    addressToBeEdited: {},
    showSidebarForMobile:false
  })





  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}

export default Context;
import React from 'react'

const stateReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS': return { ...state, products: action.payload }

        case 'SET_CATEGORIES': return { ...state, categories: action.payload }

        case 'SET_PRICE_RANGE': return { ...state, priceRange: action.payload }

        case 'SET_SORT_TYPE': return { ...state, sortBy: action.payload }

        case 'SET_CATEGORY': return state.sortByFilters.sortByCategory.includes(action.payload) ? { ...state, sortByFilters: { ...state.sortByFilters, sortByCategory: state.sortByFilters.sortByCategory.filter(item => item !== action.payload) } } :
            { ...state, sortByFilters: { ...state.sortByFilters, sortByCategory: state.sortByFilters.sortByCategory.concat(action.payload) } }

        case 'SET_SUB_CATEGORY': return { ...state, subCategory: action.payload }
        case 'SET_RATING': return { ...state, rating: action.payload }
        case 'SET_BRAND': return state.sortByFilters.sortByBrands.includes(action.payload) ? { ...state, sortByFilters: { ...state.sortByFilters, sortByBrands: state.sortByFilters.sortByBrands.filter(item => item !== action.payload) } } :
            { ...state, sortByFilters: { ...state.sortByFilters, sortByBrands: state.sortByFilters.sortByBrands.concat(action.payload) } }
        case 'CLEAR_ALL_FILTERS': return {
            ...state,
            sortBy: null,
            priceRange: 0,
            rating: 0,
            sortByFilters: {
                sortByCategory: [],
                sortByBrands: [],

            },
            subCategory: null,
            tag: null,

        }
        case 'SET_CART': return { ...state, cart: action.payload }
        case 'SET_WISHLIST': return { ...state, wishlist: action.payload }
        case 'SET_TAG': return { ...state, tag: action.payload }
        case 'SET_SHOW_TOAST': return { ...state, showtoast: action.payload }
        case 'SET_ADDRESS': return { ...state, address: action.payload }
        case 'SHOW_ADDRESS_MODAL': return { ...state, showAddressModal: action.payload }
        case 'ADD_NEW_ADDRESS': return { ...state, address: [...state.address, action.payload] }
        case 'REMOVE_ADDRESS': return { ...state, address: state.address.filter(item => item.address_id !== action.payload) }
        case 'SET_ADDRESS_EDIT_MODE': return { ...state, addressEditMode: action.payload }
        case 'SET_ADDRESS_TO_EDIT': return { ...state, addressToBeEdited: action.payload }
        case 'UPDATE_ADDRESS': return { ...state, address: state.address.map(item => item.address_id === action.payload.address_id ? action.payload : item) }
        case 'SET_SHOW_SIDEBAR_FOR_MOBILE':return {...state,showSidebarForMobile:!state.showSidebarForMobile}
        default: return state
    }

}

export default stateReducer
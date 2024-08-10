import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    cart: [],
    isLoading: false,
    wishlist: [],
};

const loadCartFromStorage = () => {
    const existingCartFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
    return existingCartFromStorage;
}

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart",JSON.stringify(cart))
}

const loadWishlistFromStorage = () => {
    const existingWishlistFromStorage = JSON.parse(localStorage.getItem('wishlist')) || [];
    return existingWishlistFromStorage;
}

const saveWishlistToLocalStorage = (wishlist) => {
    if (wishlist) {
        localStorage.setItem("wishlist",JSON.stringify(wishlist))
    }
}

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.ourPrice + amount, 0);

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        ...initialState,
        cart: loadCartFromStorage(),
        wishlist: loadWishlistFromStorage(),
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            saveCartToLocalStorage(state.cart)
        },
        emptyCart: (state) => {
            state.cart = [];
            saveCartToLocalStorage(state.cart);
        },
        removeFromCart: (state, action) => {
            const index = action.payload;
            if (index >= 0 && index < state.cart.length) {
                state.cart.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product at index ${index} as it's out of range!`
                );
            }
            saveCartToLocalStorage(state.cart);
        },
        addToWishlist: (state, action) => {
            const newItem = action.payload;
            // Check if the item already exists in the wishlist
            const exists = state.wishlist.some(item => item.title === newItem.title);
            if (!exists) {
                state.wishlist = [...state.wishlist, newItem];
                saveWishlistToLocalStorage(state.wishlist);
            }
        },
        removeFromWishlist: (state, action) => {
            const index = action.payload;
            if (index >= 0 && index < state.wishlist.length) {
                state.wishlist.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product at index ${index} as it's out of range!`
                );
            }
            saveWishlistToLocalStorage(state.wishlist);
        },
    }
});

export const { addToCart, emptyCart, removeFromCart, addBookQuantity, addToWishlist, removeFromWishlist } = cartSlice.actions;

export default cartSlice.reducer;

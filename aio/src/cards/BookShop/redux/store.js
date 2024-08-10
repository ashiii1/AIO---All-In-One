import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartsSlice.js';
import addressReducer from './addressSlice.js';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        address: addressReducer
    }
});

export default store;

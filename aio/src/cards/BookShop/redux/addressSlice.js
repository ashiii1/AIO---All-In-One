import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
     address: {
        firstName: '',
        lastName: '',
        streetAddress: '',
        city: '',
        state: '',
        pinCode: '',
        phone: '',
    },
}

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        setAddress(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
        clearAddress(state) {
            return initialState;
        },
    },
});

export const { setAddress, clearAddress } = addressSlice.actions;
export default addressSlice.reducer;
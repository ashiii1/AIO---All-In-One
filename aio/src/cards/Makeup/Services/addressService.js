import { v4 as uuid } from "uuid";
//added dummy addresses 
const address = [
    {
        address_id: uuid(),
        address_type: 'HOME',
        flatno: '1001',
        bldg: 'Maitriya park',
        street: 'Hari om nagar road',
        city: 'thane',
        userstate: 'Maharashtra',
        country: 'India',
        pincode: 400603,
        mobile: '+91 9967528028'
    },
    {
        address_id: uuid(),
        address_type: 'WORK',
        flatno: 'sector 4',
        bldg: 'Falcon court',
        street: 'brighton road',
        city: 'vashi',
        userstate: 'Maharashtra',
        country: 'India',
        pincode: 400603,
        mobile: '+91 9967528028'
    }
]

export const setInitialUseraddress = (state, dispatch) => {
    dispatch({ type: 'SET_ADDRESS', payload: [...address] })
}
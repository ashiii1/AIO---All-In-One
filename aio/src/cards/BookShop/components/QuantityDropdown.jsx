import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBookQuantity } from '../redux/cartsSlice';

const QuantityDropdown = ({item}) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        console.log(newQuantity);
        setQuantity(newQuantity)
         dispatch(addBookQuantity({item, amount: newQuantity}))
    }
  return (
    <select value={quantity} onChange={handleQuantityChange}>
        {[...Array(10).keys()].map((num)=>(
            <option key={num+1} value={num+1}>{num+1}</option>
        ))}
    </select>
  )
}

export default QuantityDropdown
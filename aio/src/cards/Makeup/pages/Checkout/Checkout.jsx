import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../AuthProvider'
import { calculateFinalCartPrice, findPriceOfAllItems, findTotalDiscount } from '../../Services/CartServices'
import { StateContext } from '../../Context'
import './Checkout.css'

const Checkout = () => {
  const { state } = useContext(StateContext)
  const { user } = useContext(AuthContext)
  const [selectedAddress, setSelectedaddress] = useState({})
  const totalPrice = findPriceOfAllItems(state.cart)
  const totalDiscount = findTotalDiscount(state.cart)
  const finalCartPrice = calculateFinalCartPrice(totalPrice, totalDiscount, 50)
  return (
    <>
      <div className='checkout-page-container flex-hz'>
        <div className='address-selection-container flex-vt'>
          <h4 className='address-selection-title'>Select address to deliver</h4>
          {state.address.map(addressItem => {
            console.log(addressItem)
            return (
              <div className='address-selection-input flex-hz'><input type="radio" id="address-selection-input" name="address" value={addressItem} onChange={() => setSelectedaddress(addressItem)} /><label for="address-selection-input">
                <p className='text-sm'>{addressItem.address_type}</p>
                <p className='text-sm'>{addressItem.flatno},  {addressItem.bldg}</p>
                <p className='text-sm'>{addressItem.street}</p>
                <p className='text-sm'>{addressItem.userstate}, {addressItem.country}</p>
                <p className='text-sm'>{addressItem.pincode}</p>
                <p className='text-sm'>{addressItem.mobile}</p>
              </label></div>
            )
          })}
        </div>
        <div className='order-details-container flex-vt'>
          <h4>Order Details</h4>
          <h5>Item</h5>
          {state.cart.map(item => {
            return (
              <div className='flex-hz jc-sa'>
                <p className='text-sm'>{item.name}</p>
                <p className='text-sm'>{item.qty}</p>
              </div>
            )
          })}
          <h4 class="font-weight-bold">PRICE DETAILS</h4>
          <div class="price-wrapper flex-hz">
            <p class="text-sm">Price </p>
            <p class="text-sm">Rs {totalPrice} </p>
          </div>
          <div class="price-wrapper flex-hz">
            <p class="text-sm">Discount</p>
            <p class="text-sm">- Rs {totalDiscount}</p>
          </div>
          <div class="price-wrapper flex-hz">
            <p class="text-sm">Delivery Charges</p>
            <p class="text-sm">Rs 50</p>
          </div>
          <div class="price-wrapper flex-hz">
            <h4 class="font-weight-bold">TOTAL AMOUNT</h4>
            <p class="text-sm">Rs {finalCartPrice}</p>
          </div>
          {Object.keys(selectedAddress).length !== 0 && <>
            <div className='address-display-container flex-vt'>
              <h4>Deliver to</h4>
              <p className='text-sm'>{user.firstName} {user.lastName}</p>
              <p className='text-sm'>{selectedAddress.flatno},  {selectedAddress.bldg}, {selectedAddress.street}</p>
              <p className='text-sm'>{selectedAddress.userstate}, {selectedAddress.country}</p>
              <p className='text-sm'>{selectedAddress.pincode}</p>
              <p className='text-sm'>{selectedAddress.mobile}</p>
            </div>
          </>}
          <button className='btn btn-secondary'>Place Order</button>
        </div>
      </div>
    </>
  )
}
export { Checkout }
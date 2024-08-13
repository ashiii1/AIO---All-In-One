import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider.jsx'
import { AddressformModal } from '../../components/index.js'
import { StateContext } from '../../Context.js'
import './UserProfile.css'

const UserProfile = () => {
  const { user } = useContext(AuthContext)
  const { state, dispatch } = useContext(StateContext)
  const AddNewAddressHandler = () => {
    dispatch({ type: 'SHOW_ADDRESS_MODAL', payload: !state.showAddressModal })
  }
  const removeAddress = (id) => {
    dispatch({ type: 'REMOVE_ADDRESS', payload: id })
  }
  const editAddress = (item) => {
    dispatch({ type: 'SET_ADDRESS_EDIT_MODE', payload: true })
    dispatch({ type: 'SET_ADDRESS_TO_EDIT', payload: item })
    dispatch({ type: 'SHOW_ADDRESS_MODAL', payload: !state.showAddressModal })
  }
  return (
    <>
      <div className='profile-page-container'>
        <div className='user-info-display'>
          <h3 className='title'>Profile</h3>
          <span className='text-md'>Full Name <h5>{user.firstName} {user.lastName}</h5></span>
          <span className='text-md'>Email <h5>{user.email} </h5></span>
        </div>
        <div className='address-container'>
          <h3 className='title'>My Addresses</h3>
          {state.address.map(item =>
            <>
              <p className='text-sm'>{item.address_type}</p>
              <p className='text-sm'>{item.flatno},  {item.bldg}</p>
              <p className='text-sm'>{item.street}</p>
              <p className='text-sm'>{item.userstate}, {item.country}</p>
              <p className='text-sm'>{item.pincode}</p>
              <p className='text-sm'>{item.mobile}</p>
              <span className='flex-hz'> <button className='address-btns address-btn-edit' onClick={() => editAddress(item)}>Edit</button>
                <button className='address-btns address-btn-remove' onClick={() => removeAddress(item.address_id)}>remove</button></span>
            </>
          )}
          <button className='btn btn-secondary' onClick={AddNewAddressHandler}>Add New Address</button>
          {state.showAddressModal && <AddressformModal />}
        </div>
      </div>
    </>
  )
}
export { UserProfile }
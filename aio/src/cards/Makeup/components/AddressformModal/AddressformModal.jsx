import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { StateContext } from '../../Context'
import { Toast } from '../index'
import './AddressformModal.css'

const AddressformModal = () => {
  const { state, dispatch } = useContext(StateContext)
  const [msg, setMsg] = useState('')
  const [address_type, setAddressType] = useState('');
  const [flatno, setFlatNo] = useState('');
  const [bldg, setBldg] = useState('');
  const [street, setStreet] = useState('');
  const [userState, setUsersState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobile, setMobile] = useState('');

  const [newaddress_type, newsetAddressType] = useState(state.addressToBeEdited.address_type);
  const [newflatno, newsetFlatNo] = useState(state.addressToBeEdited.flatno);
  const [newbldg, newsetBldg] = useState(state.addressToBeEdited.bldg);
  const [newstreet, newsetStreet] = useState(state.addressToBeEdited.street);
  const [newuserState, newsetUsersState] = useState(state.addressToBeEdited.userstate);
  const [newcountry, newsetCountry] = useState(state.addressToBeEdited.country);
  const [newpincode, newsetPincode] = useState(state.addressToBeEdited.pincode);
  const [newmobile, newsetMobile] = useState(state.addressToBeEdited.mobile);

  const saveAddressHandler = () => {
    if (address_type !== '' && flatno !== '' && bldg !== '' && street !== '' && userState !== '' && country !== '' && pincode !== '' && mobile !== '') {
      dispatch({ type: 'ADD_NEW_ADDRESS', payload: { address_type, flatno, bldg, street, userState, country, pincode, mobile } })
      dispatch({ type: 'SHOW_ADDRESS_MODAL', payload: !state.showAddressModal })
    } else {
      dispatch({ type: 'SET_SHOW_TOAST', payload: !state.showtoast })
      setMsg("Please enter all address details")
    }

  }
  const saveEditedAddressHandler = () => {
    const addressToBeEdited = state.address.find(item => item === state.addressToBeEdited);
    const newaddress = {
      ...addressToBeEdited,
      address_type: newaddress_type,
      flatno: newflatno,
      bldg: newbldg,
      street: newstreet,
      userState: newuserState,
      country: newcountry,
      pincode: newpincode,
      mobile: newmobile
    }
    if (newaddress_type !== '' && newflatno !== '' && newbldg !== '' && newstreet !== '' && newuserState !== '' && newcountry !== '' && newpincode !== '' && newmobile !== '') {

      dispatch({ type: 'UPDATE_ADDRESS', payload: newaddress })
      dispatch({ type: 'SHOW_ADDRESS_MODAL', payload: !state.showAddressModal })
      dispatch({ type: 'SET_ADDRESS_EDIT_MODE', payload: !state.addressEditMode })
    } else {
      dispatch({ type: 'SET_SHOW_TOAST', payload: !state.showtoast })
      setMsg("Please enter all address details properly")
    }

  }

  return (
    <>
      <div className="modal-overlay flex-vt">

        {!state.addressEditMode ? <>
          <div class="modal-box w-50 flex-vt">
            <label className='address-form-label'>Address name </label> <input value={address_type} className='address-form-input' type="text" placeholder='enter address name' onChange={(e) => setAddressType(e.target.value)} />
            <label className='address-form-label'>Flat no </label> <input value={flatno} className='address-form-input' type="text" placeholder='enter address name' onChange={(e) => setFlatNo(e.target.value)} />
            <label className='address-form-label'>Bldg  </label> <input value={bldg} className='address-form-input' type="text" placeholder='enter bldg name' onChange={(e) => setBldg(e.target.value)} />
            <label className='address-form-label'>Street  </label> <input value={street} className='address-form-input' type="text" placeholder='enter street' onChange={(e) => setStreet(e.target.value)} />
            <label className='address-form-label'>State  </label> <input value={userState} className='address-form-input' type="text" placeholder='enter state'
              onChange={(e) => setUsersState(e.target.value)} />
            <label className='address-form-label'>Country  </label> <input value={country} className='address-form-input' type="text" placeholder='enter country'
              onChange={(e) => setCountry(e.target.value)} />
            <label className='address-form-label'>Pincode  </label> <input value={pincode} className='address-form-input' type="text" placeholder='enter pincode'
              onChange={(e) => setPincode(e.target.value)} />
            <label className='address-form-label'>Mobile </label> <input value={mobile} className='address-form-input' type="text" placeholder='enter mobile no'
              onChange={(e) => setMobile(e.target.value)} />
            <button className='btn btn-secondary' onClick={saveAddressHandler}>Add address</button>
          </div>
        </> : <>
          <div class="modal-box w-50 flex-vt">
            <label className='address-form-label'>Address name </label> <input value={newaddress_type} className='address-form-input' type="text" placeholder='enter address name' onChange={(e) => newsetAddressType(e.target.value)} />
            <label className='address-form-label'>Flat no </label> <input value={newflatno} className='address-form-input' type="text" placeholder='enter address name' onChange={(e) => newsetFlatNo(e.target.value)} />
            <label className='address-form-label'>Bldg  </label> <input value={newbldg} className='address-form-input' type="text" placeholder='enter bldg name' onChange={(e) => newsetBldg(e.target.value)} />
            <label className='address-form-label'>Street  </label> <input value={newstreet} className='address-form-input' type="text" placeholder='enter street' onChange={(e) => newsetStreet(e.target.value)} />
            <label className='address-form-label'>State  </label> <input value={newuserState} className='address-form-input' type="text" placeholder='enter state'
              onChange={(e) => newsetUsersState(e.target.value)} />
            <label className='address-form-label'>Country  </label> <input value={newcountry} className='address-form-input' type="text" placeholder='enter country'
              onChange={(e) => newsetCountry(e.target.value)} />
            <label className='address-form-label'>Pincode  </label> <input value={newpincode} className='address-form-input' type="text" placeholder='enter pincode'
              onChange={(e) => newsetPincode(e.target.value)} />
            <label className='address-form-label'>Mobile </label> <input value={newmobile} className='address-form-input' type="text" placeholder='enter mobile no'
              onChange={(e) => newsetMobile(e.target.value)} />
            <button className='btn btn-secondary' onClick={saveEditedAddressHandler}>Edit address</button>
          </div>
        </>}
      </div>
      {state.showtoast && <Toast msg={msg} />}
    </>
  )
}

export { AddressformModal }
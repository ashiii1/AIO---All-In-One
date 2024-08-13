import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { addToCart } from '../../Services/CartServices'
import { useContext } from 'react'
import { StateContext } from '../../Context'
import { AuthContext } from '../../AuthProvider'
import './SingleProductPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { handleAddToWishlist } from '../../Services/WishlistServices'

const SingleProductPage = () => {
  let navigate = useNavigate();
  const { productId } = useParams()
  const [productItem, setProductItem] = useState({})
  const { state, dispatch } = useContext(StateContext)
  const { token } = useContext(AuthContext)
  const  [btntext,setBtntext]=useState("Add to cart")

  useEffect(()=>{
    const isItemPresent = state.cart.find(item => item._id === productId)
    isItemPresent ? setBtntext("Go to cart"): setBtntext("Add to cart")
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/products/${productId}`, { method: "GET" })
        const data = await res.json()
        setProductItem(data.product)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();
  }, [productId])
  const handleAddTOCart = () => {
   if(token){
    if(btntext==="Add to cart"){
      const isItemPresent = state.cart.find(item => item._id === productId)
      { isItemPresent === undefined && addToCart(productItem, token, dispatch)
      setBtntext("go to cart")
    }}else{
      navigate('/cartpage')
    }
   }else{
    navigate('/signin')
   }
   
    
    

  }
  return (
    <>
      <div className='singleProductPage-container flex-hz'>
        <img className='singleProductPage-img' src={productItem.img}></img>
        <div className='singleProductPage-wrapper flex-vt'>
          <h2 className='singleProductPage-title'>{productItem.name}</h2>
          <div class="card__text-wrapper-2 singleProductPage-rating">
            <span>{productItem.rating}</span>
            <span><i class="fa fa-star"></i></span>
          </div>
          <h5 className='singleProductPage-desc'>{productItem.desc}</h5>
          <h5 className='singleProductPage-info'>{productItem.info}</h5>
          <span> <h5 className='singleProductPage-price'>MRP: Rs {productItem.price}</h5> <h5 className='singleProductPage-discount'> {productItem.discount} % off</h5></span>
          <div className='flex-hz'>
            <FontAwesomeIcon icon={faHeart} className="heart-icon-single-prd-page" onClick={() => handleAddToWishlist(state.wishlist, productItem, token, dispatch, navigate)} />
            <button class="btn btn-primary card__btn-primary singleProductPage-btn" onClick={handleAddTOCart}>{btntext}</button>
          </div>
        </div>
      </div>

    </>
  )
}

export { SingleProductPage }
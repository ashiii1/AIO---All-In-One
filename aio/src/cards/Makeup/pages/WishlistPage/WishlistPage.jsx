import React from 'react'
import { useContext } from 'react';
import { ProductCard } from '../../components/index';
import { StateContext } from '../../Context';
import './WishlistPage.css';

const WishlistPage = () => {
   const { state } = useContext(StateContext)

   return (
      <>
         <div class="product-display-container">
            <h2 class="sub-heading">My WishList</h2>
            <div class="product-container">
               {state.wishlist.length===0 ? <><h4>Your wishlist is empty!</h4></>:<>{state.wishlist.map(item => <ProductCard item={item} />)}</>}
            </div>
         </div>
      </>
   )
}

export { WishlistPage }
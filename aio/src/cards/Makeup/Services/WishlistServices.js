import axios from "axios";
import { removeFromCart } from "./CartServices.js";

export const handleAddToWishlist = (wishlist, item, token, dispatch, navigate,currentpage) => {
  if (token === undefined) {
    navigate('/signin')
  } else {
    const isItemPresent = wishlist.find(itemInWishlist => itemInWishlist._id === item._id)
    if (isItemPresent === undefined && currentpage!=='/productlistingpage') {
      addToWishlist(item, token, dispatch)
      removeFromCart(item._id, token, dispatch)
    }else if(currentpage==='/productlistingpage'){
      addToWishlist(item, token, dispatch)
    }
  }

}

export const addToWishlist = (item, token, dispatch) => {
  try {
    fetch("/api/user/wishlist", {
      method: "POST",
      body: JSON.stringify({ product: item }),
      headers: {
        authorization: token,
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_WISHLIST', payload: data.wishlist }))
  } catch (error) {
    console.log(error)
  }
}

export const removeFromWishlist = async (id, token, dispatch,e) => {
  try {
  
    const {
      data: { wishlist },
    } = await axios.delete(`api/user/wishlist/${id}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: 'SET_WISHLIST', payload: wishlist })
   
   
  } catch (error) {
    console.log("Error in wishlist service", error);
  }
}

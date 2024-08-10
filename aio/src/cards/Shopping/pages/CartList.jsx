import React from 'react';
import cartListData from './cart.json';
import Cards from '../components/Cards';
// const cartListData=JSON.parse(localStorage.getItem('cartInfo'));
console.log("list mod",cartListData);
const CartList = ({handleClick}) => {
  return (
    <article className="mt-[140px] md:mt-[110px]">
        {
            cartListData.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
                
                ))
              }
              {/* {console.log(item)} */}
    </article>
  )
}

export default CartList;
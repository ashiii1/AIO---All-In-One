import React from 'react'
import { ShoppingCart } from 'lucide-react'; 



const MainCart = () => {
  return (
    <div>
      <div className='p-4 bg-red-100 text-black pb-1 text-center pt-2 flex justify-between items-center'>
        <div className="flex-grow text-center">
          <span className="text-lg font-bold">Discover Exciting New Categories</span>
        </div>
        <div className="flex items-center">
          <ShoppingCart className="w-10 h-10 text-black" />
          <div className=''> 
          <span className="ml-0.5 text-lg ">Main Cart</span> 
        </div>
        </div>
        </div>
    </div>
  )
}

export default MainCart

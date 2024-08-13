// import React, { useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../Context/StoreContext';
// import './cardDetail.css';
// import image from '../../../cart-icon.jpg'

// const CardDetail = () => {
//   const { id } = useParams();
//   const { food_list, addToCart, cartItem } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const foodItem = food_list.find(item => item._id === id);
//   const similarItems = food_list.filter(item => item.category === foodItem.category && item._id !== id).slice(0, 3);

//   if (!foodItem) return <p>Food item not found</p>;

//   return (
//     <div className="card-detail-container">
//       <div className="card-detail-content">
//         <img className="card-detail-image" src={foodItem.image} alt={foodItem.name} />
//         <div className="card-detail-info">
//           <h1>{foodItem.name}</h1>
//           <p>{foodItem.description}</p>
//           <p className="food-price text-[tomato] text-[42px] ">${foodItem.price}</p>
//           <button onClick={() => addToCart(id)} className=" add-to-cart-btn bg-orange-400 size-22 w-10 flex flex-row text-black">
//             <img src={image} alt="Cart" className='' /> 
//             <div className='flex flex-row w-36 pl-1 pt-5 '> Cart</div>
//           </button>
//         </div>
//       </div>
//       <div className="similar-items">
//         <h2>Similar Items</h2>
//         <div className="similar-items-list">
//           {similarItems.map(item => (
//             <div key={item._id} className="similar-item" onClick={() => navigate(`/food-order/food-order/${item._id}`)}>
//               <img src={item.image} alt={item.name} />
//               <p>{item.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardDetail;
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import './cardDetail.css';
import image from '../../../cart-icon.jpg';
import { toast } from 'react-toastify'; // Import toast

const CardDetail = () => {
  const { id } = useParams();
  const { food_list, addToCart, cartItem } = useContext(StoreContext);
  const navigate = useNavigate();

  const foodItem = food_list.find(item => item._id === id);
  const similarItems = food_list.filter(item => item.category === foodItem.category && item._id !== id).slice(0, 3);

  if (!foodItem) return <p>Food item not found</p>;

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
    toast.success("Item added to cart!"); // Show success toast
  };

  return (
    <div className="card-detail-container">
      <div className="card-detail-content">
        <img className="card-detail-image" src={foodItem.image} alt={foodItem.name} />
        <div className="card-detail-info">
          <h1>{foodItem.name}</h1>
          <p>{foodItem.description}</p>
          <p className="food-price text-[tomato] text-[42px]">${foodItem.price}</p>
          <button onClick={() => handleAddToCart(id)} className="add-to-cart-btn bg-orange-400 size-22 w-10 flex flex-row text-black">
            <img src={image} alt="Cart" className='' />
            <div className='flex flex-row w-36 pl-1 pt-5'>Cart</div>
          </button>
        </div>
      </div>
      <div className="similar-items">
        <h2>Similar Items</h2>
        <div className="similar-items-list">
          {similarItems.map(item => (
            <div key={item._id} className="similar-item" onClick={() => navigate(`/food-order/food-order/${item._id}`)}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDetail;

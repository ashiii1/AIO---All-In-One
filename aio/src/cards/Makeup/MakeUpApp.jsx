import  Home  from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import ForgetPassword from './pages/ForgetPassword';
import Success from './pages/Success';
import {Route,Routes } from "react-router-dom"
import { useSelector } from 'react-redux';
import Order from './pages/Order';

const MakeUpApp = () => {

 const user=useSelector(state=>state.user.currentUser)


  return (
    <>
    <Routes>
      {/* USER Routes  */}
      <Route exact path="/" ><Home/></Route>
      <Route  path="/products/:category/:item" ><ProductList/></Route>
      <Route exact  path="/products" ><ProductList/></Route>
      <Route exact path="/product/:productId" ><Product/></Route>
      <Route exact  path="/cart" ><Cart/></Route>
      <Route exact  path="/order" >
      {user ? <Order/> :  
      <>
      <Login/>
      </> }
        </Route>
      <Route path="/success"><Success /></Route>
      <Route exact  path="/login" ><Login/></Route>
      <Route exact  path="/register" ><Register/></Route>
      <Route exact  path="/forget" ><ForgetPassword/></Route>
      <Route exact  path="/resetPassword/:id/:token" ><ResetPassword/></Route>

     

    </Routes>
    </>
  );
}



export default MakeUpApp
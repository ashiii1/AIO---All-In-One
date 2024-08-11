import React from 'react'

const MakeUpApp = () => {
  
import './App.css';
import  Home  from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import ForgetPassword from './pages/ForgetPassword';
import Success from './pages/Success';
import {BrowserRouter,Route,Switch } from "react-router-dom"
import { useSelector } from 'react-redux';
import Order from './pages/Order';
import { AdminHome } from './AdminPages/AdminHome';
import AdminRoute from './AdminRoute';
import AdminProductList from './AdminPages/AdminProductList';
import AdminUserList from './AdminPages/AdminUserList';
import AdminProductEdit from './AdminPages/AdminProductEdit';
import AdminUserEdit from './AdminPages/AdminUserEdit';
import AdminProductAdd from './AdminPages/AdminProductAdd';
import AdminUserAdd from './AdminPages/AdminUserAdd';


function App() {

 const user=useSelector(state=>state.user.currentUser)


  return (
    <>
    <BrowserRouter>
    <Switch>
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

      {/*ADMIN Routes  */}
        <AdminRoute  path="/adminHome" component={<AdminHome/>} />
        <AdminRoute exact path="/adminProductList" component={<AdminProductList/>}/>
        <AdminRoute exact path="/adminproductedit/:id" component={<AdminProductEdit/>}/>
        <AdminRoute path="/adminUserList" component={<AdminUserList/>}/>
        <AdminRoute exact path="/adminuseredit/:id" component={<AdminUserEdit/>}/>
        <AdminRoute exact path="/adminproductadd" component={<AdminProductAdd/>}/>
        <AdminRoute exact path="/adminuseradd" component={<AdminUserAdd/>}/>


    </Switch>
    </BrowserRouter>
    </>
  );
}



export default MakeUpApp
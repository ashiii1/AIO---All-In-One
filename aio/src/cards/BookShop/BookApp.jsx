import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import CategoryDetails from './components/CategoryDetails';
import BooksDetails from './components/BooksDetails';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Payment from './components/Payment';
import WishList from './components/WishList';


const BookApp = () => {
   
    
      return (
        <div className="App">
          <Routes>
            <Route path="/" element={<><Navbar/><Categories/><Footer/></>} />
            <Route path="/categories" element={<><Navbar/><Categories /><Footer/></>} />
            <Route path="/categories/:category" element={<><Navbar/><CategoryDetails /></>} />
            <Route path="/categories/:category/:title" element={<><Navbar/><BooksDetails/></>} />
            <Route path="/checkout" element={<><Navbar/><Checkout /></>} />
            <Route path="/payment" element={<><Payment /><Footer/></>} />
            <Route path="/wishlist" element={<><Navbar /><WishList/></>} />
          </Routes>
        </div>
      );
    }
    
    

export default BookApp
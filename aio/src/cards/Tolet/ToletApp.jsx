
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// Import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import PostHouseForm from './components/PostHouseForm';

const ToletApp = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto bg-white">
        <Header />
      </div>
      <div className="max-w-[1440px] mx-auto bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/post" element={<PostHouseForm />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default ToletApp;

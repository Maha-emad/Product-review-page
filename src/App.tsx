import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';  
import ProductPage from './Pages/ProductPage';
import ProductDetails from './components/Product/ProductDetails';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import ProductCarousel from './components/Product/ProductImages'; 
import ReviewSection from './components/Review/ReviewSection' ;
import Policies from'./Pages/Policies/Policies';
import FAQs from './Pages/FAQs/FAQs';



const App: React.FC = () => { 

  const images = [
    './images/w1.jpeg',
    './images/w2.jpeg',
    './images/w3.jpeg', 
    './images/w3.jpeg',
  ];
  return (
    <>
     
     <Router>
      <div className="app">
      <Header/> 
     
        <main>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </main>
      </div> 
      <Footer/>
    </Router>
    </>
     
    
  );
};

export default App;

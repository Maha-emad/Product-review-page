import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const App: React.FC = () => {
  return (
    
      <div className="App">
        <Header />
        <Footer />
      </div>
    
  );
};

export default App;

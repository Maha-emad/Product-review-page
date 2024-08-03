import React from 'react';
import './header.css';   


const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/wishs">Wishlist</a></li>
            <li><a href="/about">Cart</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

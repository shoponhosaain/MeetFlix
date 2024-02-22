import React from 'react';
import img from "../assets/images/logo.png"
import Button from './button';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
        
        <header className="header" data-header="">
  <div className="container">
    <div className="overlay" data-overlay="" />
    <Link to={"/"} className="logo">
      <img width={"18%"} src={img} alt="Filmlane logo" />
    </Link>
    <div className="header-actions">
      <button className="search-btn">
        <ion-icon name="search-outline" />
      </button>
      <div className="lang-wrapper">
        <label htmlFor="language">
          <ion-icon name="globe-outline" />
        </label>
        <select name="language" id="language">
          <option value="en">EN</option>
        </select>
      </div>
        
   </div>
    <button className="menu-open-btn" data-menu-open-btn="">
      <ion-icon name="reorder-two" />
    </button>
    <nav className="navbar" data-navbar="">
      <div className="navbar-top">
        <a href="./index.html" className="logo">
          <img src="./assets/images/logo.svg" alt="Filmlane logo" />
        </a>
        <button className="menu-close-btn" data-menu-close-btn="">
          <ion-icon name="close-outline" />
        </button>
      </div>
 
    </nav>
  </div>
</header>

        </>
    );
};

export default Header;
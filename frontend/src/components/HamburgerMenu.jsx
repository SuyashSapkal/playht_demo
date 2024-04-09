import React, { useState } from 'react';
import './HamburgerMenu.css'; // We'll create this file in the next step
import { useNavigate } from 'react-router-dom';

const URL = 'https://play.ht/'

function HamburgerMenu(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const routeToMainPage = () => {
    navigate("/");
  }

  const routeToProductsPage = () => {
    window.location.href = URL + 'products/';
  }
  const routeToUseCasesPage = () => {
    window.location.href = URL + 'use-cases/';
  }
  const routeToResourcesPage = () => {
    navigate("/resources");
  }
  const routeToPricingPage = () => {
    window.location.href = URL + 'pricing/';
  }
  const routeToAboutUsPage = () => {
    window.location.href = URL + 'about-us/';
  }

  return (
    <div className="hamburger-menu">
      <button onClick={toggleMenu} className="hamburger-button">
        <span className="hamburger-icon"></span>
      </button>
      {isOpen && (
        <div className="menu-items">
          <button className='bttn' id='menu' onClick={routeToMainPage}>Home</button>
          <button className='bttn' id='menu' onClick={routeToProductsPage}>Products</button>
          <button className='bttn' id='menu' onClick={routeToUseCasesPage}>Use Cases</button>
          {/* <button className='bttn' id='menu' onClick={routeToResourcesPage}>Resources</button> */}
          <button className='bttn' id='menu' onClick={routeToPricingPage}>Pricing</button>
          <button className='bttn' id='menu' onClick={routeToAboutUsPage}>About Us</button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

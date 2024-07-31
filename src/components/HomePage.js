import React from 'react';
import ButtonGrid from './ButtonGrid';
import Footer from './Footer';
import '../styles/HomePage.css'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Biodiversity App</h1>
      <ButtonGrid />
      <img src='/map.png' alt='Map' />
      <Footer />
    </div>
  );
};

export default HomePage;

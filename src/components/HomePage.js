import React from 'react';
import ButtonGrid from './ButtonGrid';
import Footer from './Footer';
import '../styles/HomePage.css';
import Header from './Header';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header title="Home Page" style={{ backgroundColor: '#125B57' }}/>
      <ButtonGrid />
      <img src='/map.png' alt='Map' />
      <Footer color="#125B57" />
    </div>
  );
};

export default HomePage;

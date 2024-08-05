import React from 'react';
import '../styles/Header.css'; 
import CloseButton from './CloseButton'; 

const Header = ({ title, color }) => {
  return (
    <div className="header" style={{ color }}>
      <CloseButton />
      <h1 className="header-title">{title}</h1>
    </div>
  );
};

export default Header;

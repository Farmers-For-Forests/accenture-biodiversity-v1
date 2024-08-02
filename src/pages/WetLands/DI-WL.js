import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import CloseButton from '../../components/CloseButton';
import FilterButtons from '../../components/FilterButtons';
import '../../styles/DI-GL.css';

const DIWetLands = () => {

  const [items, setItems] = useState([]);

 
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('your-api-endpoint'); 
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="page-container">
      <header className="header">
        <CloseButton />
        <h1 className="heading">Detailed Information</h1>
      </header>
      <div className="content">
        <FilterButtons />
        <div className="item-list">
          {items.map(item => (
            <div key={item.id} className="item">
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <p className="item-category">{item.category}</p>
                <h3 className="item-name">{item.name}</h3>
                <p className="item-author">By {item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DIWetLands;

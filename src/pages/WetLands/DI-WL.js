import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FilterButtons from '../../components/FilterButtons';
import '../../styles/DI-GL.css';

const DIWetLands = () => {
  // Divided dummy data into three parts
  const dataPart1 = [
    { id: 1, image: 'https://via.placeholder.com/150', category: 'Land1', name: 'Wet Lands 1', author: 'Author A' },
    { id: 2, image: 'https://via.placeholder.com/150', category: 'Land2', name: 'Wet Lands 2', author: 'Author B' },
  ];
  
  const dataPart2 = [
    { id: 3, image: 'https://via.placeholder.com/150', category: 'Animals1', name: 'Wet Lands 3', author: 'Author C' },
    { id: 4, image: 'https://via.placeholder.com/150', category: 'Animals2', name: 'Wet Lands 4', author: 'Author D' },
  ];
  
  const dataPart3 = [
    { id: 5, image: 'https://via.placeholder.com/150', category: 'Trees1', name: 'Wet Lands 5', author: 'Author E' },
    { id: 6, image: 'https://via.placeholder.com/150', category: 'Trees2', name: 'Wet Lands 6', author: 'Author F' },
    { id: 7, image: 'https://via.placeholder.com/150', category: 'Trees3', name: 'Wet Lands 7', author: 'Author G' },
    { id: 8, image: 'https://via.placeholder.com/150', category: 'Tress4', name: 'Wet Lands 8', author: 'Author H' },
  ];

  // Combine all parts into one object for easier access
  const allData = {
    All: [...dataPart1, ...dataPart2, ...dataPart3],
    Land: dataPart1,
    Animals: dataPart2,
    Trees: dataPart3,
  };

  // State to manage the selected filter
  const [filter, setFilter] = useState('All');

  // Function to handle filter change
  const handleFilterChange = ({ name, value }) => {
    setFilter(value);
  };

  // Get the items to display based on the selected filter
  const filteredItems = allData[filter] || [];

  return (
    <div className="page-container">
            <Header title="Wet Lands" style={{ color:"#4293B8" }}/>
      <div className="content">
        <FilterButtons onFilterChange={handleFilterChange} />
        <div className="item-list">
          {filteredItems.map(item => (
            <Link key={item.id} to={`/item/${item.id}`} className="item-link">
              <div className="item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <p className="item-category">{item.category}</p>
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-author">By {item.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer color="#4293B8" />
    </div>
  );
};

export default DIWetLands;


/*
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
      <Footer color="#4293B8"/>
    </div>
  );
};

export default DIWetLands;
*/
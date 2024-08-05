import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FilterButtons from '../../components/FilterButtons';
import '../../styles/DI-DAR.css';

// Mock function to simulate fetching item details
const fetchItemDetails = async (id) => {
  // Simulate an API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Simulated response
  return {
    id,
    image: 'https://via.placeholder.com/150',
    name: `Dry and Arid Regions ${id}`,
    audio: 'https://via.placeholder.com/150.mp3',
    description: `Description for Dry and Arid Regions ${id}.`
  };
};

const DIDryAridRegion = () => {
  // Divided dummy data into three parts
  const dataPart1 = [
    { id: 1, image: 'https://via.placeholder.com/150', category: 'Land1', name: 'Dry and Arid Regions 1', author: 'Author A' },
    { id: 2, image: 'https://via.placeholder.com/150', category: 'Land2', name: 'Dry and Arid Regions 2', author: 'Author B' },
  ];

  const dataPart2 = [
    { id: 3, image: 'https://via.placeholder.com/150', category: 'Animals1', name: 'Dry and Arid Regions 3', author: 'Author C' },
    { id: 4, image: 'https://via.placeholder.com/150', category: 'Animals2', name: 'Dry and Arid Regions 4', author: 'Author D' },
  ];

  const dataPart3 = [
    { id: 5, image: 'https://via.placeholder.com/150', category: 'Trees1', name: 'Dry and Arid Regions 5', author: 'Author E' },
    { id: 6, image: 'https://via.placeholder.com/150', category: 'Trees2', name: 'Dry and Arid Regions 6', author: 'Author F' },
    { id: 7, image: 'https://via.placeholder.com/150', category: 'Trees3', name: 'Dry and Arid Regions 7', author: 'Author G' },
    { id: 8, image: 'https://via.placeholder.com/150', category: 'Trees4', name: 'Dry and Arid Regions 8', author: 'Author H' },
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

  // Navigate to item details page
  const navigate = useNavigate();

  const handleItemClick = async (id) => {
    try {
      const itemDetails = await fetchItemDetails(id);
      // Navigate to details page with item id
      navigate(`/item/${id}`, { state: { itemDetails } });
    } catch (error) {
      console.error('Failed to fetch item details:', error);
    }
  };

  return (
    <div className="page-container">
      <Header title="Dry Arid Regions" style={{ color:"#F4910F" }}/>

      <div className="content">
        <FilterButtons onFilterChange={handleFilterChange} />
        <div className="item-list">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="item-link"
              onClick={() => handleItemClick(item.id)}
              role="button"
              tabIndex={0}
            >
              <div className="item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <p className="item-category">{item.category}</p>
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-author">By {item.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer color="#F4910F" />
    </div>
  );
};

export default DIDryAridRegion;




/*
const DIDryAridRegion = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://farmersforforests.org/admin/acc/appdata/speciesdetailsinfo');
        const data = await response.json();
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleClick = (id) => {
    navigate(`/item/${id}`);
  };

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
            <div key={item.id} className="item" onClick={() => handleClick(item.id)}>
              <img src={item.image} alt={item.name} className="item-image"/>
              <div className="item-info">
                <p className="item-category">{item.category}</p>
                <h3 className="item-name">{item.name}</h3>
                <p className="item-author">By {item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer color="#F4910F"/>
    </div>
  );
};

export default DIDryAridRegion;
*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import '../../styles/mg-summary.css';
import Footer from '../../components/Footer';

const MgSummary = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/mg-summary/DI-MG'); 
  };

  return (
    <div className="container">
      <Header title="Mandala Gardens" style={{ color:"#125B57" }}/>
      <div className="content">
        <h2 className="title">Summary of Flora, Fauna and land conditions</h2>
        <p className="description">
        Biodiversity, or biological diversity, refers to the variety of life forms on Earth, 
        encompassing all living organisms from microscopic bacteria to towering trees. 
        It includes genetic diversity within species, the variety of species in ecosystems, 
        and the diversity of ecosystems themselves. Biodiversity is crucial for ecosystem resilience, 
        providing essential services like pollination, nutrient cycling, and climate regulation. 
        However, human activities such as habitat destruction, pollution, and climate change threaten biodiversity worldwide.  
        These forests are home to a variety of plant species including teak, bamboo, sal, mahua, tendu, and many medicinal plants. 
        The Melghat Tiger Reserve and Tadoba Andhari Tiger.
        </p>
        <button className="detail-button" onClick={handleButtonClick}>Detailed Information</button>
      <Footer color="#125B57"/>
      </div>
    </div>
  );
};

export default MgSummary;

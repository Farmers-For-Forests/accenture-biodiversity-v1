import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseButton from '../../components/CloseButton';
import '../../styles/gl-summary.css';

const GlSummary = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/gl-summary/DI-GL'); 
  };

  return (
    <div className="container">
      <div className="header">
        <CloseButton />
        <h1 className="header-title">Grass Land</h1>
      </div>
      <div className="content">
        <h2 className="title">Summary of Flora, Fauna and land conditions</h2>
        <p className="description">
            They are Characterized by a mix of teak, sal and various other hardwood species. 
            They experience seasonal shedding of leaves, which is a distinct feature of deciduous forests.
            Biodiversity, or biological diversity, refers to the variety of life forms on Earth, 
            encompassing all living organisms from microscopic bacteria to towering trees. 
            It includes genetic diversity within species, the variety of species in ecosystems, 
            and the diversity of ecosystems themselves. Biodiversity is crucial for ecosystem resilience, 
            providing essential services like pollination, nutrient cycling, and climate regulation. 
            However, human activities such as habitat destruction, pollution, and climate change threaten biodiversity worldwide.  
            These forests are home to a variety of plant species including teak, bamboo, sal, mahua, tendu, and many medicinal plants. 
            The Melghat Tiger Reserve and Tadoba Andhari Tiger..
        </p>
        <button className="detail-button" onClick={handleButtonClick} >Detailed Information</button>
      </div>
    </div>
  );
};

export default GlSummary;

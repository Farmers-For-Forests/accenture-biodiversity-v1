import React from 'react';
import Footer from '../../components/Footer';
import CloseButton from '../../components/CloseButton';
import '../../styles/WesternGhatsPage.css';



const WesternGhats = () => {
  return (
    <div className="page-container">
      <header className="header">
        <CloseButton />
        <h1 class="heading">Western Ghats</h1>
      </header>
      <div className="content">
        <h2>Region overview</h2>
        <img src="/wg-1.png" alt="Butterfly" className="overview-image" />
        <p>
        The Western Ghats of Maharashtra, part of a larger mountain range spanning six states, 
        are a UNESCO World Heritage Site and a biodiversity hotspot. This range, stretching ov...
        </p>
        <a href="/western-ghats/ws-summary" className="summary-link">Summary</a>
        <img src="/wg-2.png" alt="Map" className="map-image" />
        <a href="/DI-WG.js" className="map-link">Map</a>
      </div>
      <Footer />
    </div>
  );
};

export default WesternGhats;

import React from 'react';
import Footer from '../../components/Footer';
import CloseButton from '../../components/CloseButton';
import '../../styles/WetLandsPage.css';



const WetLandsPage = () => {
  return (
    <div className="page-container">
      <header className="header">
        <CloseButton />
        <h1 class="heading">Wet Lands</h1>
      </header>
      <div className="content">
        <h2>Region overview</h2>
        <img src="/wl-1.png" alt="crocodile" className="overview-image" />
        <p>
        Maharashtra boasts a diverse array of wetland ecosystems, 
        including rivers, lakes, marshes, mangroves, and estuaries. 
        These wetlands cover approximately 2,727 square ki...
        </p>
        <a href="/wl-summary.js" className="summary-link">Summary</a>
        <img src="/wl-2.png" alt="Map" className="map-image" />
        <a href="/DI-WL.js" className="map-link">Map</a>
      </div>
      <Footer />
    </div>
  );
};

export default WetLandsPage;

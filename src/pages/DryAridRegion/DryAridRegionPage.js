import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import '../../styles/DryAridRegionPage.css';
import CloseButton from '../../components/CloseButton';


function DryAridRegionPage() {
  return (
    <div className="page-container">
      <header className="header">
        <CloseButton />
        <h1>Dry and Arid Region</h1>
      </header>
      <div className="content">
        <h2>Region overview</h2>
        <img src="dar-1.png" alt="Bird" className="overview-image" />
        <p>
        The dry and arid ecosystem of Maharashtra is a crucial part of the state’s ecological, 
        economical, and social landscapes. Stretching across regions like Marathwada, Vidarbha, ...
        </p>
        <Link to="/dry-arid-region/dar-summary" className="summary-link">Summary</Link>
        <img src="dar-2.png" alt="Map" className="map-image" />
        <Link to="/DI-DAR.js" className="map-link">Map</Link>
      </div>
      <Footer />
    </div>
  );
}

export default DryAridRegionPage;

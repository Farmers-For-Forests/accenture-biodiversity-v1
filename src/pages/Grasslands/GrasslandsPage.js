import React from 'react';
import Footer from '../../components/Footer';
import CloseButton from '../../components/CloseButton';
import '../../styles/GrassLands.css';



const GrasslandsPage = () => {
  return (
    <div className="page-container">
      <header className="header">
        <CloseButton />
        <h1 class="heading">Grass Lands</h1>
      </header>
      <div className="content">
        <h2>Region overview</h2>
        <img src="/gl-1.png" alt="crop" className="overview-image" />
        <p>
        This ecosystem, nestled within the heart of India, showcases a rich tapestry 
        of biodiversity and serves as a vital component of the state’s ecological, 
        economic and social fabric, Span...
        </p>
        <a href="/grasslands/gl-summary" className="summary-link">Summary</a>
        <img src="/gl-2.png" alt="Map" className="map-image" />
        <a href="/DI-GL.js" className="map-link">Map</a>
      </div>
      <Footer />
    </div>
  );
};

export default GrasslandsPage;

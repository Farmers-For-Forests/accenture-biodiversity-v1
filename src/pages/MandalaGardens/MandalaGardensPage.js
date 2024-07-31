import React from 'react';
import Footer from '../../components/Footer';
import CloseButton from '../../components/CloseButton';
import '../../styles/MandalaGardensPage.css';



const MandalaGardenPage = () => {
  return (
    <div className="page-container">
      <header className="header">
        <CloseButton />
        <h1 class="heading">Mandala Garden</h1>
      </header>
      <div className="content">
        <h2>Region overview</h2>
        <img src="/mg-1.png" alt="flower1" className="overview-image" />
        <p>
        The Mandala Garden, a renowned approach in permaculture design, 
        derives its name 2from the Sanskrit word “mandala”, meaning “circle”. 
        Linda Woodrow introduced this geometric ga...
        </p>
        <a href="/mg-summary.js" className="summary-link">Summary</a>
        <img src="/mg-2.png" alt="Map" className="map-image" />
        <a href="/DI-MG.js" className="map-link">Map</a>
      </div>
      <Footer />
    </div>
  );
};

export default MandalaGardenPage;

import React from 'react';
import Footer from '../../components/Footer';
import CloseButton from '../../components/CloseButton';
import '../../styles/CentralForestsPage.css';
import CfSummary from './cf-summary';
import { Link } from 'react-router-dom';



const CentralForestPage = () => {
  return (
    <div className="page-container">
      <header className="header">
        <CloseButton />
        <h1 class="heading">Central Forest</h1>
      </header>
      <div className="content">
        <h2>Region overview</h2>
        <img src="/cf-1.png" alt="Peacock" className="overview-image" />
        <p>
          The Central Deciduous Forests of Maharashtra, predominantly found in the Vidarbha region,
          encompass a vast expanse of biodiversity-rich landscapes. They are characterized by a mix...
        </p>
        <Link href="./cf-summary.js" className="summary-link">Summary</Link>
        <img src="/cf-2.png" alt="Map" className="map-image" />
        <a href="./DI-CF.js" className="map-link">Map</a>
      </div>
      <Footer />
    </div>
  );
};

export default CentralForestPage;

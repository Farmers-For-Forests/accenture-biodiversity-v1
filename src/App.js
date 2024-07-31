import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CentralForestPage from './pages/CentralForests/CentralForestsPage';
import DryAridRegionPage from './pages/DryAridRegion/DryAridRegionPage';
import GrasslandsPage from './pages/Grasslands/GrasslandsPage';
import MandalaGardenPage from './pages/MandalaGardens/MandalaGardensPage';
import WesternGhatsPage from './pages/WesternGhats/WesternGhatsPage';
import WetlandPage from './pages/WetLands/WetLandsPage';
import CfSummary from './pages/CentralForests/cf-summary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/central-forest" element={<CentralForestPage />} />
        <Route path="/central-forest/cf-summary" element={<CfSummary />} /> 
        <Route path="/dry-arid-region" element={<DryAridRegionPage />} />
        <Route path="/grasslands" element={<GrasslandsPage />} />
        <Route path="/mandala-garden" element={<MandalaGardenPage />} />
        <Route path="/western-ghats" element={<WesternGhatsPage />} />
        <Route path="/wetland" element={<WetlandPage />} />
      </Routes>
    </Router>
  );
}

export default App;

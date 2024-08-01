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
import DarSummary from './pages/DryAridRegion/dar-summary';
import GlSummary from './pages/Grasslands/gl-summary';
import MgSummary from './pages/MandalaGardens/mg-summary';
import WgSummary from './pages/WesternGhats/ws-summary';
import WlSummary from './pages/WetLands/wl-summary';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/central-forest" element={<CentralForestPage />} />
        <Route path="/central-forest/cf-summary" element={<CfSummary />} /> 
        <Route path="/dry-arid-region" element={<DryAridRegionPage />} />
        <Route path="/dry-arid-region/dar-summary" element={<DarSummary />} />
        <Route path="/grasslands" element={<GrasslandsPage />} />
        <Route path="/grasslands/gl-summary" element={<GlSummary />} />
        <Route path="/mandala-garden" element={<MandalaGardenPage />} />
        <Route path="/mandala-garden/mg-summary" element={<MgSummary />} />
        <Route path="/western-ghats" element={<WesternGhatsPage />} />
        <Route path="/western-ghats/ws-summary" element={<WgSummary />} />
        <Route path="/wetland" element={<WetlandPage />} />
        <Route path="/wetland/wl-summary" element={<WlSummary />} />
      </Routes>
    </Router>
  );
}

export default App;

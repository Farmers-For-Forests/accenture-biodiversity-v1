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
import WgSummary from './pages/WesternGhats/wg-summary';
import WlSummary from './pages/WetLands/wl-summary';
import DICentralForests from './pages/CentralForests/DI-CF';
import DIDryAridRegion from './pages/DryAridRegion/DI-DAR';
import DIGrassLands from './pages/Grasslands/DI-GL';
import DIMandalaGardens from './pages/MandalaGardens/DI-MG';
import DIWesternGhats from './pages/WesternGhats/DI-WG';
import DIWetLands from './pages/WetLands/DI-WL';
import ItemDetail from './components/ItemsDetail'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/central-forest" element={<CentralForestPage />} />
        <Route path="/central-forest/cf-summary" element={<CfSummary />} />
        <Route path="/cf-summary/DI-CF" element={<DICentralForests />} /> 
        <Route path="/dry-arid-region" element={<DryAridRegionPage />} />
        <Route path="/dry-arid-region/dar-summary" element={<DarSummary />} />
        <Route path="/dar-summary/DI-DAR" element={<DIDryAridRegion />} />
        <Route path="/grasslands" element={<GrasslandsPage />} />
        <Route path="/grasslands/gl-summary" element={<GlSummary />} />
        <Route path="/gl-summary/DI-GL" element={<DIGrassLands />} />
        <Route path="/mandala-garden" element={<MandalaGardenPage />} />
        <Route path="/mandala-garden/mg-summary" element={<MgSummary />} />
        <Route path="/mg-summary/DI-MG" element={<DIMandalaGardens />} />
        <Route path="/western-ghats" element={<WesternGhatsPage />} />
        <Route path="/western-ghats/wg-summary" element={<WgSummary />} />
        <Route path="/wg-summary/DI-WG" element={<DIWesternGhats />} />
        <Route path="/wetland" element={<WetlandPage />} />
        <Route path="/wetland/wl-summary" element={<WlSummary />} />
        <Route path="wl-summary/DI-WL" element={<DIWetLands />} />
        <Route path="/item/:id" element={<ItemDetail />} /> {/* New route for item details */}
      </Routes>
    </Router>
  );
}

export default App;

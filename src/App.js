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
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Address from '../src/pages/myAddress/Address';
import QR from './components/QR.js';
import SettingsPage from './pages/Settings/settings.js';
import Location from './pages/CustomerScience/Location.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Set login page as default */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/qrcode" element={<QR />} />
        <Route path="/address" element={<Address />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/location" element={<Location />} /> {/* Route for Page Under Construction */}
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
        <Route path="/wl-summary/DI-WL" element={<DIWetLands />} />
        <Route path="/item/:id" element={<ItemDetail fetchItemDetails={fetchItemDetails} />} />
        <Route path="/location" element={<Location />} /> {/* Route for location page */}
      </Routes>
    </Router>
  );
}

// Mock fetchItemDetails function
const fetchItemDetails = async (id) => {
  return {
    id,
    image: 'https://via.placeholder.com/150',
    name: `Central Forest ${id}`,
    audio: 'https://via.placeholder.com/150.mp3',
    description: `Description for Central Forest ${id}.`
  };
};

export default App;


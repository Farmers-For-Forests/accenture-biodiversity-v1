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
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Address from '../src/pages/myAddress/Address'
import QR from './components/QR.js';
import Turn_Off from './pages/Notifications/Turn_Off.js';
import Turn_On from './pages/Notifications/Turn_On.js';
import Language from './pages/Language_Page/Language.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/qrcode" element={<QR />} />
        <Route path="/address" element={<Address />} />
        <Route path="/notificationOn" element={<Turn_Off />} />
        <Route path="/notificationOff" element={<Turn_On />} />
        <Route path="/language" element={<Language />} />
        <Route path="/central-forest" element={<CentralForestPage />} />
        <Route path="/central-forest/cf-summary" element={<CfSummary />} /> 
        <Route path="/dry-arid-region/dar-summary" element={<DarSummary />} /> 
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

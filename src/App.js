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
import Password from './pages/Password/Password.js'
import Default_Address from './pages/myAddress/Default_Address.js';
import Account from './pages/Account/Account.js';
import Dashboard from './pages/HomePageDashboard/Dashboard.js';
import CitizenScientistKit from './pages/CitizenScientistKit/CitizenScientistKit.js';
import Discussion from './pages/CitizenScientistKit/Discussion.js';
import Posts  from './pages/CitizenScientistKit/Posts.js';
import MediaCapture from './pages/CitizenScientistKit/MediaCapture.js';
import ResetPassword from './pages/ResetPassword/ResetPassword.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />

        <Route path="/qrcode" element={<QR />} />
        <Route path="/address" element={<Address />} />
        <Route path="/notificationOn" element={<Turn_Off />} />
        <Route path="/notificationOff" element={<Turn_On />} />
        <Route path="/language" element={<Language />} />
        <Route path="/managePassword" element={<Password/>} />
        <Route path="/defaultAddress" element={<Default_Address/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/kit" element={<CitizenScientistKit/>} />
        <Route path="/discussion" element={<Discussion/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/camera" element={<MediaCapture/>} />
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

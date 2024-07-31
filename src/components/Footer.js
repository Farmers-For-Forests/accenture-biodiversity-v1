// src/components/Footer.js
import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QrCodeIcon from '@mui/icons-material/QrCode';
import SettingsIcon from '@mui/icons-material/Settings';

const Footer = () => {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label="Location" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Scan" icon={<QrCodeIcon />} />
      <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
};

export default Footer;

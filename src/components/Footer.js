import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QrCodeIcon from '@mui/icons-material/QrCode';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom'; 

const Footer = ({ color }) => {
  const navigate = useNavigate();

  return (
    <BottomNavigation
      showLabels
      sx={{ 
        backgroundColor: color,
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,  // Ensure it stays on top of other content
      }}
    >
      <BottomNavigationAction
        label="Location"
        icon={<LocationOnIcon />}
        sx={{ color: 'white' }}
        onClick={() => navigate('/location')} 
      />
      <BottomNavigationAction
        label="Scan"
        icon={<QrCodeIcon />}
        sx={{ color: 'white' }}
        onClick={() => navigate('/qrcode')} 
      />
      <BottomNavigationAction
        label="Settings"
        icon={<SettingsIcon />}
        sx={{ color: 'white' }}
        onClick={() => navigate('/settings')} 
      />
    </BottomNavigation>
  );
};

export default Footer;

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  const navigate = useNavigate();

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        textAlign: 'center', 
        padding: '20px' 
      }}
    >
      <ConstructionIcon sx={{ fontSize: '100px', color: 'grey.500' }} />
      <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '10px' }}>
        Page Under Construction
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        We’re working hard to get this page ready for you. Please check back later.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate('/home')} 
        sx={{ marginTop: '20px' }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default Location;

// src/components/Map.js
import React from 'react';
import Paper from '@mui/material/Paper';

const Map = () => {
  return (
    <Paper style={{ padding: '10px', marginTop: '20px' }}>
      <img
        src="/public/map.png"
        alt="Map"
        style={{ width: '100%', borderRadius: '10px' }}
      />
    </Paper>
  );
};

export default Map;

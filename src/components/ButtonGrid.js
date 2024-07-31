import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const CustomButton = styled(Button)(({ theme, bgcolor }) => ({
  width: '100%',
  height: '100px',
  margin: '10px 0',
  fontSize: '16px',
  backgroundColor: bgcolor,
}));

const ButtonGrid = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: 'Central Forest', color: '#f44336', path: '/central-forest' },
    { label: 'Dry and Arid Region', color: '#ff9800', path: '/dry-arid-region' },
    { label: 'Grasslands', color: '#4caf50', path: '/grasslands' },
    { label: 'Mandala Garden', color: '#00bcd4', path: '/mandala-garden' },
    { label: 'Western Ghats', color: '#795548', path: '/western-ghats' },
    { label: 'Wetland', color: '#2196f3', path: '/wetland' },
  ];

  return (
    <Grid container spacing={2} justifyContent="center">
      {buttons.map((btn, index) => (
        <Grid item xs={5} key={index}>
          <CustomButton
            variant="contained"
            bgcolor={btn.color}
            onClick={() => navigate(btn.path)}
          >
            {btn.label}
          </CustomButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default ButtonGrid;

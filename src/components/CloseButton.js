// src/components/CloseButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CloseButton = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <button 
      onClick={handleClose}
      style={{
        position: 'fixed',
        top: '30px',
        left: '20px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '40px',
        color: '#FFFFFF',
      }}
    >
      ×
    </button>
  );
};

export default CloseButton;

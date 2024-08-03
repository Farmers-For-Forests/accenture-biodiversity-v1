// QRCodeComponent.js
import React, { useState } from 'react';

import QrScanner from 'react-qr-scanner';

const QRCodeComponent = ({ value }) => {
    const [result, setResult] = useState('');

    const handleScan = data => {
      if (data) {
        setResult(data);
      }
    };
  
    const handleError = err => {
      console.error(err);
    };
  
    return (
      <div>
        <h1>Scan QR Code</h1>
        <QrScanner
          onScan={handleScan}
          onError={handleError}
          style={{ width: '100%' }}
        />
        <p>{result ? `Result: ${result}` : 'No result'}</p>
      </div>
    );
};

export default QRCodeComponent;


import React, { useState } from 'react';
import QRCodeScanner from './QRCodeScanner'; // Import the updated component

const QRComponent = () => {
  const [scannedData, setScannedData] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [isScanning, setIsScanning] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const person = [
    { name: 'John', age: 34, id: 1001 },
    // ... other person data ...
  ];

  const handleScan = (data) => {
    setScannedData(data);
    const filteredData = person.filter((person) => person.id === parseInt(data));
    setFilterData(filteredData);
    setIsScanning(false); // Stop scanning when QR code is detected
    setShowPopup(true); // Show popup when QR code is scanned
  };

  const handleBack = () => {
    setScannedData('');
    setFilterData([]);
    setIsScanning(true); // Resume scanning
    setShowPopup(false); // Hide popup
  };

  return (
    <div className="main_Container">
      <h1>Final QR</h1>
      <QRCodeScanner onScan={handleScan} isScanning={isScanning} />

      {showPopup && (
        <div className="popupOverlay" onClick={handleBack}>
          <div className="popupContent" onClick={(e) => e.stopPropagation()}>
            <h2>Scanned Data:</h2>
            <p>{scannedData}</p>
            {filterData.length > 0 ? (
              filterData.map((ele, index) => (
                <div key={index}>
                  <p>{ele.name}</p>
                </div>
              ))
            ) : (
              <p>No Data found.</p>
            )}
            <button onClick={handleBack}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRComponent;
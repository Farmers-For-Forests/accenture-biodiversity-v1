
import React, { useEffect, useState } from 'react';
import QRCodeScanner from './QRCodeScanner'; // Import the updated component
import QR_Static from './Common_Components/QR_Static';

import QR_Header from './QR_Header';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const QRComponent = () => {
 


  const [scannedData, setScannedData] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [isScanning, setIsScanning] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Log message for debugging
        console.log('Fetching data from /dataset.json');
        
        // Fetch the data
        const response = await fetch("/dataset.json");
        
        // Check if the response is okay
        if (!response.ok) {
          throw new Error("Response is not coming");
        }
        
        // Log response body for debugging
        const data = await response.json();
        console.log('Fetched data:', data);
        
        // Set the state with the fetched data
        setJsonData(data);
        
      } catch (error) {
        // Log any errors that occur
        console.error("Error fetching dataset.json:", error);
      }
    };
  
    // Call the fetch function
    fetchData();
  }, []);
  
 

  const handleScan = (data) => {
    setScannedData(data);
    // Filter data based on scanned QR code
    const filteredData = jsonData && jsonData.filter((ele) => ele.qr_id === data);
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
    <>
    <div className='top_header'>
    <QR_Header title="Home Page"/>
    </div>
      
      <div className="main_Container">
        {scannedData && scannedData ? <QR_Static/> : <QRCodeScanner onScan={handleScan} isScanning={isScanning} />}
        {showPopup && (
          <div className="popupOverlay" onClick={handleBack}>
            <div className="popupContent" onClick={(e) => e.stopPropagation()}>
              {filterData.length > 0 ? (
                filterData.map((data) => (
                  <div key={data.qr_id}>
                    
                   
                    <p> {data.name}</p>
                  </div>
                ))
              ) : (
                <p>No data found</p>
              )}
              <div className="w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center">
              <ArrowForwardIosIcon className="text-black !text-[15px]"/>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default QRComponent;

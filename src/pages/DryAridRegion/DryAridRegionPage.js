import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import '../../styles/DryAridRegionPage.css';
import Header from '../../components/Header';
import axios from 'axios';

function DryAridRegionPage() {
  const [heading, setHeading] = useState('');
  const [overview, setOverview] = useState('');
  const [paragraph, setParagraph] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://farmersforforests.org/admin/acc/appdata/homepage');
        const data = response.data;

        const dryAridRegionData = data.find(item => item.region_name === "Dry and Arid Region");
        if (dryAridRegionData) {

          setHeading(dryAridRegionData.region_name);
          setOverview(dryAridRegionData.title);

          const fullDescription = dryAridRegionData.discription;
          const words = fullDescription.split(' ');
          const truncatedDescription = words.slice(0, 50).join(' ') + (words.length > 50 ? '...' : '');
          setParagraph(truncatedDescription);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page-container">
      <Header title="Dry Arid Regions" style={{ color:"#F4910F" }}/>
      <div className="content">
        <h2>{overview}</h2>
        <img src="dar-1.png" alt="Bird" className="overview-image" />
        <p>{paragraph}</p>
        <Link to="/dry-arid-region/dar-summary" className="summary-link">Summary</Link>
        <img src="dar-2.png" alt="Map" className="map-image" />
        <Link to="/DI-DAR.js" className="map-link">Map</Link>
      </div>
      <Footer color="#F4910F" />
    </div>
  );
}

export default DryAridRegionPage;

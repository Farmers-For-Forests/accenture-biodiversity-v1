import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/WetLandsPage.css';
import axios from 'axios';

const WetLandsPage = () => {
  const [heading, setHeading] = useState('');
  const [overview, setOverview] = useState('');
  const [paragraph, setParagraph] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://farmersforforests.org/admin/acc/appdata/homepage');
        const data = response.data;

        const wetLandsData = data.find(item => item.region_name === "Wetland");
        if (wetLandsData) {

          setHeading(wetLandsData.region_name);
          setOverview(wetLandsData.title);

          const fullDescription = wetLandsData.discription;
          const words = fullDescription.split(' ');
          const truncatedDescription = words.slice(0, 25).join(' ') + (words.length > 25 ? '...' : '');
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
      <Header title="Wet Lands" style={{ color:"#4293B8" }}/>
      <div className="content">
        <h2>{overview}</h2>
        <img src="/wl-1.png" alt="Crocodile" className="overview-image" />
        <p>{paragraph}</p>
        <a href="/wetland/wl-summary" className="summary-link">Summary</a>
        <img src="/wl-2.png" alt="Map" className="map-image" />
        <a href="/DI-WL.js" className="map-link">Map</a>
      </div>
      <Footer color="#4293B8"/>
    </div>
  );
};

export default WetLandsPage;

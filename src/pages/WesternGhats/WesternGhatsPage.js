import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/WesternGhatsPage.css';
import axios from 'axios';

const WesternGhats = () => {
  const [heading, setHeading] = useState('');
  const [overview, setOverview] = useState('');
  const [paragraph, setParagraph] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://farmersforforests.org/admin/acc/appdata/homepage');
        const data = response.data;

        const westernGhatsData = data.find(item => item.region_name === "Western Ghats");
        if (westernGhatsData) {

          setHeading(westernGhatsData.region_name);
          setOverview(westernGhatsData.title);

          const fullDescription = westernGhatsData.discription;
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
      <Header title="Western Ghats" style={{ color:"#BA744A" }}/>
      <div className="content">
        <h2>{overview}</h2>
        <img src="/wg-1.png" alt="Butterfly" className="overview-image" />
        <p>{paragraph}</p>
        <a href="/western-ghats/wg-summary" className="summary-link">Summary</a>
        <img src="/wg-2.png" alt="Map" className="map-image" />
        <a href="/DI-WG.js" className="map-link">Map</a>
      </div>
      <Footer color="#BA744A"/>
    </div>
  );
};

export default WesternGhats;

import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/GrassLands.css';
import axios from 'axios';

const GrasslandsPage = () => {
  const [heading, setHeading] = useState('');
  const [overview, setOverview] = useState('');
  const [paragraph, setParagraph] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://farmersforforests.org/admin/acc/appdata/homepage');
        const data = response.data;

        const grasslandsData = data.find(item => item.region_name === "Grasslands");
        if (grasslandsData) {

          setHeading(grasslandsData.region_name);
          setOverview(grasslandsData.title);

          const fullDescription = grasslandsData.discription;
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
      <Header title="Grass Lands" style={{ color:"#86A34D" }}/>
      <div className="content">
        <h2>{overview}</h2>
        <img src="/gl-1.png" alt="crop" className="overview-image" />
        <p>{paragraph}</p>
        <a href="/grasslands/gl-summary" className="summary-link">Summary</a>
        <img src="/gl-2.png" alt="Map" className="map-image" />
        <a href="/DI-GL.js" className="map-link">Map</a>
      </div>
      <Footer color="#86A34D" />
    </div>
  );
};

export default GrasslandsPage;

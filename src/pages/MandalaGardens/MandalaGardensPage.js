import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/MandalaGardensPage.css';
import axios from 'axios';

const MandalaGardenPage = () => {
  const [heading, setHeading] = useState('');
  const [overview, setOverview] = useState('');
  const [paragraph, setParagraph] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://farmersforforests.org/admin/acc/appdata/homepage');
        const data = response.data;

        const mandalaGardenData = data.find(item => item.region_name === "Mandal Garden");
        if (mandalaGardenData) {

          setHeading(mandalaGardenData.region_name);
          setOverview(mandalaGardenData.title);

          const fullDescription = mandalaGardenData.discription;
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
      <Header title="Mandala Gardens" style={{ color:"#125B57" }}/>

      <div className="content">
        <h2>{overview}</h2>
        <img src="/mg-1.png" alt="Flower" className="overview-image" />
        <p>{paragraph}</p>
        <a href="/mandala-garden/mg-summary" className="summary-link">Summary</a>
        <img src="/mg-2.png" alt="Map" className="map-image" />
        <a href="/DI-MG.js" className="map-link">Map</a>
      </div>
      <Footer color="#125B57" />
    </div>
  );
};

export default MandalaGardenPage;

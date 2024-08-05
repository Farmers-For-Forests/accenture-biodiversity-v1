import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import '../../styles/CentralForestsPage.css';
import axios from 'axios';
import Header from '../../components/Header';

const CentralForestPage = () => {
  const [heading, setHeading] = useState('');
  const [overview, setOverview] = useState('');
  const [paragraph, setParagraph] = useState('');

  useEffect(() => {
    const fetchParagraph = async () => {
      try {
        const response = await axios.get('https://farmersforforests.org/admin/acc/appdata/homepage');
        const data = response.data;

        const centralForestData = data.find(item => item.region_name === "Central Forest");
        if (centralForestData) {

          setHeading(centralForestData.region_name);
          setOverview(centralForestData.title);

          const fullDescription = centralForestData.discription;
          const words = fullDescription.split(' ');
          const truncatedDescription = words.slice(0, 25).join(' ') + (words.length > 25 ? '...' : '');
          setParagraph(truncatedDescription);
        }
      } catch (error) {
        console.error('Error fetching paragraph data:', error);
      }
    };

    fetchParagraph();
  }, []);

  return (
    <div className="page-container">
      <Header title="Central Forests" style={{ color:"#E05555" }}/>
      <div className="content">
        <h2 class="overview-heading">{overview}</h2>
        <img src="/cf-1.png" alt="Peacock" className="overview-image" />
        <p class="overview-content">
          {paragraph}
        </p>
        <Link to="/central-forest/cf-summary" className="summary-link">Summary</Link>
        <img src="/cf-2.png" alt="Map" className="map-image" />
        <Link to="/cf-summary/DI-CF" className="map-link">Map</Link>
      </div>
      <Footer color="#E05555"/>
    </div>
  );
};

export default CentralForestPage;

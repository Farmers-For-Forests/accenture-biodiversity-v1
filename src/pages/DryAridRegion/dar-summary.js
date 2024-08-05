import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/dar-summary.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const DarSummary = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate('/dar-summary/DI-DAR'); 
  };

  return (
    <div className="container">
      <Header title="Dry Arid Regions" style={{ color:"#F4910F" }}/>
      <div className="content">
        <h2 className="title">Summary of Flora, Fauna and land conditions</h2>
        <p className="description">
        The dry and arid ecosystem of Maharashtra is a crucial part of the state's ecological, 
        economic, and social landscape.Stretching across regions like Marathwada, Vidarbha, 
        and parts of Western Maharashtra, this ecosystem is characterized by low rainfall, high temperatures, 
        and sparse vegetation. Despite its harsh conditions, it holds significant importance on multiple fronts.
        Ecologically, this ecosystem supports a unique array of flora and fauna adapted to its arid conditions. 
        Plant species like thorny bushes, succulents, and drought-resistant trees such as Babul and Neem dominate the landscape. 
        Wildlife such as Indian Gazelles, Indian Grey Wolves, and various reptiles and birds have adapted to 
        survive in this challenging environment.The ecosystem also plays a vital role in maintaining soil stability, 
        preventing erosion, and regulating local climate patterns. Economically, the dry and arid regions of 
        Maharashtra are home to agricultural activities that are adapted to the scarcity of water. 
        Traditional farming methods like rainwater harvesting, drip irrigation, and cultivation of drought-resistant crops such as millets, 
        pulses, and oilseeds are practiced here. These regions also contribute significantly to the state's economy through industries like animal husbandry, 
        beekeeping, and small-scale businesses based on locally available resources.Socially, the dry and arid ecosystem shapes 
        the lives and livelihoods of millions of people residing in these regions. It fosters a culture of resilience and innovation 
        among communities that have adapted traditional knowledge to thrive in challenging conditions. 
        However, the ecosystem l s fragility also exposes these communities to vulnerabilities such as water scarcity, 
        food insecurity, and economic fluctuations, necessitating sustainable development strategies and support systems.
        </p>
        <button className="detail-button"onClick={handleButtonClick}>Detailed Information</button>
      <Footer color='#F4910F'/>
      </div>
    </div>
  );
};

export default DarSummary;

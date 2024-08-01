import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseButton from '../../components/CloseButton';
import '../../styles/wl-summary.css';

const WlSummary = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <CloseButton />
        <h1 className="header-title">Wet Land</h1>
      </div>
      <div className="content">
        <h2 className="title">Summary of Flora, Fauna and land conditions</h2>
        <p className="description">
        Maharashtra, a state in western India, boasts a diverse array of wetland ecosystems, 
        including rivers, lakes, marshes, mangroves, and estuaries. These wetlands cover approximately 2,727 square kilometers, 
        representing about 0.89% of the state's geographical area. Notable wetlands include the
        Bhigwan Bird Sanctuary, Lonar Crater Lake, and the Mumbai Mangroves.
        
        Ecological Importance: Wetlands in Maharashtra serve as critical habitats for a variety of flora and fauna, 
        including numerous endangered species. They act as breeding grounds for fish and provide nesting sites for migratory birds. 
        The biodiversity supported by these ecosystems is immense, with species ranging from the Indian Skimmer to various 
        types of mangroves and aquatic plants. Wetlands also play a crucial role in water purification, sediment trapping, 
        and nutrient cycling, thereby maintaining water quality and supporting the surrounding terrestrial and aquatic life.
        
        Economical Importance: Economically, wetlands are indispensable. They support agriculture by providing irrigation water and 
        maintaining groundwater levels. Fisheries, which thrive in these wetland regions, are a significant source of livelihood for 
        local communities. Wetlands also bolster tourism, especially bird-watching and eco-tourism, attracting visitors to places like 
        the Bhigwan Bird Sanctuary and the unique Lonar Lake, contributing to local economies. Additionally, wetlands contribute to the 
        economy through their role in flood control and shoreline stabilization, preventing property damage and reducing disaster management costs.
        
        Social Importance: Socially, wetlands are integral to the cultural and traditional practices of local communities. 
        They are often associated with religious and cultural events, and many communities depend on wetland resources for their daily subsistence. 
        Wetlands also offer recreational opportunities and aesthetic values, enhancing the quality of life for nearby populations.
        
        Latest Facts and Figures: According to a recent report by the Maharashtra State Wetland Authority, there has been an increasing 
        recognition of the importance of wetlands. However, these ecosystems are facing threats from urbanization, pollution, and climate change. 
        Conservation efforts are underway, with projects aimed at restoring and preserving these vital ecosystems. 
        As of 2023, the state has initiated several wetland conservation projects, aiming to protect over 1 ,500 square kilometers of wetlands, 
        highlighting the government's commitment to preserving these crucial natural resources.
        </p>
        <button className="detail-button" >Detailed Information</button>
      </div>
    </div>
  );
};

export default WlSummary;

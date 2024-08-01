import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseButton from '../../components/CloseButton';
import '../../styles/wg-summary.css';

const WgSummary = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <CloseButton />
        <h1 className="header-title">Western Ghats</h1>
      </div>
      <div className="content">
        <h2 className="title">Summary of Flora, Fauna and land conditions</h2>
        <p className="description">
         The Western Ghats of Maharashtra, part of a larger mountain range spanning six states, are a UNESCO World Heritage Site 
         and a biodiversity hotspot. This range, stretching over 1 ,600 kilometers, plays a crucial ecological, economic, 
         and social role in the region.
         
         Ecological Importance: The Western Ghats are one of the world's eight "hottest hotspots" of biological diversity. 
         They house approximately 7,402 species of flowering plants, 139 mammal species, 508 bird species, and 179 amphibian species. 
         This includes numerous endemic species like the Nilgiri Tahr and the Malabar Pied Hornbill. 
         The Ghats are critical for maintaining the monsoon weather patterns that influence agriculture and water supply in Maharashtra. 
         They also act as a natural barrier, impacting the climate of the region by intercepting rain-laden monsoon winds.
         
         Economic Importance: The Western Ghats are vital for Maharashtra's economy. They are the source of major rivers like the 
         Godavari and the Krishna, essential for irrigation, drinking water, and hydroelectric power generation. 
         The rich biodiversity supports agriculture, forestry, and fishing industries. The forests provide timber, medicinal plants, 
         and non-timber forest products, sustaining local livelihoods. Moreover, the Ghats are pivotal for the tourism sector, 
         attracting numerous visitors for their scenic landscapes and biodiversity, thereby contributing to the local and state economy.
         
         Social Importance: Socially, the Western Ghats are home to several indigenous communities whose cultures and traditions are 
         deeply intertwined with the forests and biodiversity. These communities rely on the Ghats for their daily sustenance, 
         including food, fuel, and medicinal needs.
         Preservation of their traditional knowledge and sustainable practices is crucial for conserving the region's biodiversity.
         
         Latest Facts and Figures: Recent studies highlight alarming concerns about biodiversity loss due to deforestation and climate change. 
         The Forest Survey of India 2021 report shows a marginal increase in forest cover, but this is often at the cost of natural 
         forests being replaced by commercial plantations. Conservation efforts are underway, but balancing development and ecological 
         preservation remains a challenge. Initiatives like the Western Ghats Ecology Expert Panel (WGEEP) aim to develop sustainable 
         development policies to protect this vital region.
        </p>
        <button className="detail-button" >Detailed Information</button>
      </div>
    </div>
  );
};

export default WgSummary;
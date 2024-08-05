import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CloseButton from './CloseButton';
import Footer from './Footer';
import '../styles/ItemDetail.css';

const ItemDetail = ({ fetchItemDetails }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (fetchItemDetails) {
      fetchItemDetails(id).then(setItem);
    }
  }, [id, fetchItemDetails]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="page-container">
      <header className="header">
        <CloseButton />
        <h1 className="heading">Detailed Information</h1>
      </header>
      <div className="content">
        <img src={item.image} alt={item.name} className="item-image" />
        <h2>{item.name}</h2>
        <audio controls>
          <source src={item.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>{item.description}</p>
      </div>
      <Footer color="#86A34D"/>
    </div>
  );
};

export default ItemDetail;


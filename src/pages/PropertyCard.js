// src/components/PropertyCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './propertyCard.css';

const PropertyCard = ({ listing }) => {
  return (
    <div className="property-card">
      <img src={listing.image} alt={listing.title} className="property-image" />
      <div className="property-info">
        <h3>{listing.title}</h3>
        <p>{listing.location}</p>
        <p>₹{listing.price} / night</p>
        <Link to={`/listing/${listing.id}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;

import React from 'react';
import './Business.css';

// Remove the hardcoded business object

export const Business = ({ business }) => {
    return (
        <div className="Business">
            <img className="Business-image" src={business.imageSrc} alt={business.name} />
            <h2 className="Business-name">{business.name}</h2>
            <div className="Business-info">
              <div className="Business-address">
                {business.address}<br />
                {business.city}<br />
                {business.state} {business.zipCode}
              </div>
              <div className="Business-details">
                <p className="Business-category">{business.category.toUpperCase()}</p>
                <p className="Business-rating">{business.rating} stars</p>
                <p className="Business-reviews">{business.reviewCount} reviews</p>
              </div>
            </div>
        </div>
    );
}
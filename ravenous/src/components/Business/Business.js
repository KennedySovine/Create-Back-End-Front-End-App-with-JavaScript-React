import React from 'react';
import './Business.css';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};


export const Business = () => {
    return (
        <div className="Business">
            <img className="Business-image" src={business.imageSrc} alt={business.name} />
            <div className="Business-info">
                <div className="Business-name">{business.name}</div>
                <div className="Business-address">
                    {business.address}<br />
                    {business.city}<br />
                    {business.state} {business.zipCode}
                </div>
                <span className="Business-category">{business.category}</span>
                <span className="Business-rating">{business.rating} stars</span>
                <span className="Business-reviews">{business.reviewCount} reviews</span>
            </div>
        </div>
    );
}
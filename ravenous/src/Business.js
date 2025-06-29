import React from 'react';
import {styles} from './BusinessList.css';

// Business data
const defaultBusiness = {
  id: '1',
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

const BusinessData = [
  defaultBusiness,
  {
    id: '2',
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/enchiladas.jpg',
    name: 'Cornerstone Restaurant',
    address: '2000 Main Street',
    city: 'Flavortown', 
    state: 'NY',
    zipCode: '10101',
    category: 'Mexican',
    rating: 4.2,
    reviewCount: 67
  },
  {
    id: '3',
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/brunch.jpg',
    name: 'Brunch Palace',
    address: '300 Breakfast Blvd',
    city: 'Flavortown',
    state: 'NY', 
    zipCode: '10101',
    category: 'American',
    rating: 4.8,
    reviewCount: 152
  }
];

// Individual Business component
const Business = (props) => {
    const business = props.business;
    return (
        <div className="Business">
            <img src={business.imageSrc} alt=''/>
            <h2>{business.name}</h2>
            <div className="Business-information">
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{`${business.state} ${business.zipCode}`}</p>
            </div>
            <div className="Business-reviews">
                <h3>{business.category}</h3>
                <p className="rating">{business.rating} stars</p>
                <p>{business.reviewCount} reviews</p>
            </div>
        </div>
    );
}

// Business List component
const BusinessList = (props) => {
  const businesses = props.businesses || BusinessData;
  return (
    <div className="BusinessList">
      {businesses.map(business => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
};

export default Business;
export { BusinessList, BusinessData, defaultBusiness };
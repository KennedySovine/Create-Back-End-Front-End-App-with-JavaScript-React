import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BusinessList } from './components/BusinessList/BusinessList';
import { SearchBar } from './components/SearchBar/SearchBar';

const businesses = [
  {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  }
];

function App() {
  return (
    <div>
      <div className="App-header">
        <SearchBar />
      </div>
      <div className="App">
        <BusinessList businesses={businesses} />
      </div>
    </div>
  );
}

export default App;

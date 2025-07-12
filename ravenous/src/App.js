import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { BusinessList } from './components/BusinessList/BusinessList';
import { SearchBar } from './components/SearchBar/SearchBar';
import { retrieveBusinesses } from './utils/yelpAPI';


function App() {
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = async (term, location, sortBy) => {
    const results = await retrieveBusinesses(term, location, sortBy);
    setBusinesses(results);
  };

  return (
    <div>
      <div className="App-header">
        <h2>ravenous</h2>
      </div>
      <SearchBar  onSearch={handleSearch}/>
      <div className="App">
        <BusinessList businesses={businesses} />
      </div>
    </div>
  );
}

export default App;

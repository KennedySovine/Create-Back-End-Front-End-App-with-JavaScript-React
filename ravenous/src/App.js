import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import SearchBar from './SearchBar';
import { BusinessList } from './Business';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;

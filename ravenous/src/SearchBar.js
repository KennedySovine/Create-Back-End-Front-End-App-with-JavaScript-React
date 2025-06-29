import React from 'react';

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <div className="SearchOptions">
                <button className="BestMatch">Best Match</button>
                <button className="HighestRated">Highest Rated</button>
                <button className="MostReviewed">Most Reviewed</button>
            </div>
            <div className="SearchInput">
                <input type="text" placeholder="Search for Businesses" />
                <input type="text" placeholder="Where?" />
                <button className="SearchButton">Search</button>
            </div>
        </div>
    );
}

export default SearchBar;
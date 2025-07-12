import React, { useState } from "react";
import './SearchBar.css';
import { retrieveBusinesses } from '../../utils/yelpAPI';

export const SearchBar = ({onSearch}) => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(term, location, sortBy);
    };

    return (
        <div className="SearchBar">
            <div className="sort-options">
                <button
                    className={sortBy === 'best_match' ? 'active' : ''}
                    onClick={() => setSortBy('best_match')}
                    type="button">
                    Best<br />Match
                </button>
                <button
                    className={sortBy === 'rating' ? 'active' : ''}
                    onClick={() => setSortBy('rating')}
                    type="button">
                    Highest<br />Rated
                </button>
                <button
                    className={sortBy === 'review_count' ? 'active' : ''}
                    onClick={() => setSortBy('review_count')}
                    type="button">
                    Most<br />Reviewed
                </button>
            </div>

            <form className="SearchBar-form" onSubmit={handleSubmit}>
                <div className="search-options">
                    <input
                        type="text"
                        placeholder="Search Businesses"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Where?"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <button className="lets-go" type="submit">Let's Go</button>
            </form>
        </div>
    );
}
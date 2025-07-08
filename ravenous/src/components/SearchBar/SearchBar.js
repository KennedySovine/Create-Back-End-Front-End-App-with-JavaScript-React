import React, { useState } from "react";

export const SearchBar =() => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would use term, location, and sortBy
        // For now, you can just log them or pass them to a parent via props
        console.log(term, location, sortBy);
    };

    return (
        <div>
            <div className="sort-options">
                <button
                    className={sortBy === 'best_match' ? 'active' : ''}
                    onClick={() => setSortBy('best_match')}
                    type = "button">
                    Best<br />Match
                </button>
                <button
                    className={sortBy === 'rating' ? 'active' : ''}
                    onClick={() => setSortBy('rating')}
                    type = "button">
                    Highest<br />Rated
                </button>
                <button
                    className={sortBy === 'review_count' ? 'active' : ''}
                    onClick={() => setSortBy('review_count')}
                    type = "button">
                    Most<br />Reviewed
                </button>
                </div>

                <div className="search-bar">
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit">Let's Go</button>
                    </form>
                </div>
        </div>
    );
}
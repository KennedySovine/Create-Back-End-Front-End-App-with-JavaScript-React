import React from 'react';
import { Business } from '../Business/Business';

export const BusinessList = ({ businesses }) => {
    return (
        <div className="BusinessList">
        {businesses.map((business, index) => (
            <Business key={index} business={business} />
        ))}
        </div>
    );
}

import React from 'react';
import { Business } from '../Business/Business';
import './BusinessList.css';

export const BusinessList = ({ businesses }) => {
    return (
        <div className="BusinessList">
        {businesses.map((business)=> (
            <Business key={business.id} business={business} />
        ))}
        </div>
    );
}

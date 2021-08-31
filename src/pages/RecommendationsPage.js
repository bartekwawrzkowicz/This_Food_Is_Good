import React from 'react';

import '../styles/Construction.scss';

import UnderConstruction from '../images/under.gif';

const RecommendationsPage = () => {
    return (
        <div className="recommendations-under-construction">
            <img src={UnderConstruction} alt="under" />
        </div>
    );
}

export default RecommendationsPage;
import React from 'react';

import '../styles/Construction.scss';

import UnderConstruction from '../images/under.gif';

const RecommendationsPage = () => {
    return (
        <>
            <div className="construction-column">
                <div className="recommendations-under-construction">
                    <img src={UnderConstruction} alt="under" />
                </div>
                <div className="recommendations-text">Tutaj powstaje podstrona, na której znajdziecie nasze kulinarne rekomendacje</div>
            </div>
        </>
    );
}

export default RecommendationsPage;
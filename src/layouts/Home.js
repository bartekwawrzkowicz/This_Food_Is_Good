import React from 'react';

import '../styles/Home.scss';
import DetailsText from '../articles/text.json';


const Home = () => {

    const { homePageMainText, homePageSection, homePageHeader } = DetailsText.text;

    return (
        <>
            <div className="homepage-main row">
                <div className="homepage-text">
                    {homePageHeader}
                </div>

                <div className="homepage-text">
                    {homePageMainText}
                </div>

                <div className="homepage-text">
                    {homePageSection}
                </div>
            </div>
        </>
    );
}

export default Home;
import React from 'react';

import aboutDetails from '../articles/text.json';
import '../styles/AboutPage.scss';

import aboutImage from '../images/about-image.jpg';
import foodIcon from '../icons/food.png';
import dogIcon from '../icons/dog.png';
import instrumentIcon from '../icons/instrument.png';
import travelIcon from '../icons/travel.png';


const AboutPage = () => {

    const data = aboutDetails.text;

    return (
        <>
            <div className="homepage-main row">
                <div className="homepage-text">{data.aboutText}</div>
                <div className="homepage-image">
                    <img src={aboutImage} alt="about" />
                </div>
            </div>

            <div className="icon">
                <div className="icon-column">
                    <div className="icon-icons">
                        <img src={foodIcon} alt="food-icon" />
                    </div>
                    <div className="icon-text">
                        {data.foodIconText}
                    </div>
                </div>

                <div className="icon-column">
                    <div className="icon-icons">
                        <img src={dogIcon} alt="dog-icon" />
                    </div>
                    <div className="icon-text">
                        {data.dogIconText}
                    </div>
                </div>

                <div className="icon-column">
                    <div className="icon-icons">
                        <img src={instrumentIcon} alt="instrument-icon" />
                    </div>
                    <div className="icon-text">
                        {data.instrumentIconText}
                    </div>
                </div>

                <div className="icon-column">
                    <div className="icon-icons">
                        <img src={travelIcon} alt="travel-icon" />
                    </div>
                    <div className="icon-text">
                        {data.travelIconText}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;
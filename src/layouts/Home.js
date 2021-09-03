import React from 'react';

import '../styles/Home.scss';
import iconData from '../articles/restaurants.json';

import foodIcon from '../icons/food.png';
import dogIcon from '../icons/dog.png';
import instrumentIcon from '../icons/instrument.png';
import travelIcon from '../icons/travel.png';

const Home = () => {

    const data = iconData[0].text;

    return (
        <>
            <div className="icon-main">
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

export default Home;
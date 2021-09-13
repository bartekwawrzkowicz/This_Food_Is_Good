import React from 'react';

import Restaurant from '../components/restaurants/RestaurantList';
import InfoBanner from '../layouts/InfoBanner';
import RestaurantDetails from '../articles/restaurants.json';

const details = RestaurantDetails.map((item, index) => {
    return (
        <div key={index}>
            <Restaurant number={index} />
        </div>)
})


const RestaurantPage = () => {

    return (
        <>
            <div className="banner-column">
                <InfoBanner />
            </div>
            {details}
        </>
    )
}

export default RestaurantPage;
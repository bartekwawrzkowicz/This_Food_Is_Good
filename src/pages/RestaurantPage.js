import React from 'react';
import Restaurant from '../components/restaurants/RestaurantList';
import InfoBanner from '../layouts/InfoBanner';
import Info from '../articles/restaurants.json';

const infoArray = [...Info];
const loopedArray = infoArray.map((item, index) => {
    return (
        <div key={index}>
            <Restaurant number={index} />
        </div>)
})

const RestaurantPage = () => {

    return (
        <>
            <InfoBanner />
            {loopedArray}
        </>
    )
}

export default RestaurantPage;
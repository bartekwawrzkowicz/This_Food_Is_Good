import React from 'react';
import Restaurant from '../components/restaurants/RestaurantList';
import InfoBanner from '../layouts/InfoBanner';

const RestaurantPage = () => {

    return (
        <>
            <div className="banner-column">
                <InfoBanner />
            </div>
            <Restaurant number={1} />
            <Restaurant number={2} />
            <Restaurant number={3} />
            <Restaurant number={4} />
            <Restaurant number={5} />
            <Restaurant number={6} />
            <Restaurant number={7} />
            <Restaurant number={8} />
            <Restaurant number={9} />
            <Restaurant number={10} />
            <Restaurant number={11} />
            <Restaurant number={12} />
        </>
    )
}

export default RestaurantPage;
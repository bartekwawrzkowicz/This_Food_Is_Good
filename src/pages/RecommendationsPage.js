import React from 'react';
import { Link } from 'react-router-dom';

import restaurantData from '../articles/restaurants.json';
import Data from '../articles/text.json';
import '../styles/Recommendation.scss';




const RecommendationsPage = () => {

    const recommendation = Data.text.recommendationPageText;

    return (
        <>
            <div className="recommendation-column">
                <div className="recommendation-text">
                    {recommendation}
                </div>
                <div className="recommendation-heading">
                    <Link to={{ pathname: "http://www.sunsetbreeze.net" }} style={{ textDecoration: 'none' }} target="_blank" >
                        <h2 className="restaurant__name">{restaurantData[0].name}</h2>
                    </Link>
                    <p className="restaurant__country">{restaurantData[0].town}, {restaurantData[0].country}</p>

                    <Link to={{ pathname: "http://www.versaillesrestaurant.com" }} style={{ textDecoration: 'none' }} target="_blank" >
                        <h2 className="restaurant__name">{restaurantData[4].name}</h2>
                    </Link>
                    <p className="restaurant__country">{restaurantData[4].town}, {restaurantData[4].country}</p>

                    <Link to={{ pathname: "http://www.facebook.com/CudaWiankiPrzemysl" }} style={{ textDecoration: 'none' }} target="_blank" >
                        <h2 className="restaurant__name">{restaurantData[5].name}</h2>
                    </Link>
                    <p className="restaurant__country">{restaurantData[5].town}, {restaurantData[5].country}</p>

                    <Link to={{ pathname: "https://restauracja-bohema.pl/" }} style={{ textDecoration: 'none' }} target="_blank" >
                        <h2 className="restaurant__name">{restaurantData[13].name}</h2>
                    </Link>
                    <p className="restaurant__country">{restaurantData[13].town}, {restaurantData[13].country}</p>

                    <Link to={{ pathname: "https://alohapoke.eatbu.com/?lang=pl" }} style={{ textDecoration: 'none' }} target="_blank" >
                        <h2 className="restaurant__name">{restaurantData[6].name}</h2>
                    </Link>
                    <p className="restaurant__country">{restaurantData[6].town}, {restaurantData[6].country}</p>

                    <Link to={{ pathname: "https://www.cheenhuaye.com" }} style={{ textDecoration: 'none' }} target="_blank" >
                        <h2 className="restaurant__name">{restaurantData[8].name}</h2>
                    </Link>
                    <p className="restaurant__country">{restaurantData[8].town}, {restaurantData[8].country}</p>

                    <Link to={{ pathname: "https://www.dworzysko.pl" }} style={{ textDecoration: 'none' }} target="_blank" >
                        <h2 className="restaurant__name">{restaurantData[10].name}</h2>
                    </Link>
                    <p className="restaurant__country">{restaurantData[10].town}, {restaurantData[10].country}</p>
                </div>

                <div className="recommendation-text">
                    {Data.text.recommendationPageSummaryText}
                </div>
            </div>
        </>
    );
}

export default RecommendationsPage;
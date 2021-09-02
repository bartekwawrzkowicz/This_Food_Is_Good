import React, { useState } from 'react';
import restaurantData from '../../articles/restaurants.json';

import Button from '../../layouts/Button';

import '../../styles/Restaurant.scss';

const RestaurantList = props => {

    const [nonActive, setNonActive] = useState(true);

    const activeHandler = () => {
        setNonActive(!nonActive);
    }

    return (
        <>
            <div className="restaurant-heading">
                <h1 className="restaurant-heading__header" onClick={activeHandler}>{restaurantData[props.number].name}</h1>
                <p className="restaurant-heading__www">{restaurantData[props.number].www}</p>
                <h2 className="restaurant-heading__title">{restaurantData[props.number].address}</h2>
                <p className="restaurant-heading__text">{restaurantData[props.number].town}, {restaurantData.country}</p>

                <div className={nonActive ? "restaurant-content row non-active" : "restaurant-content row"}>
                    <div className="restaurant-block">
                        <div className="restaurant-block__images">
                            <img src={restaurantData[props.number].images_first_dish} alt="first-dish" />
                        </div>
                        <div className="restaurant-block__info">
                            <p>{restaurantData[props.number].first_dish}</p>
                        </div>
                    </div>

                    <div className="restaurant-block">
                        <div className="restaurant-block__images">
                            <img src={restaurantData[props.number].images_second_dish} alt="second-dish" />
                        </div>
                        <div className="restaurant-block__info">
                            <p>{restaurantData[props.number].second_dish}</p>
                        </div>
                    </div>

                    <div className="restaurant-block">
                        <div className="restaurant-block__images">
                            {restaurantData[props.number].images_third_dish ?
                                <img src={restaurantData[props.number].images_third_dish
                                } alt="third-dish" /> : null}
                        </div>
                        {restaurantData[props.number].third_dish ?
                            <div className="restaurant-block__info">
                                <p>{restaurantData[props.number].third_dish}</p>
                            </div> : null}
                    </div>

                    <div className="restaurant-footer__info">___
                            <p className="restaurant-footer__info-text">{restaurantData[props.number].text}</p>
                        <p className="restaurant-footer__symbol">_________</p>
                    </div>

                </div>
            </div>
            <Button state={nonActive} click={activeHandler} />
        </>
    )


}

export default RestaurantList;
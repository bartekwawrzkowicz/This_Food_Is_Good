import React, { useState } from 'react';

import restaurantData from '../../articles/restaurants.json';
import Button from '../../layouts/Button';
import '../../styles/Restaurant.scss';


const RestaurantList = props => {

    const [nonActive, setNonActive] = useState(true);

    const buttonActiveHandler = () => {
        setNonActive(!nonActive);
    }

    return (
        <>
            <div className="restaurant">
                <h2 className="restaurant__name" onClick={buttonActiveHandler}>{restaurantData[props.number].name}</h2>
                <p className="restaurant__link">{restaurantData[props.number].www}</p>
                <h2 className="restaurant__address">{restaurantData[props.number].address}</h2>
                <p className="restaurant__country">{restaurantData[props.number].town}, {restaurantData[props.number].country}</p>

                <ul className={nonActive ? "restaurants row non-active" : "restaurants row"}>
                    <li className="restaurants__item">
                        <div className="restaurants__item-image">
                            <img src={restaurantData[props.number].images_first_dish} alt="first-dish" />
                        </div>
                        <article className="restaurants__item-article">
                            {restaurantData[props.number].first_dish}
                        </article>
                    </li>

                    <li className="restaurants__item">
                        <div className="restaurants__item-image">
                            <img src={restaurantData[props.number].images_second_dish} alt="second-dish" />
                        </div>
                        <article className="restaurants__item-article">
                            {restaurantData[props.number].second_dish}
                        </article>
                    </li>

                    <li className="restaurants__item">
                        <div className="restaurants__item-image">
                            {restaurantData[props.number].images_third_dish ?
                                <img src={restaurantData[props.number].images_third_dish
                                } alt="third-dish" /> : null}
                        </div>
                        {restaurantData[props.number].third_dish ?
                            <article className="restaurants__item-article">
                                <p>{restaurantData[props.number].third_dish}</p>
                            </article> : null}
                    </li>

                    <li className="restaurants__item">
                        <div className="restaurants__item-image">
                            {restaurantData[props.number].images_fourth_dish ?
                                <img src={restaurantData[props.number].images_fourth_dish
                                } alt="fourth-dish" /> : null}
                        </div>
                        {restaurantData[props.number].fourth_dish ?
                            <article className="restaurants__item-article">
                                {restaurantData[props.number].fourth_dish}
                            </article> : null}
                    </li>

                    <li className="restaurants__item">
                        <div className="restaurants__item-image">
                            {restaurantData[props.number].images_fifth_dish ?
                                <img src={restaurantData[props.number].images_fifth_dish
                                } alt="fifth-dish" /> : null}
                        </div>
                        {restaurantData[props.number].fifth_dish ?
                            <article className="restaurants__item-article">
                                {restaurantData[props.number].fifth_dish}
                            </article> : null}
                    </li>

                    <div className="restaurant__footer">
                        <article className="restaurant__footer-article">{restaurantData[props.number].text}</article>
                    </div>

                </ul>

            </div>
            <Button state={nonActive} click={buttonActiveHandler} />

        </>
    )
}

export default RestaurantList;
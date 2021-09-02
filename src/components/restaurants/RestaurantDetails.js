import React from 'react';
import '../../styles/Restaurant.scss';

const RestaurantDetails = props => {
    const { state, details } = props;
    return (
        <>
            <div className={{ state } ? "restaurant-content row non-active" : "restaurant-content row"}>
                <div className="restaurant-block">
                    <div className="restaurant-block__images">
                        <img src={details.images_first_dish} alt="first-dish" />
                    </div>
                    <div className="restaurant-block__info">
                        <p>{details.first_dish}</p>
                    </div>
                </div>

                <div className="restaurant-block">
                    <div className="restaurant-block__images">
                        <img src={details.images_second_dish} alt="second-dish" />
                    </div>
                    <div className="restaurant-block__info">
                        <p>{details.second_dish}</p>
                    </div>
                </div>

                <div className="restaurant-block">
                    <div className="restaurant-block__images">
                        {details.images_third_dish ?
                            <img src={details.images_third_dish
                            } alt="third-dish" /> : null}
                    </div>
                    {details.third_dish ?
                        <div className="restaurant-block__info">
                            <p>{details.third_dish}</p>
                        </div> : null}
                </div>

                <div className="restaurant-footer__info">___
                            <p className="restaurant-footer__info-text">{details.text}</p>
                    <p className="restaurant-footer__symbol">_________</p>
                </div>

            </div>
        </>
    );
}

export default RestaurantDetails;
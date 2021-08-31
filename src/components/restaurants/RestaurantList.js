import React, { useState } from 'react';
import PostData from '../../articles/dishes.json';

import '../../styles/RestaurantList.scss';

const RestaurantList = () => {

    const [nonActive, setNonActive] = useState(true);

    const PostDataDetails = PostData.map((postDetail) => {

        return (
            <>
                <div className="restaurant-heading">
                    <h1 className="restaurant-heading__header" onClick={() => setNonActive(!nonActive)}>{postDetail.name}</h1>
                    <p className="restaurant-heading__www">{postDetail.www}</p>
                    <h2 className="restaurant-heading__title">{postDetail.address}</h2>
                    <p className="restaurant-heading__text">{postDetail.town}, {postDetail.country}</p>

                    <div className={nonActive ? "restaurant-content row non-active" : "restaurant-content row"}>
                        <div className="restaurant-block">
                            <div className="restaurant-block__images">
                                <img src={postDetail.images_first_dish} alt="first-dish" />
                            </div>
                            <div className="restaurant-block__info">
                                <p>{postDetail.first_dish}</p>
                            </div>
                        </div>

                        <div className="restaurant-block">
                            <div className="restaurant-block__images">
                                <img src={postDetail.images_second_dish} alt="second-dish" />
                            </div>
                            <div className="restaurant-block__info">
                                <p>{postDetail.second_dish}</p>
                            </div>
                        </div>

                        <div className="restaurant-block">
                            <div className="restaurant-block__images">
                                {postDetail.images_third_dish ?
                                    <img src={postDetail.images_third_dish
                                    } alt="third-dish" /> : null}
                            </div>
                            {postDetail.third_dish ?
                                <div className="restaurant-block__info">
                                    <p>{postDetail.third_dish}</p>
                                </div> : null}
                        </div>

                        <div className="restaurant-footer__info">
                            <p className="restaurant-footer__info-text">{postDetail.text}</p>
                            <p className="restaurant-footer__symbol">_________</p>
                        </div>

                    </div>
                </div>

            </>
        )
    })

    return (
        <>
            <div> {PostDataDetails} </ div>
        </>
    );
}

export default RestaurantList;
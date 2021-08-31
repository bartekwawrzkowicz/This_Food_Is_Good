import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import RestaurantPage from '../pages/RestaurantPage';
import RecommendationsPage from '../pages/RecommendationsPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';


const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/restaurants" component={RestaurantPage} />
                <Route path="/recommendations" component={RecommendationsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/error" component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;
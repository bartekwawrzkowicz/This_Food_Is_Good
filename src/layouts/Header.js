import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import '../images/bg-image.jpeg';
import '../styles/Header.scss';


const Header = () => {
    return (
        <Route>
            <div className="header block">
                <header className="header-main row">
                    <div className="header-main__logo">this food is good ©</div>
                    <div className="header-main__nav">
                        <Navigation />
                    </div>
                </header>
            </div>
        </Route>
    );
}

export default Header;
import React from 'react';
import '../images/bg-image.jpeg';
import '../styles/Header.scss';

const Header = () => {
    return (
        <div className="header">
            <header className="header-main">
                <div className="header-main__logo">this food is good<span className="header-main__logo copy"> ©</span></div>
                <div className="header-main__nav">
                    <a href="#">kontakt</a>
                    <a href="#">potrawy</a>
                    <a href="#">kraje</a>
                    <a href="#">o mnie</a>
                </div>
            </header>
        </div>
    );
}

export default Header;
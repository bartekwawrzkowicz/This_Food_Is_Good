import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.scss';

const list = [
    { name: "home", path: "/", exact: true },
    { name: "o nas", path: "/about", },
    { name: "restauracje", path: "/restaurants", },
    { name: "rekomendacje", path: "/recommendations", },
    { name: "kontakt", path: "/contact", },
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>
                {item.name}
            </NavLink>
        </li>
    ))

    return (
        <nav>
            <ul className="main-nav__list">
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;
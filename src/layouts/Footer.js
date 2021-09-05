import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

import logo from '../images/logo/codeodrive - logo.png';


const Footer = () => {
    return (
        <div className="footer-block block">

            <div className="footer-block__logo block-of-3">
                <Link to={{ pathname: "http://www.codeodrive.com" }} target="_blank" >
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className="footer-block__info-first block-of-3">
                <p className="footer-block__info-first-paragraph">&copy; 2021 <strong>codeodrive</strong>. All rights reserved.</p>
            </div>

            <div className="footer-block__info-second block-of-3">
                <p className="footer-block__info-second-paragraph">designed by BW &amp; MK.</p>
            </div>

        </div>
    );
}

export default Footer;